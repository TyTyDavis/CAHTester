from django.db import models

# Create your models here.
class blackCard(models.Model):
    text = models.CharField(max_length=500)
