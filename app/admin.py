from django.contrib import admin


from .models import *
admin.site.register(Keyword)
admin.site.register(Recipe)
admin.site.register(UserRecipe)
admin.site.register(Meal)
