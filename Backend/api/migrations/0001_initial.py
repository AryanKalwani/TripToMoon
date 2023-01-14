# Generated by Django 4.1.5 on 2023-01-14 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GroceryStore',
            fields=[
                ('name', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('location', models.CharField(max_length=255)),
                ('Price', models.CharField(max_length=255)),
                ('distance', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Moon',
            fields=[
                ('name', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('imageUrl', models.URLField(max_length=255)),
                ('price', models.CharField(max_length=255)),
                ('Description', models.CharField(max_length=255)),
            ],
        ),
    ]