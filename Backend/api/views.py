from rest_framework import viewsets
from .models import Moon, GroceryStore
from .serializers import MoonSerializer,GroceryStoreSerializer

class MoonViewSet(viewsets.ModelViewSet):
    queryset = Moon.objects.all()
    serializer_class = MoonSerializer

class GroceryStoreViewSet(viewsets.ModelViewSet):
    queryset = GroceryStore.objects.all()
    serializer_class = GroceryStoreSerializer
