from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Club, Post
# Serializers define the API representation.
#haha
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['group_choice', 'group', 'name', 'education', 'grader_choice', 'grader', 
        'states_choice', 'states', 'birthday', 'telephone', 'email', 'address', 'self_image',
        'date', 'user_id']

class ClubSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Club
        fields = ['name','category','project','created_at']

class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ['id','title','content']