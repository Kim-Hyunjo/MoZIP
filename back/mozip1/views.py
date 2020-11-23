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

def add_cors_header(response):
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response["Access-Control-Allow-Headers"] = "*"
    return response
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
        response = Response(serializer.data)
        response = add_cors_header(response)
        return response
        
class ListAcademyView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c1"), many = True)
        response = Response(serializer.data)
        response = add_cors_header(response)
        return response

class ListArtView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c2"), many = True) 
        response = Response(serializer.data)
        response = add_cors_header(response)
        return response
            
class ListNetworkingView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c3"), many = True) 
        response = Response(serializer.data)
        response = add_cors_header(response)
        return response

class ListSportsView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c4"), many = True) 
        response = Response(serializer.data)
        response = add_cors_header(response)
        return response

class ListTravelView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c5"), many = True) 
        response = Response(serializer.data)
        response = add_cors_header(response)
        return response

class ListReligionView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c6"), many = True) 
        response = Response(serializer.data)
        response = add_cors_header(response)
        return response

class ListVolunteerView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c7"), many = True) 
        response = Response(serializer.data)
        response = add_cors_header(response)
        return response

class ListEtcView(APIView):
    def get(self, request):
        model = Club
        fields = ['cc_id','name','information','self_image','category']
        serializer = ListClubSerializer(Club.objects.filter(category="c8"), many = True) 
        response = Response(serializer.data)
        response = add_cors_header(response)
        return response

class ClubJustDetailView(APIView): #동아리 그냥 상세
    def get(self, request, id):
        serializer = ClubSerializer(Club.objects.get(cc_id=id), many=True)
        response = Response(serializer.data)
        response = add_cors_header(response)
        return response

#list/category/{ccID}
class ClubView(APIView):
    def get(self, request, cc_id):
        serializer1 = ClubSerializer(Club.objects.filter(cc_id=-cc_id), many=True)
        #Club_review
        serializer2 = ClubReviewSerializer(Club_review.objects.filter(club_id=-cc_id), many=True)
        #Club_FAQ
        serializer3 = ClubFAQSerializer(Club_FAQ.objects.filter(club_id=-cc_id), many=True)
        datas1 = serializer1.data[0]
        datas1["foundationdate"] = eval(datas1["foundationdate"])
        datas1["card_image"] = eval(datas1["card_image"])
        datas2 = serializer2.data[0]
        datas2["review"] = eval(datas2["review"])
        datas1.update(datas2)
        datas3 = serializer3.data[0]
        datas3["FAQ"] = eval(datas3["FAQ"])
        datas1.update(datas3)
        return Response(datas1)
        #return Response(serializer2.data)
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
        serializer1 = ClubIntroduceSerializer(Club_introduce.objects.filter(ci_id=-cc_id), many=True)
        serializer2 = RecruitQASerializer(recruit_QA.objects.filter(ci_id=-cc_id), many=True)
        s1 = serializer1.data[0]
        s2 = serializer2.data[0]
        s1["detail"] = eval(s1["detail"])
        s1["card_image"] = eval(s1["card_image"])
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
        datas["document"] = eval(datas["document"])

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
        s1 = serializer.data[0]
        s1["member"] = eval(s1["member"])
        members = s1["member"]
        owner = members["owner"]
        owner_idx = int(owner[0])
        user_owner = MemberUserSerializer(User.objects.filter(user_id=owner_idx), many=True)
        s1["member"]["owner"] = user_owner.data[0]
        guest = members["guest"]
        guest_count = len(guest)
        tmp_list = list()
        for i in range(0, guest_count):
            guest_idx = int(guest[i])
            user_guest = MemberUserSerializer(User.objects.filter(user_id=guest_idx), many=True)
            tmp_list.append(user_guest.data[0])
        s1["member"]["guest"] = tmp_list
        return Response(s1)

class ListMembersEditView(APIView):
    def get(self, request, cc_id):
        serializer = ClubMemberSerializer(Club_member.objects.filter(club_id=-cc_id), many=True)
        return Response(serializer.data)
    #post 아직


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
        res = serializer.data
        response = Response(res)
        response = add_cors_header(response)
        return response
    
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

class RecruitApplicantsView(APIView): 
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
        response = Response(users)
        response = add_cors_header(response)
        return response

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

