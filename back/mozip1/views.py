from django.shortcuts import render
from django.contrib.auth.models import User
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework import authentication, permissions
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

class UserListView(APIView):
    def get(self, request):
        serializer = UserSerializer(User.objects.all(),many=True)
        return Response(serializer.data)
    
    @ csrf_exempt
    def add_user(self,request):
        group = request.POST.get("group")
        name = request.POST.get("name")
        education = {"school":request.POST.get("school"),"major":request.POST.get("major")}
        grader = request.POST.get("grader")
        states = request.POST.get("states")
        birthday = request.POST.get("birthday")
        telephone = request.POST.get("telephone")
        email = request.POST.get("email")
        address = {"xi":request.POST.get("xi"),"gu":request.POST.get("gu")}
        self_image = request.POST.get("self_image")
        date = request.POST.get("date")

        num = User.objects.count()
        if num == None:
            user_id =  1
        else:
            user_id = num + 1

        user = User(group=group,name=name,education=education,grader=grader,states=states,birthday=birthday,telephone=telephone,email=email,address=address,self_image=self_image,date=date,user_id=user_id)
        user.save()
        return HttpResponse("Inserted")

class ClubListAllView(APIView):
    def get(self, request):
        serializer1 = ClubSerializer(Club.objects.all(), many=True)
        serializer2 = UserSerializer(User.objects.all(), many=True)
        data = serializer1.data + serializer2.data
        return Response(data)
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)  


class ClubListAcademyView(APIView):
    def get(self, request):
        serializer = ClubSerializer(Club.objects.get(category='Academy'), many=True)
        return Response(serializer.data)

#academy,art...

class ClubJustDetailView(APIView): #동아리 그냥 상세
    def get(self, request, id):
        serializer = ClubSerializer(Club.objects.get(cc_id=id), many=True)
        return Response(serializer.data)