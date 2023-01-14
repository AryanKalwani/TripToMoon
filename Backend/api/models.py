from django.db import models

# Create your models here.
class Moon(models.Model):
    type = 'Moon'
    name = models.CharField(max_length=255, primary_key=True)
    imageUrl = models.URLField(max_length=255)
    price = models.CharField(max_length=255)
    description = models.CharField(max_length=255)

class GroceryStore(models.Model):
    type = 'GroceryStore'
    name = models.CharField(max_length=255, primary_key=True)
    location = models.CharField(max_length=255)
    price = models.CharField(max_length=255)
    distance = models.CharField(max_length=255)


