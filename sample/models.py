from django.db import models

# Create your models here.

class ContactDetail(models.Model):
    name = models.CharField(max_length=100) 
    icon = models.CharField(max_length=1)
    data = models.TextField()
    price = models.IntegerField()
    img = models.ImageField(upload_to='images')
    special = models.BooleanField(default=False)