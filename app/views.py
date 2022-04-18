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


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):  # noqa (used to omit lint warnings in PyCharm)
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['id'] = user.pk
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class KeywordViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Keyword.objects.all()
    serializer_class = KeywordSerializer


class RecipeViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class UserRecipeViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = UserRecipe.objects.all()
    serializer_class = UserRecipeSerializer


class MealViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Meal.objects.all()
    serializer_class = MealSerializer
