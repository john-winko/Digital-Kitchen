from app.models import Recipe, RecipeStep, RecipeIngredient


def create_recipe(json_data):
    recipe = Recipe()
    recipe.name = json_data['name']
    recipe.raw = json_data
    recipe.image_url = json_data['image_url']
    recipe.video_url = json_data['video_url']
    recipe.description = json_data['description']
    recipe.source_url = json_data['source_url']
    recipe.source = json_data['source']
    recipe.save()
    for step in json_data['recipe_steps']:
        recipe_step = RecipeStep(step=step, recipe=recipe)
        # TODO look at bulk add again
        recipe_step.save()

    for ingredient in json_data['ingredients']:
        recipe_ingredient = RecipeIngredient(ingredient=ingredient, recipe=recipe)
        recipe_ingredient.save()

    return recipe