#circle/open
class CircleOpenView(APIView):
    def get(self,request,user_id):
        serializer = CreationClubSerializer(Creation_Club.objects.filter(created_id=user_id), many=True)
        return Response(serializer.data)
    
    def post(self,request,user_id):
        serializer = CreationClubSerializer(Creation_Club.objects.filter(created_id=user_id), data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#mypage
import json
from collections import OrderedDict
class MypageView(APIView): #프로필,지원현황(list),내동아리(list),동아리개설요청(list),지원이력(list)
    def get(self,request,user_id,format=None):
        serializer1 = UserProfileSerializer(User.objects.get(user_id=user_id))
        data1 = serializer1.data
        edu = eval(data1["education"])
        dict_edu = dict(OrderedDict(edu))
        data1.pop('education')
        data1['education'] = dict_edu
        serializer2 = UserApplyListSerializer(user_apply_list.objects.get(user_id=user_id))
        data2 = serializer2.data
        data2_ = serializer2.data["apply_list"]
        data2["apply_list"] = eval(data2_)
        data2.pop('user_id')
        serializer3 = ClubMemberSerializer(Club_member.objects.filter(),many=True)
        serializer4 = ClubSerializer
        clubs = []
        data3_mypage = []
        data5_mypage = []
        data3 = {}
        for i in range(len(serializer3.data)):
            print(dict(OrderedDict(eval(serializer3.data[i]["member"]))))
            for o in dict(OrderedDict(eval(serializer3.data[i]["member"])))["owner"]:
                if user_id == o:
                    c_id = serializer3.data[i]["club_id"]    
                    datas = serializer4(Club.objects.get(cc_id=c_id))           
                    data3_mypage.append([datas.data["name"],datas.data["information"],datas.data["self_image"],'owner'])
            for j in dict(OrderedDict(eval(serializer3.data[i]["member"])))["guest"]:
                if user_id == j: 
                    c_id = serializer3.data[i]["club_id"]    
                    datas = serializer4(Club.objects.get(cc_id=c_id))           
                    data3_mypage.append([datas.data["name"],datas.data["information"],datas.data["self_image"],'guest'])
        data3["my_club"] = data3_mypage
        serializer5 = CreationClubSerializer(Creation_Club.objects.filter(created_id=user_id),many=True)
        approval_choice = {"a1":"미확인","a2":"승인","a3":"승인불가"}
        for i in serializer5.data:
            a = i["approval"] #approval_choice[a]
            data5_mypage.append([i["name"],i["information"],approval_choice[a]])
        data5 = {}
        data5["clubs_on_approval_process"] = data5_mypage
        data = [data1,data2,data3,data5]
        response = Response(data)
        response = add_cors_header(response)
        return response


class MypageEditView(APIView):
    def get(self, request, user_id):
        serializer = UserProfileSerializer(User.objects.get(user_id=user_id))
        datas = serializer.data
        edu = eval(datas["education"])
        dict_edu = dict(OrderedDict(edu))       
        datas.pop('education')
        datas['education'] = dict_edu
        response = Response(datas)
        response = add_cors_header(response)
        return response

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
        serializer = UserRecordQSerializer(user_recordQ.objects.get(user_id=user_id))
        d = serializer.data    
        rq = eval(d["recordQ"])
        response = Response(rq)
        response = add_cors_header(response)
        return response

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

class MypageRecruitNoticeView(APIView): #내가 지원한 동아리중에서 클릭하여 내가 어떤 상태인지에 따라 notice반환: 서류합격,면접합격
    def get(self, request, user_id, ci_id):
        serializer = RecruitNoticeSerializer(recruit_notice.objects.get(ci_id=-ci_id))
        response = Response(serializer.data)
        response = add_cors_header(response)
        return response

class MypageStatusView(APIView): #user_id로 user_circle모델 쿼리해서 club리스트 가져오기
    def get(self, request, user_id):
        serializer = UserCircleSerializer(user_circle.objects.filter(user_id=user_id),many=True)
        res = []
        e = {}
        for i in range(len(serializer.data)):
            d = serializer.data[i]
            c = serializer.data[i]['club_in']
            d.pop("club_in")
            e["club_in"] = eval(c)
            res.append([d,e])
        response = Response(res)
        response = add_cors_header(response)
        return response


class RecruitProcessFormView(APIView):
    def get(self, request):
        model = recruit_format.objects.all()
        serializer = RecruitFormatSerializer(model, many=True)
        return Response(serializer.data)
    @csrf_exempt
    def post(self,request):
        serializer = RecruitFormatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class InterviewManagerView(APIView):
    def get(self, reuest):
        model = interview_manager.objects.all()
        serializer = InterviewManagerSerializer(model,many=True)
        return Response(serializer.data)
    @csrf_exempt
    def post(self,request):
        serializer = InterviewManagerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self,request):
        pass

class InterviewGroupView(APIView):
    def get(self,request):
        model = interview_group.objects.all()
        serializer = InterviewGroupSerializer(model,many=True)
        return Response(serializer.data)
    @csrf_exempt
    def post(self,request):
        serializer = InterviewGroupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self,request):
        pass
