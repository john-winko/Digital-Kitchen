import json
import os
import requests
from app.models import Recipe, RecipeStep, RecipeIngredient


def parse_url_api(url_lookup):
    try:
        url = "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi"

        payload = url_lookup
        headers = {
            "content-type": "text/plain",
            "X-RapidAPI-Host": "mycookbook-io1.p.rapidapi.com",
            "X-RapidAPI-Key": os.getenv('RAPID_API_KEY')
        }

        response = requests.request("POST", url, data=payload, headers=headers)
        json_text = json.loads(response.text)
        data = json_text[0]

        recipe = Recipe(
            source=Recipe.RecipeSource.URLPARSE,
            name=data['name'],
            description=data['description'],
            raw=data,
            image_url=data['images'][0] if len(data['images']) else "",
            source_url=data['url'],
            video_url="",
        )
        recipe.save()

        for instruction in data['instructions']:
            instructions = [RecipeStep(step=x, recipe=recipe) for x in instruction['steps']]
            RecipeStep.objects.bulk_create(instructions)

        ingredients = [RecipeIngredient(ingredient=x, recipe=recipe) for x in data['ingredients']]
        RecipeIngredient.objects.bulk_create(ingredients)

        return recipe

    except Exception as e:
        print(e)
        recipe.delete()
        return None

