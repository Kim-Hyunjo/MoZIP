from rest_framework import serializers
from .models import *
# Serializers define the API representation.
#임시
class PostClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = ['cc_id','name','information','category','foundationdate' 
        ,'detail_information','self_image','telephone','email']


#list
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

class ListClubSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Club
        fields = ['cc_id','name','information','category','self_image']

class ClubReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Club_review
        fields = ['review', 'club_id']

class ClubFAQSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Club_FAQ
        fields = ['FAQ', 'club_id']

class ClubIntroduceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club_introduce
        fields = ['number','region','target','time',
        'mainURL','detail','poster','card_image', 'club_id','types','ci_id','detail']

class ClubDetailPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = recruit_QA
        fields = '__all__'
class MemberUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['user_id', 'name', 'self_image']


# sj
class CreateClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Creation_Club
        fields = '__all__'

# sj - recruit
class RecruitFormatSerializer(serializers.ModelSerializer):
    class Meta:
        model = recruit_format
        fields = ['Type','club_id','user_id','rf_id','approval_info','time','run_time','rest_time','Multiple_choice','Short_answer','long_answer']


class UserApplyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_apply_list
        fields = ['user_id','apply_list']

class RecruitApplicantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_id','name','self_image']


class CreationClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Creation_Club
        fields =['name','information','category','foundationdate','detail_information','self_image','contact','created_id','approval']

class ClubMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club_member
        fields = '__all__'

class UserCircleSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_circle
        fields = ['user_id','states','club_in']


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

class InterviewManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = interview_manager
        fields = ['rf_id','manager','run_time','rest_time']

class InterviewGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = interview_group
        fields = ['rf_id','interviewer','manager','etc']

class PassFailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pass_Fail
        fields = ['Type','ci_id','user_id','pf_id','pass_fail','detail','detail_type']
