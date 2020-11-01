from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Club
from .serializers import UserSerializer,ClubSerializer
from rest_framework import viewsets

#jwoo
from .models import Post
from .serializers import PostSerializer

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer

class ListPost(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer