from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


class Keyword(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name="preferences")
    keyword = models.CharField(max_length=64)
    # -10: deathly allergic, -5: No thanks, 0: Doesn't matter, +5: Yum, +10: Every meal if possible
    acceptability = models.IntegerField(default=0, validators=[MaxValueValidator(10), MinValueValidator(-10)])


class Recipe(models.Model):
    name = models.CharField(max_length=255)
    details = models.JSONField(null=True, blank=True)


class UserRecipe(models.Model):
    # TODO modify to allow difference sources of recipes
    # class RecipeSource(models.IntegerChoices):
    #     CUSTOM = 1
    #     TASTY = 2
    #     URLPARSE = 3
    # source = models.IntegerField(choices=RecipeSource.choices)

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="users")
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name="recipes")
    rating = models.IntegerField(default=0, validators=[MaxValueValidator(5), MinValueValidator(0)])


class Meal(models.Model):
    class MealType(models.IntegerChoices):
        BREAKFAST = 1
        LUNCH = 2
        DINNER = 3
        SNACK = 4
        BRUNCH = 5
    user_recipe = models.ForeignKey(UserRecipe, on_delete=models.CASCADE, related_name="meals")
    # Breakfast, lunch, dinner, snack etc
    meal_type = models.IntegerField(choices=MealType.choices)
    meal_date = models.DateField(null=True, blank=True)
    #TODO add recipe FK
