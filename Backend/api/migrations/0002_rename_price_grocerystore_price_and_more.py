# Generated by Django 4.1.5 on 2023-01-14 18:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='grocerystore',
            old_name='Price',
            new_name='price',
        ),
        migrations.RenameField(
            model_name='moon',
            old_name='Description',
            new_name='description',
        ),
    ]
