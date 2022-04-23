from rest_framework import serializers
from django.contrib.auth.models import User
# TODO explicit imports
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ["password"]


class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        # fields = ['user, keyword, acceptability']
        fields = "__all__"


class RecipeIngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeIngredient
        fields = [
            'ingredient',
            # 'recipe(_id)'
        ]
        # fields = "__all__"


class RecipeStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeStep
        fields = [
            'step',
            # 'recipe(_id)'
        ]
        # fields = "__all__"


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        # fields = [
        #     'name',
        #     'raw',
        #     'image_url',
        #     'video_url',
        #     'description',
        #     'source_url',
        #     'nutrition',      # FK
        #     'source',         # Integer.choices
        #     'recipe_steps',   # FK
        #     'ingredients'     # FK
        # ]
        fields = "__all__"
    recipe_steps = RecipeStepSerializer(many=True)
    ingredients = RecipeIngredientSerializer(many=True)


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


def create_recipe(json_data):
    recipe = Recipe()
    recipe.name = json_data['name']
    recipe.raw = json_data['raw']
    recipe.image_url = json_data['image_url']
    recipe.video_url = json_data['video_url']
    recipe.description = json_data['description']
    recipe.source_url = json_data['source_url']
    recipe.raw = json_data['raw']
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


class UserRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRecipe
        # fields = [
        #     'user',  # FK
        #     'recipe',  # FK
        #     'rating'
        # ]
        fields = "__all__"
    user = UserSerializer()
    recipe = RecipeSerializer()
# TODO create another serializer to just send the name/id to use with a context in app


class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        # fields = [
        #     'user_recipe',  # FK
        #     'meal_type',  # Integer.choices
        #     "meal_date",  # DateField
        # ]
        fields = "__all__"
    user_recipe = UserRecipeSerializer()
