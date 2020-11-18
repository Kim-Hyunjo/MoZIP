from rest_framework import serializers
from .models import *
# Serializers define the API representation.
#haha
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['group', 'name', 'education','grader', 
        'states', 'birthday', 'telephone', 'email', 'address','self_image','user_id']

class ClubSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Club
        fields = ['cc_id','name','information','category','foundationdate' 
        ,'detail_information','self_image','card_image','telephone','email']

class UserApplyListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
<<<<<<< Updated upstream
        model = Post
        fields = ['id','title','content']

#list
class ListClubSerializer(serializers.HyperlinkedModelSerializer):
    class Meat:
        model = Club
        fields = ['name','information','self_image','category']
=======
        model = user_apply_list
        fields = ['user_id','apply_list']

class CreationClubSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Creation_Club
        fields = ['cc_id','name','information','category','foundationdate' 
        ,'detail_information','self_image','telephone','email','approval','created_id']

class ClubMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club_member
        fields = ['club_id','member']

class UserCircleSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_circle
        fields = ['user_id','states','club_in']

class MypageSerializer(serializers.ModelSerializer): #프로필,지원현황,내동아리,동아리개설요청,지원이력
    user = UserSerializer()
    apply_list = UserApplyListSerializer()
    club_in = UserCircleSerializer()


class RecruitNoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = recruit_notice
        fields = ['notice', 'ci_id']

class RecruitBasicQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = recruit_basic_question
        fields = ["number","basic","optional","club_id","user_id","rbq_id"]

class RecruitQASerializer(serializers.ModelSerializer):
    class Meta:
        model = recruit_QA
        fields = ["QA","ci_id"]

class UserRecordQSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_recordQ
        fields = ["recordQ", "user_id"]
>>>>>>> Stashed changes
