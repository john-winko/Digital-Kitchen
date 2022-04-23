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
        # fields = ['ingredient', 'recipe(_id)']
        fields = "__all__"


class RecipeStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeStep
        # fields = ['step', 'recipe(_id)']
        fields = "__all__"


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


def create_recipe_tasty(json_data):
    pass


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = "__all__"
    recipe_steps = RecipeStepSerializer(many=True)
    ingredients = RecipeIngredientSerializer(many=True)


def create_recipe_url(json_data):
    recipe = Recipe()
    recipe.source = Recipe.RecipeSource.URLPARSE
    try:
        recipe.name = json_data['name']
        recipe.raw = json_data
        recipe.image_url = json_data['images'][0] if len(json_data['images']) else ""
        recipe.source_url = json_data['url']
        recipe.save()

        for instruction in json_data['instructions']:
            for step in instruction['steps']:
                recipe_step = RecipeStep(step=step, recipe=recipe)
                recipe_step.save()

        for ingredient in json_data['ingredients']:
            recipe_ingredient = RecipeIngredient(ingredient=ingredient, recipe=recipe)
            recipe_ingredient.save()

        recipe.save()
        return recipe
    except Exception as e:
        print(e)
        recipe.delete()
        return None


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
