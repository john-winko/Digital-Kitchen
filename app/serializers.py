from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Keyword, Recipe, UserRecipe, Meal


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ["password"]


class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        include = "__all__"


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        include = "__all__"


class UserRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRecipe
        include = "__all__"


class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        include = "__all__"
