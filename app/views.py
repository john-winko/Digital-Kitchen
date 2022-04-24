from django.http import JsonResponse
from dotenv import load_dotenv
from rest_framework.decorators import action
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet

import app.apis.cookbook
# TODO: explicit imports
import app.apis.tasty
from .serializers import *

load_dotenv()


class UserViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(methods=['GET'], detail=False)
    def whoami(self, request, pk=None):
        return JsonResponse(UserSerializer(request.user).data, status=200)


class KeywordViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Keyword.objects.all()
    serializer_class = KeywordSerializer

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user.pk)

    def create(self, request, *args, **kwargs):
        data = request.data
        data._mutable = True  # only works if no class instances (only primitives)
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
        page = int(request.query_params['page']) if 'page' in request.query_params else 1
        query = request.query_params['query'] if 'query' in request.query_params else None
        pks, count = app.apis.tasty.tasty_browse(page, query)
        recipes = Recipe.objects.filter(pk__in=pks)
        output = {
            "results": RecipeSerializer(recipes, many=True).data,
            "count": count,
            "page": page
        }
        return JsonResponse(output, safe=False, status=200)


class UserRecipeViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = UserRecipe.objects.all()
    serializer_class = UserRecipeSerializer

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user.pk)

    def create(self, request, *args, **kwargs):
        try:
            user_recipe = UserRecipe(user=request.user, recipe=Recipe.objects.get(pk=request.data["recipeID"]))
            user_recipe.save()
            return JsonResponse(UserRecipeSerializer(user_recipe).data, status=201)
        except Exception as e:
            print(e)
            return JsonResponse({"error", "error"}, status=400)


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


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def parse_url(request):
    recipe = app.apis.cookbook.parse_url_api(request.data["url"])
    if recipe:
        return JsonResponse(RecipeSerializer(recipe).data, status=200)
    return JsonResponse({"error": "error parse url"}, status=500)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def test(request):
    pass
