from djongo import models
import pymongo

# Create your models here.
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
    address = models.TextField()
    self_image = models.CharField(max_length=10)
    date = models.DateField(auto_now_add=True)
    user_id = models.PositiveIntegerField(unique=True,primary_key=True)
    objects = models.DjongoManager()

    def __str__(self):
        return str(self.user_id)

class Creation_Club(models.Model):
    name = models.CharField(max_length=15,default=None)
    information = models.CharField(max_length=30,default=None)
    category_choice = (("c1","학술"),("c2","예술"),("c3","친목"),("c4","스포츠"),("c5","여행"),("c6","종교"),("c7","봉사"),("c8","기타"))
    category = models.CharField(max_length=8,choices=category_choice,default="c1")
    foundationdate = models.JSONField()
    detail_information = models.TextField(max_length=300,default=None)
    self_image = models.CharField(max_length=10,default=None)
    telephone = models.CharField(max_length=15,default=None)
    email = models.EmailField(default=None)
    approval_choice = (("a1","미확인"),("a2","승인"),("a3","승인불가"))
    approval = models.CharField(max_length=8,choices=approval_choice,default="a1")
    created_id = models.PositiveIntegerField(default=0)
    objects = models.DjongoManager()

class Club(models.Model):
    cc_id = models.IntegerField(unique=True,primary_key=True, default=0)
    name = models.CharField(max_length=15)
    information = models.CharField(max_length=30, null=True)
    category_choice = (("c1","학술"),("c2","예술"),("c3","친목"),("c4","스포츠"),("c5","여행"),("c6","종교"),("c7","봉사"),("c8","기타"))
    category = models.CharField(max_length=8,choices=category_choice,default="c1")
    foundationdate = models.JSONField(default=None)
    detail_information = models.TextField(max_length=300, default=None)
    self_image = models.CharField(max_length=10, default=None)
    card_image = models.JSONField(default=[])
    telephone = models.CharField(max_length=15, default=None)
    email = models.EmailField(default=None)
    #status
    objects = models.DjongoManager()

    def __str__(self):
        return str(self.cc_id)

class Club_member(models.Model):
    member = models.JSONField()
    club_id = models.IntegerField()
    objects = models.DjongoManager()

class Club_review(models.Model):
    review = models.JSONField()
    club_id = models.IntegerField()
    objects = models.DjongoManager()

class Club_FAQ(models.Model):
    FAQ = models.JSONField()
    club_id = models.IntegerField()
    objects = models.DjongoManager()

class Club_introduce(models.Model):
    number = models.CharField(max_length=5,default=None)
    region = models.CharField(max_length=25,default=None)
    target_choice = (("t1","대학생"),("t2","직장인"),("t3","일반인"))
    target = models.CharField(max_length=10,choices=target_choice,default="t1")
    time = models.CharField(max_length=10,default=None)
    mainURL = models.URLField(max_length=200,default=None)
    detail = models.JSONField(default=[])
    poster = models.CharField(max_length=5,default=None)
    card_image = models.JSONField(default=[])
    club_id = models.IntegerField(default=0)
    type_choice = (("1","면접전형"),("2","서류전형"),("3","면접+서류전형"))
    types = models.CharField(max_length=20,choices=type_choice,default="1")
    ci_id = models.CharField(unique=True,primary_key=True,max_length=15,default=0)
    objects = models.DjongoManager()

class recruit_QA(models.Model):
    QA = models.JSONField()
    ci_id = models.CharField(unique=True,primary_key=True,max_length=15)
    objects = models.DjongoManager()


class recruit_notice(models.Model):
    notice = models.JSONField()
    ci_id = models.CharField(unique=True,primary_key=True,max_length=15)
    objects = models.DjongoManager()


# 만들떄 RDB의 manytomany이용할 예정, 현재는 dumdy확인을 위해 기입
class recruit_format(models.Model):
    type_choices = (("1","면접전형"),("2","서류전형"),("3","면접+서류전형"))
    Type = models.CharField(max_length=15,choices=type_choices,default="1")
    club_id = models.IntegerField(default=0)
    user_id = models.PositiveIntegerField(default=0)
    rf_id = models.CharField(unique=True,primary_key=True,max_length=15)
    approval_info = models.JSONField(default=[])
    time = models.JSONField(default=[])
    run_time = models.IntegerField(default=0)
    rest_time = models.IntegerField(default=0)
    Multiple_choice = models.JSONField(default=[])
    Short_answer = models.JSONField(default=[])
    long_answer = models.JSONField(default=[])
    objects = models.DjongoManager()

