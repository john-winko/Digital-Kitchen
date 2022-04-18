from django.urls import path, include
# TODO explicit imports
from .views import *
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from rest_framework.routers import DefaultRouter

r = DefaultRouter()
r.register(r'user', UserViewSet, basename="user")
r.register(r'keyword', KeywordViewSet, basename="keyword")
r.register(r'recipe', RecipeViewSet, basename="recipe")
r.register(r'user_recipe', UserRecipeViewSet, basename="user_recipe")
r.register(r'meal', MealViewSet, basename="meal")

urlpatterns = [
    # path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('v1/', include(r.urls))
]
