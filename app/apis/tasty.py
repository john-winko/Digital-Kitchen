# TODO explicit imports
import os

from app.models import *
import json
import requests


def tasty_browse(index=1, query=None):
    # only waste api calls if they are searching past the first set of results
    if index < 2 and query is None:
        file = open("app/fixtures/recipeList.json").read()
        output = json.loads(file)
        pks = []
        for result in output['results']:
            pks.append(create_or_find(result))
        return pks, output['count'] if 'count' in output else 0
    else:
        url = "https://tasty.p.rapidapi.com/recipes/list"
        querystring = {"from": (index-1)*20, "size": "20"}
        if query:
            querystring['q'] = query
        headers = {
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
            "X-RapidAPI-Key": os.getenv('RAPID_API_KEY')
        }
        response = requests.request("GET", url, headers=headers, params=querystring)
        output = json.loads(response.text)
        pks = []
        for result in output['results']:
            pks.append(create_or_find(result))
        return pks, output['count'] if 'count' in output else 0


def create_or_find(data):
    result = Recipe.objects.filter(raw=data).first()
    if result:
        return result.pk

    try:
        recipe = Recipe()
        recipe.name = data['name']
        recipe.description = data['description'] if 'description' in data else ""
        recipe.source = Recipe.RecipeSource.TASTY
        recipe.raw = data
        recipe.image_url = data['thumbnail_url'] if 'thumbnail_url' in data else ""
        recipe.source_url = data['inspired_by_url'] if 'inspired_by_url' in data else ""
        recipe.video_url = data['original_video_url'] if 'original_video_url' in data else ""
        recipe.save()

        if 'instructions' in data:
            step_list = [RecipeStep(step=x['display_text'], recipe=recipe) for x in data['instructions']]
            RecipeStep.objects.bulk_create(step_list)

        if 'sections' in data:
            for section in data['sections']:
                ingredient_list = [RecipeIngredient(ingredient=x['raw_text'], recipe=recipe) for x in section['components']]
                RecipeIngredient.objects.bulk_create(ingredient_list)

        if 'nutrition' in data and data['nutrition']:
            nutrition = Nutrition(
                fat=data['nutrition']['fat'],
                protein=data['nutrition']['protein'],
                calories=data['nutrition']['calories'],
                carbohydrates=data['nutrition']['carbohydrates'],
                fiber=data['nutrition']['fiber'],
                sugar=data['nutrition']['sugar']
            )
            nutrition.save()
            recipe.nutrition = nutrition
            recipe.save()
        return recipe.pk
    except Exception as e:
        print(e)
        recipe.delete()
        return None
