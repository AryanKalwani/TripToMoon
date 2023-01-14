from rest_framework import serializers
from .models import Moon, GroceryStore

class MoonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Moon
        fields = ["name","imageUrl","price","description"]

class GroceryStoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroceryStore
        fields = ["name","location","price","distance"]