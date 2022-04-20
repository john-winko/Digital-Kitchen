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


def send_the_homepage(request):
    react_app = open('build/index.html').read()
    return HttpResponse(react_app)


class UserViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer


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
