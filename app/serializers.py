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
        fields = "__all__"


class RecipeIngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = "__all__"


class RecipeStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = "__all__"


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = "__all__"
    recipe_steps = RecipeStepSerializer(many=True)
    ingredients = RecipeIngredientSerializer(many=True)


class UserRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRecipe
        fields = "__all__"
    user = UserSerializer()
    recipe = RecipeSerializer()
# TODO create another serializer to just send the name/id to use with a context in app


class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = "__all__"
    user_recipe = UserRecipeSerializer()
