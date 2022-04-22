import datetime
import json
import os

import requests
from rest_framework.viewsets import ModelViewSet
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# TODO: explicit imports
from .serializers import *
from .models import *
from django.contrib.auth.models import User
from rest_framework.decorators import action
from dotenv import load_dotenv
load_dotenv()

def send_the_homepage(request):
    react_app = open('build/index.html').read()
    return HttpResponse(react_app)


class UserViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(methods=['GET'], detail=False)
    def whoami(self, request, pk=None):
        # print("whoami")
        # print(request.user)
        return JsonResponse(UserSerializer(request.user).data, status=200)


class KeywordViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Keyword.objects.all()
    serializer_class = KeywordSerializer

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user.pk)

    def create(self, request, *args, **kwargs):
        data = request.data
        data._mutable = True
        data['user'] = request.user.pk
        serializer = KeywordSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class RecipeViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    @action(methods=['GET'], detail=False)
    def browse(self, request, pk=None):
        # TODO add api calls to tasty here
        file = open("app/fixtures/recipeList.json").read()
        output = json.loads(file)
        return JsonResponse(output, safe=False, status=200)


class UserRecipeViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = UserRecipe.objects.all()
    serializer_class = UserRecipeSerializer

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user.pk)

    def create(self, request, *args, **kwargs):
        try:
            data = request.data
            recipe = Recipe(name=data["name"], details=data["recipe"])
            recipe.save()
            user_recipe = UserRecipe(user=request.user, recipe=recipe)
            user_recipe.save()
            serializer = UserRecipeSerializer(user_recipe)
            return JsonResponse(serializer.data, status=201)
        except:
            # TODO add cleanup / delete / rollback
            return JsonResponse(serializer.errors, status=400)


class MealViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Meal.objects.all()
    serializer_class = MealSerializer

    def get_queryset(self):
        user_recipes = UserRecipe.objects.filter(user=self.request.user)
        # limit to 50 for now to help with bandwidth on long term users
        meal_filter = Meal.objects.filter(user_recipe__in=user_recipes).order_by("-meal_date")
        return meal_filter

    def create(self, request, *args, **kwargs):
        user_recipe = UserRecipe.objects.get(pk=request.data["user_recipe"])
        meal_date = request.data['meal_date']
        meal_type = request.data['meal_type']
        meal = Meal(user_recipe=user_recipe, meal_date=meal_date, meal_type=meal_type)
        meal.save()
        return JsonResponse(MealSerializer(meal).data, status=200)

    # @action(methods=['GET'], detail=False)
    # def week(self, request, pk=None):
    #     # print("whoami")
    #     # print(request.user)
    #     return JsonResponse(UserSerializer(request.user).data, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def parse_url(request):
    try:
        url = "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi"

        payload = request.data["url"]
        headers = {
            "content-type": "text/plain",
            "X-RapidAPI-Host": "mycookbook-io1.p.rapidapi.com",
            "X-RapidAPI-Key": os.getenv('COOKBOOK_API_KEY')
        }

        response = requests.request("POST", url, data=payload, headers=headers)

        # print(response.text)
        json_text = json.loads(response.text)
        return JsonResponse(json_text, safe=False, status=200)
    except Exception as e:
        print(e)
        return JsonResponse({"error": "error"}, status=555)