class recruit_basic_question(models.Model):
    number = models.PositiveIntegerField()
    basic = models.JSONField()
    optional = models.JSONField()
    club_id = models.IntegerField()
    user_id = models.PositiveIntegerField()
    rbq_id = models.CharField(unique=True,primary_key=True,max_length=15)
    objects = models.DjongoManager()
'''
class Pass_fail에서 
detail_type은 2가지에 숫자를 가질 수 있음
0 => 면접 전형이다
1 => 서류 전형이다
if type = 면접 + 서류전형 and detail_type = 1 :
    현재 면접_서류전형인데 서류평가를 하는 중
if type= 면접 + 서류전형 and detail_type = 0:
    현재 면접_서류전형인데 서류평가를 다했고 1차 통과한 사람들 중 면접 평가이다
if type = 면접 :
    detail_type은 무조건 0이어야 한다
if type = 서류:
    detail_type은 무조건 1이어야 한다.

'''
class Pass_Fail(models.Model):
    type_choices = (("1","면접전형"),("2","서류전형"),("3","면접+서류전형"))
    Type = models.CharField(max_length=15,choices=type_choices,default="1")
    ci_id = models.CharField(max_length=15)
    user_id = models.PositiveIntegerField()
    pass_fail_choices = (("1","합격"),("2","불합격"),("3","보류"),("4","미결정"))
    pass_fail = models.CharField(max_length=10,choices=pass_fail_choices,default="1")
    detail = models.JSONField()
    pf_id = models.CharField(unique=True,primary_key=True,max_length=10)
    detail_type = models.PositiveIntegerField(default=0)
    objects = models.DjongoManager()

class user_apply_list(models.Model):
    # club이랑 onetomany 해야함
    user_id = models.PositiveIntegerField()
    apply_list = models.JSONField()
    objects = models.DjongoManager()


class user_circle(models.Model):
    # club이랑 onetomany 해야함
    # embedded 나중에......
    user_id = models.PositiveIntegerField()
    states_choice = (("1","모집안함"),("2","모집중"),("3","서류 진행"),("4","면접 진행"),("5","회비 입금 대기 중"))
    states = models.CharField(max_length=15,choices=states_choice,default="1")
    club_in = models.JSONField()
    objects = models.DjongoManager()

class user_recordQ(models.Model):
    user_id = models.PositiveIntegerField()
    recordQ = models.JSONField()
    objects = models.DjongoManager()

class interview_group(models.Model):
    # 이미 조가 짜여져서 front 하단에 보이는 url 데이터 카톡에서 확인
    rf_id = models.CharField(max_length=15,default=None)
    interviewer = models.JSONField()
    manager = models.JSONField()
    etc = models.JSONField()
    objects = models.DjongoManager()


class interview_manager(models.Model):
    # 운영진 들의 면접가능시간 저장하는 모델
    run_time = models.PositiveIntegerField(default=0)
    rest_time = models.PositiveIntegerField(default=0)
    rf_id = models.CharField(max_length=15,default=None)
    manager = models.JSONField()
    objects = models.DjongoManager()
 
'''
면접 조 데이터 알고리즘에 줄 떄 데이터 형태
"rf_id":"1rf", (운영진도 가능한 시간 다 적음)
"manager":[{"user_id":{"$numberLong":"1"},"name":"최우영","time":["2020.07.17수14시~17시","2020.07.17수18시~20시"]},
{"user_id":{"$numberLong":"2"},
"name":"박웅기",  
"time":["2020.07.17수14시~17시","2020.07.17수18시~20시"]}],(가능한 시간 다 적음)
"interviewer":[{"user_id":"3","name":"권수지","time":"2020.07.17수14시~17~17시"},{"user_id":"4","name":"김현조","time":"2020.07.17수18시~20시"},{"user_id":"5","name":"김정우","time":"2020.07.17수18시~20시"}],"etc":[{"user_id":"6","name":"이하연"}]}
'''
'''
면접 알고리즘에서 다 돌리면 db 데이터 예시처럼
{"_id":{"$oid":"5fba5ab1849a536ae65a3bf1"},"rf_id":"1rf","manager":[{"user_id":{"$numberLong":"1"},"name":"최우영","time":["2020.07.17수14시~17시","2020.07.17수18시~20시"]},{"user_id":{"$numberLong":"2"},"name":"박웅기","time":["2020.07.17수14시~17시"]}],"interviewer":[{"user_id":"3","name":"권수지","time":"2020.07.17수14시~17~17시"},{"user_id":"4","name":"김현조","time":"2020.07.17수18시~20시"},{"user_id":"5","name":"김정우","time":"2020.07.17수18시~20시"}],"etc":[{"user_id":"6","name":"이하연"}]}
들어가게 부탁 ..... sorry I love 현조, 정우, 하연
'''









    





   
