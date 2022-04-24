from app.models import Recipe, RecipeStep, RecipeIngredient


def parse_url_api(data):
    try:
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

