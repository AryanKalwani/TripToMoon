from rest_framework import serializers
from .models import Moon, GroceryStore

class MoonSerializer(serializers.Serializer):
    class Meta:
        model = Moon
        fields = ["name","imageUrl","price","description"]

class GroceryStoreSerializer(serializers.Serializer):
    class Meta:
        models = GroceryStore
        fields = ["name","location","price","distance"]