from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework import authentication, permissions
from rest_framework import generics
from django.shortcuts import get_object_or_404
from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.mixins import ListModelMixin
# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer

class UserListView(APIView):
    def get(self, request):
        serializer = UserSerializer(User.objects.all(),many=True)
        return Response(serializer.data)

'''    
@post
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
'''
#list

class ListAllView(APIView):
    def get(self, request):
        model = Club
        fields = ['name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.all(), many = True)
        return Response(serializer.data)

class ListAcademyView(APIView):
    def get(self, request):
        model = Club
        fields = ['name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="학술"), many = True)
        return Response(serializer.data)

class ListArtView(APIView):
    def get(self, request):
        model = Club
        fields = ['name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="예술"), many = True) 
        return Response(serializer.data)
            
class ListNetworkingView(APIView):
    def get(self, request):
        model = Club
        fields = ['name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="친목"), many = True) 
        return Response(serializer.data)

class ListSportsView(APIView):
    def get(self, request):
        model = Club
        fields = ['name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="스포츠"), many = True) 
        return Response(serializer.data)

class ListTravelView(APIView):
    def get(self, request):
        model = Club
        fields = ['name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="여행"), many = True) 
        return Response(serializer.data)

class ListReligionView(APIView):
    def get(self, request):
        model = Club
        fields = ['name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="종교"), many = True) 
        return Response(serializer.data)

class ListVolunteerView(APIView):
    def get(self, request):
        model = Club
        fields = ['name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="봉사"), many = True) 
        return Response(serializer.data)

class ListEtcView(APIView):
    def get(self, request):
        model = Club
        fields = ['name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="기타"), many = True) 
        return Response(serializer.data)

class ClubJustDetailView(APIView): #동아리 그냥 상세
    def get(self, request, id):
        serializer = ClubSerializer(Club.objects.get(cc_id=id), many=True)
        return Response(serializer.data)

#mypage

class MypageView(APIView): #프로필,지원현황(list),내동아리(list),동아리개설요청(list),지원이력(list)
    pass
'''
    serializer = MypageSerializer
    data = [serializer.get_fields(User.user_id)]


            serializer1 = UserSerializer(User.objects.filter(user_id=user_id),many=True)
            #serializer2 = UserApplyListSerializer(user_apply_list.objects.raw("SELECT apply_list FROM user_apply_list WHERE user_id=user_id"),many=True)
            #serializer3 = ClubMemberSerializer(Club_member.objects.raw("SELECT name,information,self_image FROM Club WHERE (SELECT club_id FROM Club_member WHERE user_id IN member)=cc_id"),many=True)
            data = [serializer1.data,] #serializer2.data, serializer3.data, ]
            return Response(data)
'''

class MypageEditView(APIView):
    def get(self, request, user_id):
        serializer = UserProfileSerializer(User.objects.get(user_id=user_id))
        return Response(serializer.data)

    def put(self, request, user_id):
        serializer = UserProfileSerializer(User.objects.get(user_id=user_id),data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)  

class MypageIntroductionView(APIView):
    def get(self, request, user_id):
        def get_object(self, user_id):
            try:
                return user_recordQ.objects.get(user_id=user_id)
            except user_recordQ.DoesNotExist:
                return None
        serializer = UserRecordQSerializer(user_recordQ.objects.get(user_id=user_id))
        return Response(serializer.data)

    def post(self, request, user_id):
        serializer = UserRecordQSerializer(user_recordQ.objects.get(user_id=user_id),data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)  

    def put(self, request, user_id):
        serializer = UserRecordQSerializer(user_recordQ.objects.get(user_id=user_id),data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)  

class MypageRecruitNoticeView(APIView):
    def get(self, request, user_id, ci_id):
        serializer = RecruitNoticeSerializer(recruit_notice.objects.get(ci_id=-ci_id))
        return Response(serializer.data)

class MypageStatusView(APIView): #user_id로 user_circle모델 쿼리해서 club리스트 가져오기
    def get(self, request, user_id):
        serializer = UserCircleSerializer(user_circle.objects.get(user_id=user_id))
        return Response(serializer.data)
