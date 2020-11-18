"""mozip URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from mozip1.views import *

#jwoo

router = routers.DefaultRouter()
router.register(r'users',UserViewSet)
router.register(r'clubs', ClubViewSet)

#jwoo

urlpatterns = [
    path('admin/', admin.site.urls),
    path('test1/', include(router.urls)),
    path('test2/', UserListView.as_view()),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework')), #login,logout 추가


    #jwoo
    path('api/', include(router.urls)),

    #mozip
    #list
    path('list/all/', ListAllView.as_view()),
    path('list/academy/', ListAcademyView.as_view()),
    path('list/art/', ListArtView.as_view()),
    path('list/networking/', ListNetworkingView.as_view()),
    path('list/sports/', ListSportsView.as_view()),
    path('list/travel/', ListTravelView.as_view()),
    path('list/religion/', ListReligionView.as_view()),
    path('list/volunteer/', ListVolunteerView.as_view()),
    path('list/etc/', ListEtcView.as_view()),

    path('list/academy/{cc_id}/', ClubView.as_view()),
    path('list/academy/{circleID}/detail/', ListDetailView.as_view()),
    path('list/academy/{circleID}/apply/', include(router.urls)),
    path('list/academy/{circleID}/apply/success/', include(router.urls)),
    path('list/academy/{circleID}/apply/fail/', include(router.urls)),
    path('list/academy/{circleID}/joinus/', include(router.urls)),
    path('list/academy/{circleID}/members/', include(router.urls)),
    path('list/academy/{circleID}/members/edit/', include(router.urls)),

    path('list/art/{circleID}/', ClubView.as_view()),
    path('list/art/{circleID}/detail/', include(router.urls)),
    path('list/art/{circleID}/apply/', include(router.urls)),
    path('list/art/{circleID}/apply/success/', include(router.urls)),
    path('list/art/{circleID}/apply/fail/', include(router.urls)),
    path('list/art/{circleID}/joinus/', include(router.urls)),
    path('list/art/{circleID}/members/', include(router.urls)),
    path('list/art/{circleID}/members/edit/', include(router.urls)),

    path('list/networking/{circleID}/', ClubView.as_view()),
    path('list/networking/{circleID}/detail/', include(router.urls)),
    path('list/networking/{circleID}/apply/', include(router.urls)),
    path('list/networking/{circleID}/apply/success/', include(router.urls)),
    path('list/networking/{circleID}/apply/fail/', include(router.urls)),
    path('list/networking/{circleID}/joinus/', include(router.urls)),
    path('list/networking/{circleID}/members/', include(router.urls)),
    path('list/networking/{circleID}/members/edit/', include(router.urls)),

    path('list/sports/{circleID}/', ClubView.as_view()),
    path('list/sports/{circleID}/detail/', include(router.urls)),
    path('list/sports/{circleID}/apply/', include(router.urls)),
    path('list/sports/{circleID}/apply/success/', include(router.urls)),
    path('list/sports/{circleID}/apply/fail/', include(router.urls)),
    path('list/sports/{circleID}/joinus/', include(router.urls)),
    path('list/sports/{circleID}/members/', include(router.urls)),
    path('list/sports/{circleID}/members/edit/', include(router.urls)),

    path('list/travel/{circleID}/', ClubView.as_view()),
    path('list/travel/{circleID}/detail/', include(router.urls)),
    path('list/travel/{circleID}/apply/', include(router.urls)),
    path('list/travel/{circleID}/apply/success/', include(router.urls)),
    path('list/travel/{circleID}/apply/fail/', include(router.urls)),
    path('list/travel/{circleID}/joinus/', include(router.urls)),
    path('list/travel/{circleID}/members/', include(router.urls)),
    path('list/travel/{circleID}/members/edit/', include(router.urls)),

    path('list/religion/{circleID}/', ClubView.as_view()),
    path('list/religion/{circleID}/detail/', include(router.urls)),
    path('list/religion/{circleID}/apply/', include(router.urls)),
    path('list/religion/{circleID}/apply/success/', include(router.urls)),
    path('list/religion/{circleID}/apply/fail/', include(router.urls)),
    path('list/religion/{circleID}/joinus/', include(router.urls)),
    path('list/religion/{circleID}/members/', include(router.urls)),
    path('list/religion/{circleID}/members/edit/', include(router.urls)),

    path('list/volunteer/{circleID}/', ClubView.as_view()),
    path('list/volunteer/{circleID}/detail/', include(router.urls)),
    path('list/volunteer/{circleID}/apply/', include(router.urls)),
    path('list/volunteer/{circleID}/apply/success/', include(router.urls)),
    path('list/volunteer/{circleID}/apply/fail/', include(router.urls)),
    path('list/volunteer/{circleID}/joinus/', include(router.urls)),
    path('list/volunteer/{circleID}/members/', include(router.urls)),
    path('list/volunteer/{circleID}/members/edit/', include(router.urls)),

    path('list/etc/{circleID}/', ClubView.as_view()),
    path('list/etc/{circleID}/detail/', include(router.urls)),
    path('list/etc/{circleID}/apply/', include(router.urls)),
    path('list/etc/{circleID}/apply/success/', include(router.urls)),
    path('list/etc/{circleID}/apply/fail/', include(router.urls)),
    path('list/etc/{circleID}/joinus/', include(router.urls)),
    path('list/etc/{circleID}/members/', include(router.urls)),
    path('list/etc/{circleID}/members/edit/', include(router.urls)),
  
    path('list/academy/<int:cc_id>/detail/', include(router.urls)),
    path('list/academy/<int:cc_id>/apply/', include(router.urls)),
    path('list/academy/<int:cc_id>/apply/success/', include(router.urls)),
    path('list/academy/<int:cc_id>/apply/fail/', include(router.urls)),
    path('list/academy/<int:cc_id>/joinus/', include(router.urls)),
    path('list/academy/<int:cc_id>/members/', include(router.urls)),
    path('list/academy/<int:cc_id>/members/edit/', include(router.urls)),

    path('list/art/<int:cc_id>/', include(router.urls)),
    path('list/art/<int:cc_id>/detail/', include(router.urls)),
    path('list/art/<int:cc_id>/apply/', include(router.urls)),
    path('list/art/<int:cc_id>/apply/success/', include(router.urls)),
    path('list/art/<int:cc_id>/apply/fail/', include(router.urls)),
    path('list/art/<int:cc_id>/joinus/', include(router.urls)),
    path('list/art/<int:cc_id>/members/', include(router.urls)),
    path('list/art/<int:cc_id>/members/edit/', include(router.urls)),

    path('list/networking/<int:cc_id>/', include(router.urls)),
    path('list/networking/<int:cc_id>/detail/', include(router.urls)),
    path('list/networking/<int:cc_id>/apply/', include(router.urls)),
    path('list/networking/<int:cc_id>/apply/success/', include(router.urls)),
    path('list/networking/<int:cc_id>/apply/fail/', include(router.urls)),
    path('list/networking/<int:cc_id>/joinus/', include(router.urls)),
    path('list/networking/<int:cc_id>/members/', include(router.urls)),
    path('list/networking/<int:cc_id>/members/edit/', include(router.urls)),

    path('list/sports/<int:cc_id>/', include(router.urls)),
    path('list/sports/<int:cc_id>/detail/', include(router.urls)),
    path('list/sports/<int:cc_id>/apply/', include(router.urls)),
    path('list/sports/<int:cc_id>/apply/success/', include(router.urls)),
    path('list/sports/<int:cc_id>/apply/fail/', include(router.urls)),
    path('list/sports/<int:cc_id>/joinus/', include(router.urls)),
    path('list/sports/<int:cc_id>/members/', include(router.urls)),
    path('list/sports/<int:cc_id>/members/edit/', include(router.urls)),

    path('list/travel/<int:cc_id>/', include(router.urls)),
    path('list/travel/<int:cc_id>/detail/', include(router.urls)),
    path('list/travel/<int:cc_id>/apply/', include(router.urls)),
    path('list/travel/<int:cc_id>/apply/success/', include(router.urls)),
    path('list/travel/<int:cc_id>/apply/fail/', include(router.urls)),
    path('list/travel/<int:cc_id>/joinus/', include(router.urls)),
    path('list/travel/<int:cc_id>/members/', include(router.urls)),
    path('list/travel/<int:cc_id>/members/edit/', include(router.urls)),

    path('list/religion/<int:cc_id>/', include(router.urls)),
    path('list/religion/<int:cc_id>/detail/', include(router.urls)),
    path('list/religion/<int:cc_id>/apply/', include(router.urls)),
    path('list/religion/<int:cc_id>/apply/success/', include(router.urls)),
    path('list/religion/<int:cc_id>/apply/fail/', include(router.urls)),
    path('list/religion/<int:cc_id>/joinus/', include(router.urls)),
    path('list/religion/<int:cc_id>/members/', include(router.urls)),
    path('list/religion/<int:cc_id>/members/edit/', include(router.urls)),

    path('list/volunteer/<int:cc_id>/', include(router.urls)),
    path('list/volunteer/<int:cc_id>/detail/', include(router.urls)),
    path('list/volunteer/<int:cc_id>/apply/', include(router.urls)),
    path('list/volunteer/<int:cc_id>/apply/success/', include(router.urls)),
    path('list/volunteer/<int:cc_id>/apply/fail/', include(router.urls)),
    path('list/volunteer/<int:cc_id>/joinus/', include(router.urls)),
    path('list/volunteer/<int:cc_id>/members/', include(router.urls)),
    path('list/volunteer/<int:cc_id>/members/edit/', include(router.urls)),

    path('list/etc/<int:cc_id>/', include(router.urls)),
    path('list/etc/<int:cc_id>/detail/', include(router.urls)),
    path('list/etc/<int:cc_id>/apply/', include(router.urls)),
    path('list/etc/<int:cc_id>/apply/success/', include(router.urls)),
    path('list/etc/<int:cc_id>/apply/fail/', include(router.urls)),
    path('list/etc/<int:cc_id>/joinus/', include(router.urls)),
    path('list/etc/<int:cc_id>/members/', include(router.urls)),
    path('list/etc/<int:cc_id>/members/edit/', include(router.urls)),

    #login,signup
    path('login/', include(router.urls)),
    path('signup/', include(router.urls)),

    #mypage
    path('mypage/<int:user_id>/', MypageView.as_view()),
    path('mypage/<int:user_id>/edit/', MypageEditView.as_view()),
    path('mypage/<int:user_id>/status/', MypageStatusView.as_view()),
    path('mypage/<int:user_id>/introduction/', MypageIntroductionView.as_view()),
    path('mypage/<int:user_id>/-<int:ci_id>/notice/', MypageRecruitNoticeView.as_view()),
    
    #recruit
    path('recruit/selection/', include(router.urls)),
    path('recruit/process/basicinfo/',include(router.urls) ),
    path('recruit/process/noticeinfo/', include(router.urls)),
    path('recruit/process/form/', include(router.urls)),
    path('recruit/process/applicants/', include(router.urls)),
    path('recruit/resume/', include(router.urls)),
    path('recruit/resume/<int:user_id>/', include(router.urls)),
    path('recruit/management/staff/',include(router.urls)),
    path('recruit/management/detail/',include(router.urls)),
    path('recruit/management/interview/commonquestion/',include(router.urls)),
    path('recruit/management/interview/detail/',include(router.urls)),
    path('recruit/management/interview/record/',include(router.urls)),
    path('recruit/management/interview/postprocessing/notice/',include(router.urls)),
    path('recruit/management/interview/postprocessing/detail/',include(router.urls)),
    path('recruit/management/interview/postprocessing/finalprocessing/',include(router.urls)),
    path('recruit/schedule/management', include(router.urls)),
    path('recruit/schedule/management/staff', include(router.urls)),
    path('recruit/schedule/management/detail', include(router.urls)),
    path('recruit/interview/', include(router.urls)),
    path('recruit/interview/commonquestion', include(router.urls)),
    path('recruit/interview/detail', include(router.urls)),
    path('recruit/interview/record', include(router.urls)),
    path('recruit/interview/postprocessing/all', include(router.urls)),
    path('recruit/interview/postprocessing/yet', include(router.urls)),
    path('recruit/interview/postprocessing/pass', include(router.urls)),
    path('recruit/interview/postprocessing/nonpass', include(router.urls)),
    path('recruit/interview/postprocessing/keep', include(router.urls)),
    path('recruit/interview/postprocessing/notice', include(router.urls)),

    #guide
    path('guide/selfintroduction/', include(router.urls)),
    path('guide/registration/', include(router.urls)),
    path('guide/operation/', include(router.urls)),

    #circle
    path('circle/open/', include(router.urls)),
    path('circle/open/success/', include(router.urls)),
    path('circle/open/fail/', include(router.urls)),
    path('circle/open/approval/', include(router.urls)),
    path('circle/open/reject/', include(router.urls)),

    
]

  