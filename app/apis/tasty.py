# TODO explicit imports
from app.models import *
import json


def tasty_browse(index=0):
    if index == 0:
        file = open("app/fixtures/recipeList.json").read()
        output = json.loads(file)
        pks = []
        for result in output['results']:
            pks.append(create_or_find(result))
        return pks
    else:
        pass
    # TODO add in API call to tasty for paginated results


def create_or_find(data):
    result = Recipe.objects.filter(raw=data).first()
    if result:
        return result.pk

    try:
        recipe = Recipe()
        recipe.name = data['name']
        recipe.description = data['description']
        recipe.source = Recipe.RecipeSource.TASTY
        recipe.raw = data
        recipe.image_url = data['thumbnail_url']
        recipe.source_url = data['inspired_by_url']
        recipe.video_url = data['original_video_url']
        recipe.save()

        step_list = [RecipeStep(step=x['display_text'], recipe=recipe) for x in data['instructions']]
        RecipeStep.objects.bulk_create(step_list)
        # for instruction in data['instructions']:
        #     recipe_step = RecipeStep(step=instruction['display_text'], recipe=recipe)
        #     recipe_step.save()

        for section in data['sections']:
            ingredient_list = [RecipeIngredient(ingredient=x['raw_text'], recipe=recipe) for x in section['components']]
            RecipeIngredient.objects.bulk_create(ingredient_list)
        # for ingredient in data['sections']:
        #     for component in ingredient['components']:
        #         recipe_ingredient = RecipeIngredient(ingredient=component['raw_text'], recipe=recipe)
        #         recipe_ingredient.save()

        if data['nutrition']:
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

#
# def parse_tasty_api_to_json(json_data):
#     recipe = {
#         'source': Recipe.RecipeSource.TASTY,
#         'name': json_data['name'],
#         'description': json_data['description'],
#         'raw': json_data,
#         'image_url': json_data['thumbnail_url'],
#         'source_url': json_data['inspired_by_url'],
#         'video_url': json_data['original_video_url'],
#     }
#
#     instructions = []
#     for instruction in json_data['instructions']:
#         instructions.append(instruction['display_text'])
#     recipe['recipe_steps'] = instructions
#
#     ingredients = []
#     for section in json_data['sections']:
#         for component in section['components']:
#             ingredients.append(component['raw_text'])
#     recipe['ingredients'] = ingredients
#
#     recipe['nutrition'] = json_data['nutrition']
#     return recipe
