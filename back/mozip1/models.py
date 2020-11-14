from django.db import models
from django.contrib.auth.models import User
from djongo import models

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

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title

class User(models.Model):
    group_choice = (('g1','학생'),('g2','직장인'),('g3','일반인'))
    group = models.CharField(max_length=3,choices=group_choice,default="g1")
    name = models.CharField(max_length=15)
    education = models.JSONField()
    grader_choice = (("gr1","1학년"),("gr2","2학년"),("gr3","3학년"),("gr4","4학년"))
    grader = models.CharField(max_length=4,choices=grader_choice,default="gr1")
    states_chocie = (("s1","재학"),("s2","휴학"),("s3","졸업"))
    states = models.CharField(max_length=3,choices=states_chocie,default="s1")
    birthday = models.CharField(max_length=12)
    telephone = models.CharField(max_length=15)
    email = models.EmailField()
    address = models.JSONField()
    self_image = models.CharField(max_length=10)
    date = models.DateField(auto_now_add=True)
    user_id = models.PositiveIntegerField(unique=True,primary_key=True)
    objects = models.DjongoManager()

    def __str__(self):
        return self.user_id