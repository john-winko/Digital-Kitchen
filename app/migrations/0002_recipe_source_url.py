# Generated by Django 4.0.3 on 2022-04-23 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='source_url',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]