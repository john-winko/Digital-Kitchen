from app.models import Recipe


def parse_url_api_to_json(json_data):
    recipe = {
        'source': Recipe.RecipeSource.URLPARSE,
        'name': json_data['name'],
        'description': json_data['description'],
        'raw': json_data,
        'image_url': json_data['images'][0] if len(json_data['images']) else "",
        'source_url': json_data['url'],
        'video_url': "",
    }

    instructions = []
    for instruction in json_data['instructions']:
        for step in instruction['steps']:
            instructions.append(step)
    recipe['recipe_steps'] = instructions

    ingredients = []
    for ingredient in json_data['ingredients']:
        ingredients.append(ingredient)
    recipe['ingredients'] = ingredients
    return recipe

