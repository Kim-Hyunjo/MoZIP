from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Club(models.Model):
  
    CATEGORY = (
        ('IT', 'IT'),
        ('MU','MUSIC'),
        ('DA','DANCE'),
     )
    name = models.CharField(max_length=150)
    category = models.CharField(max_length=2, choices=CATEGORY)
    project = models.CharField(max_length=150,null =True,blank=True)
    created_at = models.DateField(auto_now_add=True, null =True, blank=True)
