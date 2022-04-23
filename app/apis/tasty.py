from app.models import Recipe
import json


def tasty_browse(index=0):
    if index == 0:
        file = open("app/fixtures/recipeList.json").read()
        output = json.loads(file)
        return parse_tasty_api_to_json(output)
    else:
        pass
    # TODO add in API call to tasty for paginated results


def parse_tasty_api_to_json(json_data):
    recipe = {
        'source': Recipe.RecipeSource.TASTY,
        'name': json_data['name'],
        'description': json_data['description'],
        'raw': json_data,
        'image_url': json_data['thumbnail_url'],
        'source_url': json_data['inspired_by_url'],
        'video_url': json_data['original_video_url'],
    }

    instructions = []
    for instruction in json_data['instructions']:
        instructions.append(instruction['display_text'])
    recipe['recipe_steps'] = instructions

    ingredients = []
    for section in json_data['sections']:
        for component in section['components']:
            ingredients.append(component['raw_text'])
    recipe['ingredients'] = ingredients

    recipe['nutrition'] = json_data['nutrition']
    return recipe
