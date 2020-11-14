from djongo import models
import pymongo

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

class Creation_Club(models.Model):
    #cc_id = models.PositiveIntegerField(unique=True,primary_key=True)
    name = models.CharField(max_length=15)
    information = models.CharField(max_length=30)
    category_choice = (("c1","학술"),("c2","예술"),("c3","친목"),("c4","스포츠"),("c5","여행"),("c6","종교"),("c7","봉사"),("c8","기타"))
    category = models.CharField(max_length=8,choices=category_choice,default="c1")
    foundationdate = models.JSONField()
    detail_information = models.TextField(max_length=300)
    self_image = models.CharField(max_length=10)
    telephone = models.CharField(max_length=15)
    email = models.EmailField()
    approval_choice = (("a1","미확인"),("a2","승인"),("a3","승인불가"))
    approval = models.CharField(max_length=8,choices=approval_choice,default="a1")
    created_id = models.ArrayReferenceField(
        to = User
    )
    objects = models.DjongoManager()

class Club(models.Model):
    cc_id = models.PositiveIntegerField(unique=True,primary_key=True)
    name = models.CharField(max_length=15)
    information = models.CharField(max_length=30)
    category_choice = (("c1","학술"),("c2","예술"),("c3","친목"),("c4","스포츠"),("c5","여행"),("c6","종교"),("c7","봉사"),("c8","기타"))
    category = models.CharField(max_length=8,choices=category_choice,default="c1")
    foundationdate = models.JSONField()
    detail_information = models.TextField(max_length=300)
    self_image = models.CharField(max_length=10)
    card_image = models.JSONField(default=None)
    telephone = models.CharField(max_length=15)
    email = models.EmailField()
    #status
    objects = models.DjongoManager()

    def __str__(self):
        return self.cc_id

class Club_member(models.Model):
    member = models.JSONField()
    club_id = models.ArrayReferenceField(
        to = Club
    )
    objects = models.DjongoManager()

class Club_review(models.Model):
    review = models.JSONField()
    club_id = models.ArrayReferenceField(
        to = Club
    )
    objects = models.DjongoManager()

class Club_FAQ(models.Model):
    FAQ = models.JSONField()
    club_id = models.ArrayReferenceField(
        to = Club
    )
    objects = models.DjongoManager()

class Club_introduce(models.Model):
    title = models.CharField(max_length=20)
    number = models.CharField(max_length=5)
    region = models.JSONField()
    target_choice = (("t1","대학생"),("t2","직장인"),("t3","일반인"))
    target = models.CharField(max_length=10,choices=target_choice,default="t1")
    time = models.CharField(max_length=10)
    mainURL = models.URLField(max_length=200)
    detail = models.JSONField()
    poster = models.CharField(max_length=5)
    card_image = models.JSONField()
    club_id = models.ArrayReferenceField(
        to = Club
    )
    ci_id = models.CharField(unique=True,primary_key=True,max_length=15)
    objects = models.DjongoManager()

    def __str__(self):
        return self.ci_id

class recruit_QA(models.Model):
    QA = models.JSONField()
    ci_id = models.ArrayReferenceField(
        to = Club_introduce
    )
    objects = models.DjongoManager()


class recruit_Notice(models.Model):
    Notice = models.JSONField()
    ci_id = models.ArrayReferenceField(
        to = Club_introduce
    )
    objects = models.DjongoManager()

# 만들떄 RDB의 manytomany이용할 예정, 현재는 dumdy확인을 위해 기입
class recruit_format(models.Model):
    number = models.PositiveIntegerField()
    type_choices = (("1","면접전형"),("2","서류전형"),("3","면접+서류전형"))
    Type = models.CharField(max_length=15,choices=type_choices,default="1")
    club_id = models.ArrayReferenceField(
        to = Club
    )
    user_id = models.ArrayReferenceField(
        to = User
    )
    document = models.JSONField()
    rf_id = models.CharField(unique=True,primary_key=True,max_length=15)
    objects = models.DjongoManager()

class recruit_basic_question(models.Model):

    number = models.PositiveIntegerField()
    basic = models.JSONField()
    optional = models.JSONField()
    club_id = models.ArrayReferenceField(
        to = Club
    )
    user_id = models.ArrayReferenceField(
        to = User
    )
    rbq_id = models.CharField(unique=True,primary_key=True,max_length=15)
    objects = models.DjongoManager()

class Pass_Fail(models.Model):

    type_choices = (("1","면접전형"),("2","서류전형"),("3","면접+서류전형"))
    Type = models.CharField(max_length=15,choices=type_choices,default="1")
    ci_id = models.ArrayReferenceField(
        to = Club_introduce
    )
    user_id = models.ArrayReferenceField(
        to = User
    )
    pass_fail_choices = (("1","합격"),("2","불합격"),("3","보류"),("4","미결정"))
    pass_fail = models.CharField(max_length=10,choices=pass_fail_choices,default="1")
    detail = models.JSONField()
    pf_id = models.CharField(unique=True,primary_key=True,max_length=10)
    objects = models.DjongoManager()

class user_apply_list(models.Model):
    # club이랑 onetomany 해야함
    user_id = models.ArrayReferenceField(
        to = User
    )
    ci_id = models.ArrayReferenceField(
        to = Club_introduce
    )
    apply_list = models.JSONField()
    objects = models.DjongoManager()


class user_cirlce(models.Model):
    # club이랑 onetomany 해야함
    # embedded 나중에......
    user_id = models.ArrayReferenceField(
        to = User
    )

    states_chocie = (("1","모집안함"),("2","모집중"),("3","서류 진행"),("4","면접 진행"),("5","회비 입금 대기 중"))
    states = models.CharField(max_length=15,choices=states_chocie,default="1")
    club_in = models.JSONField()
    objects = models.DjongoManager()

class user_recordQ(models.Model):
    user_id = models.ArrayReferenceField(
        to = User
    )
    recordQ = models.JSONField()
    objects = models.DjongoManager()

class interview_group():
    ci_id = models.ArrayReferenceField(
        to = Club_introduce
    )
    










    





   
