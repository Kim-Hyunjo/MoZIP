from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework import authentication, permissions
from rest_framework import generics
from django.shortcuts import get_object_or_404
from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.mixins import ListModelMixin
from django.http import HttpResponseRedirect
from django.urls import reverse
from collections import OrderedDict
from ast import literal_eval
import json
from django.forms.models import model_to_dict
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

#임시
class PostClubView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','category','foundationdate' 
        ,'detail_information','self_image','telephone','email']
        serializer = PostClubSerializer(Club.objects.all(), many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ClubSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class PostClubReview(APIView):
    def get(self, reuqest):
        model = Club_review
        serializer = ClubReviewSerializer(Club_review.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = ClubReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class PostClubFaq(APIView):
    def get(self, request):
        model = Club_FAQ
        serializer = ClubFAQSerializer(Club_FAQ.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = ClubFAQSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class PostClubIntroduce(APIView):
    def get(self, request):
        model = Club_introduce
        serializer = ClubIntroduceAllSerializer(Club_introduce.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ClubIntroduceAllSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # def delete(self, request, cc_id, format=None):
    #     clubintro = Club_introduce.objects.get(club_id=-cc_id)
    #     clubintro.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)
class PostRecruitQA(APIView):
    def get(self, request):
        model = recruit_QA
        serializer = RecruitQASerializer(recruit_QA.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = RecruitQASerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class PostUser(APIView):
    def get(self, request):
        model = User
        serializer = UserSerializer(User.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class PostRecruitFormat(APIView):
    def get(self, request):
        model = recruit_format
        serializer = RecruitFormatSerializer(recruit_format.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = RecruitFormatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class PostUserRecordQ(APIView):
    def get(self, request):
        model = user_recordQ
        serializer = UserRecordQSerializer(user_recordQ.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = UserRecordQSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class PostClubMember(APIView):
    def get(self, reuqest):
        model = Club_member
        serializer = ClubMemberSerializer(Club_member.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ClubMemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class PostRecruitNotice(APIView):
    def get(self, request):
        model = recruit_notice
        serializer = RecruitNoticeSerializer(recruit_notice.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = RecruitNoticeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#list
class ListAllView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.all(), many = True)
        return Response(serializer.data)
        
class ListAcademyView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c1"), many = True)
        return Response(serializer.data)

class ListArtView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c2"), many = True) 
        return Response(serializer.data)
            
class ListNetworkingView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c3"), many = True) 
        return Response(serializer.data)

class ListSportsView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c4"), many = True) 
        return Response(serializer.data)

class ListTravelView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c5"), many = True) 
        return Response(serializer.data)

class ListReligionView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c6"), many = True) 
        return Response(serializer.data)

class ListVolunteerView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c7"), many = True) 
        return Response(serializer.data)

class ListEtcView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c8"), many = True) 
        return Response(serializer.data)

class ClubJustDetailView(APIView): #동아리 그냥 상세
    def get(self, request, id):
        serializer = ClubSerializer(Club.objects.get(cc_id=id), many=True)
        return Response(serializer.data)

#list/category/{ccID}
class ClubView(APIView):
    def get(self, request, cc_id):
        serializer1 = ClubSerializer(Club.objects.filter(cc_id=-cc_id), many=True)
        #Club_review
        serializer2 = ClubReviewSerializer(Club_review.objects.filter(club_id=-cc_id), many=True)
        #Club_FAQ
        serializer3 = ClubFAQSerializer(Club_FAQ.objects.filter(club_id=-cc_id), many=True)
        s1 = serializer1.data[0]
        s2 = serializer2.data[0]
        s1["foundationdate"] = eval(s1["foundationdate"])
        s2["review"] = eval(s2["review"])
        s3 = serializer3.data[0]
        s1.update(s2)
        s3["FAQ"] = eval(s3["FAQ"])
        s1.update(s3)
        #return Response(datas1)
        return Response(s1)
    #후기 작성
    def post(self, request, cc_id):
        serializer = ClubReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #추가는 일단 보류..

        # def put(self, request, cc_id, user_id):
        #회장이면


class ListDetailView(APIView):
    def get(self, reuqest, cc_id):
        serializer1 = ClubIntroduceSerializer(Club_introduce.objects.filter(club_id=-cc_id), many=True)
        serializer2 = RecruitQASerializer(recruit_QA.objects.filter(ci_id=-cc_id), many=True)
        s1 = serializer1.data[0]
        s1["card_image"] = eval(s1["card_image"])
        s1["detail"] = eval(s1["detail"])
        s2 = serializer2.data
        s2["QA"] = eval(s2["QA"])
        s1.update(s2)
        return Response(s1)
    def post(self, request, cc_id):
        #어떻게 구분하지ㅜㅜ
        #질문 달기-모두
        serializer = RecruitQASerializer(recruit_QA.objects.filter(ci_id=-cc_id), data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, staus=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        #답변 달기-회장
        # s = Club_FAQ.objects.get(club_id=cc_id)
        # serializer = ClubDetailPostSerializer(s.get(id=post_id), data=request.data)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ListApplyView(APIView):
    def get(self, reuqest, cc_id):
        serializer = RecruitNoticeSerializer(recruit_notice.objects.filter(ci_id=-cc_id), many=True)
        datas = serializer.data[0]
        notices = eval(datas["notice"])
        return Response(notices)

class ListApply2View(APIView):
    def get(self, request, cc_id, user_id):
        serializer1 = RecruitFormatSerializer(recruit_format.objects.filter(club_id=-cc_id), many=True)
        serializer2 = UserRecordQSerializer(user_recordQ.objects.filter(user_id=user_id), many=True)
        datas = serializer1.data[0]
        l_eval = eval(datas["document"])
        d = dict(OrderedDict(l_eval))

        return Response(datas)
        #return Response(datas["document"])
        #return Response(serializer1.data + serializer2.data)
    def post(self, request, cc_id, user_id):
        serializer = RecruitFormatSerializer(recruit_format.objects.filter(club_id=cc_id), data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#둘다 보내줄게 없는데 혹시 몰라서 아무거나..
class ListApplySuccessView(APIView):
    def get(self, request, cc_id):
        serializer = RecruitFormatSerializer(recruit_format.objects.filter(club_id=-cc_id), many=True)
        return Response(serializer.data)
class ListApplyFailView(APIView):
    def get(self, request, cc_id):
        serializer = RecruitFormatSerializer(recruit_format.objects.filter(club_id=-cc_id), many=True)
        return Response(serializer.data)

class ListJoinUsView(APIView):
    #ClubView에서 redirect됨
    def get(self, request, cc_id, user_id):
        #Club
        serializer1 = ClubSerializer(Club.objects.get(cc_id=cc_id), many=True)
        #Club_review
        serializer2 = ClubReviewSerializer(Club_review.objects.filter(id=cc_id), many=True)
        #Club_FAQ
        serializer3 = ClubFAQSerializer(Club_FAQ.objects.filter(id=cc_id), many=True)
        return Response(serializer1.data + serializer2.data + serializer3.data)

class ListMembersView(APIView):
    #회장인지 확인ㅜ
    def get(self, request, cc_id):
        serializer = ClubMemberSerializer(Club_member.objects.filter(club_id=-cc_id), many=True)
        return Response(serializer.data)

class ListMembersEditView(APIView):
    def get(self, request, cc_id):
        serializer = ClubMemberSerializer(Club_member.objects.filter(club_id=-cc_id), many=True)
        return Response(serializer.data)
    #post 아직




# circle - sj

class CreateClubApproval(APIView):
    def get(self,request):
        club = Creation_Club.objects.all()
        serializer = CreateClubSerializer(club,many=True)
        return Response(serializer.data)
    
    @csrf_exempt
    def post(self,request):

        serializer = CreateClubSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# recruit
class ClubIntroudView(APIView): 
    def get(self,request):
        model = Club_introduce
        fields = ["number","region","target","time","mainURL","detail","poster","card_iamge","club_id","types","ci_id"]
        Club_in = Club_introduce.objects.get(club_id=-1)
        serializer = RecruitClubIntroSerializer(Club_in)
        return Response(serializer.data)
class RecruitNoticeview(APIView):
    
    def get(self,request):
        rn = recruit_notice.objects.all()
        serializer = RecruitNoticeSerializer(rn,many=True)
        return Response(serializer.data)
    
    '''
    def get(self, request, format=None):
        snippets = Snippet.objects.all()
        serializer = SnippetSerializer(snippets, many=True)
        return Response(serializer.data)
    '''


    @csrf_exempt
    def post(self,request):
        serializer = RecruitNoticeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



#mypage

class MypageView(APIView): #프로필,지원현황(list),내동아리(list),동아리개설요청(list),지원이력(list)
    def get(self,request,user_id,format=None):
        serializer1 = UserSerializer(User.objects.get(user_id=user_id))
        #serializer2 = UserApplyListSerializer(user_apply_list.objects.filter(user_id=user_id))
        #serializer3 = ClubMemberSerializer(Club_member.objects.filter(member__contains={-1})[0])
        data = [serializer1.data]#,serializer2.data]#,serializer3.data]
        return Response(data)


class MypageEditView(APIView):
    def get(self, request, user_id):
        serializer = UserProfileSerializer(User.objects.get(user_id=user_id))
        datas = serializer.data
        edu = eval(datas["education"])
        dict_edu = dict(OrderedDict(edu))
        datas.update(dict_edu)
        return Response(datas)

    def post(self, request, user_id):
        serializer = UserProfileSerializer(User.objects.get(user_id=user_id),data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)  

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
                return user_recordQ.objects.filter(user_id=user_id)[0]
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
        response = Response(serializer.data)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        response["Access-Control-Allow-Headers"] = "*"
        return response

#recruit
'''
datas = serializer1.data[0]
l_eval = eval(datas["document"])
d = dict(OrderedDict(l_eval))
'''
class RecruitApplicantsView(APIView): #지원자 수, 각각의 이름,프로필사진Like.objects.filter(user=request.user).values('status', flat=True)
    #user_apply_list의 apply_list 의 value중에 인자로 받은 club_id가 있다면 user_id를 리스트에 저장한다.
    def get(self,request,club_id):
        club_id = -club_id
        serializer =  UserApplyListSerializer(user_apply_list.objects.all(),many=True)
        users = []
        for i in range(len(serializer.data)):
            d = serializer.data[i]
            l_eval = eval(d["apply_list"])
            if club_id in l_eval:
                ui = d["user_id"]
                serializer1 = RecruitApplicantsSerializer(User.objects.get(user_id=ui))
                u = serializer1.data
                users.append(u)
        return Response(users)


class RecruitResumeView(APIView): #서류전형 지원자목록
    def get(self,request):
        pass

    def post(self,request):
        pass

class RecruitResumeDetailView(APIView):
    def get(self,request,user_id):
        return
        

class RecruitScheduleManagementView(APIView):
    def get(self):
        return

class RecruitScheduleManagementStaffView(APIView):
    def get(self):
        return

class RecruitScheduleManagementDetailView(APIView):
    def get(self):
        return
class MypageView(APIView): #프로필,지원현황(list),내동아리(list),동아리개설요청(list),지원이력(list)
    def get(self,request,user_id,format=None):
        serializer1 = UserSerializer(User.objects.get(user_id=user_id))
        serializer2 = UserApplyListSerializer(user_apply_list.objects.get(user_id=1))

        cm_data = Club_member.objects.raw("db.mozip1_club_member.find({club_id:-1})")
        serializer3 = ClubMemberSerializer(cm_data[1])
        data = [serializer1.data,serializer2.data,serializer3.data]
        return Response(data)

class CircleOpenView(APIView):
    def get(self,request,user_id):
        serializer = CircleOpenSerializer(Creation_Club.objects.filter(created_id=user_id).values())
        return Response(serializer.data)
    
    def post(self,request,user_id):
        serializer = CircleOpenSerializer(Creation_Club.objects.filter(created_id=user_id), data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RecruitProcessFormView(APIView):
    def get(self, request):
        model = recruit_format
        serializer = RecruitFormatSerializer(recruit_format.objects.all(), many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = RecruitFormatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
import json
def lambda_handler(event,context):
    return{
        'statusCode':200,
        'headers':{
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin':'http://localhost:3000/',
            'Access-Control-Allow-Methods': 'OPTIONS.POST.GET'
        },
        'body': json.dumps('Hello from Lambda!')
    }
