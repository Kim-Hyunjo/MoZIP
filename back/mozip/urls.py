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

    path('postclub', PostClubView.as_view()),
    path('postclubreview/', PostClubReview.as_view()),
    path('postclubfaq/', PostClubFaq.as_view()),
    path('postclubintro/', PostClubIntroduce.as_view()),
    path("postrecruitqa/", PostRecruitQA.as_view()),
    path("postuser/", PostUser.as_view()),
    path("postrecruitformat/", PostRecruitFormat.as_view()),
    path("postuserrecordq/", PostUserRecordQ.as_view()),
    path("postclubmember/", PostClubMember.as_view()),
    path("postrecruitnotice/", PostRecruitNotice.as_view()),

    #mozip
    #list
    path('list/all', ListAllView.as_view()),
    path('list/academy/', ListAcademyView.as_view()),
    path('list/art/', ListArtView.as_view()),
    path('list/networking/', ListNetworkingView.as_view()),
    path('list/sports/', ListSportsView.as_view()),
    path('list/travel/', ListTravelView.as_view()),
    path('list/religion/', ListReligionView.as_view()),
    path('list/volunteer/', ListVolunteerView.as_view()),
    path('list/etc/', ListEtcView.as_view()),

    path('list/academy/<int:cc_id>/', ClubView.as_view()),
    path('list/academy/<int:cc_id>/detail/', ListDetailView.as_view()),
    path('list/academy/<int:cc_id>/apply/', ListApplyView.as_view()),
    path('list/academy/<int:cc_id>/apply2/<int:user_id>/', ListApply2View.as_view()),
    path('list/academy/<int:cc_id>/apply/success/', ListApplySuccessView.as_view()),
    path('list/academy/<int:cc_id>/apply/fail/', ListApplyFailView.as_view()),
    path('list/academy/<int:cc_id>/joinus/', ListJoinUsView.as_view(), name='joinus'),
    path('list/academy/<int:cc_id>/members/', ListMembersView.as_view()),
    path('list/academy/<int:cc_id>/members/edit/', ListMembersEditView.as_view()),

    path('list/art/<int:cc_id>/', ClubView.as_view()),
    path('list/art/<int:cc_id>/detail/', ListDetailView.as_view()),
    path('list/art/<int:cc_id>/apply/', ListApplyView.as_view()),
    path('list/art/<int:cc_id>/apply2/<int:user_id>/', ListApply2View.as_view()),
    path('list/art/<int:cc_id>/apply/success/', ListApplySuccessView.as_view()),
    path('list/art/<int:cc_id>/apply/fail/', ListApplyFailView.as_view()),
    path('list/art/<int:cc_id>/joinus/', ListJoinUsView.as_view()),
    path('list/art/<int:cc_id>/members/', ListMembersView.as_view()),
    path('list/art/<int:cc_id>/members/edit/', ListMembersEditView.as_view()),

    path('list/networking/<int:cc_id>/', ClubView.as_view()),
    path('list/networking/<int:cc_id>/detail/', ListDetailView.as_view()),
    path('list/networking/<int:cc_id>/apply/', ListApplyView.as_view()),
    path('list/networking/<int:cc_id>/apply2/<int:user_id>/', ListApply2View.as_view()),
    path('list/networking/<int:cc_id>/apply/success/', ListApplySuccessView.as_view()),
    path('list/networking/<int:cc_id>/apply/fail/', ListApplyFailView.as_view()),
    path('list/networking/<int:cc_id>/joinus/', ListJoinUsView.as_view()),
    path('list/networking/<int:cc_id>/members/', ListMembersView.as_view()),
    path('list/networking/<int:cc_id>/members/edit/', ListMembersEditView.as_view()),

    path('list/sports/<int:cc_id>/', ClubView.as_view()),
    path('list/sports/<int:cc_id>/detail/', ListDetailView.as_view()),
    path('list/sports/<int:cc_id>/apply/', ListApplyView.as_view()),
    path('list/sports/<int:cc_id>/apply2/<int:user_id>/', ListApply2View.as_view()),
    path('list/sports/<int:cc_id>/apply/success/', ListApplySuccessView.as_view()),
    path('list/sports/<int:cc_id>/apply/fail/', ListApplyFailView.as_view()),
    path('list/sports/<int:cc_id>/joinus/', ListJoinUsView.as_view()),
    path('list/sports/<int:cc_id>/members/', ListMembersView.as_view()),
    path('list/sports/<int:cc_id>/members/edit/', ListMembersEditView.as_view()),

    path('list/travel/<int:cc_id>/', ClubView.as_view()),
    path('list/travel/<int:cc_id>/detail/', ListDetailView.as_view()),
    path('list/travel/<int:cc_id>/apply/', ListApplyView.as_view()),
    path('list/travel/<int:cc_id>/apply2/<int:user_id>/', ListApply2View.as_view()),
    path('list/travel/<int:cc_id>/apply/success/', ListApplySuccessView.as_view()),
    path('list/travel/<int:cc_id>/apply/fail/', ListApplyFailView.as_view()),
    path('list/travel/<int:cc_id>/joinus/', ListJoinUsView.as_view()),
    path('list/travel/<int:cc_id>/members/', ListMembersView.as_view()),
    path('list/travel/<int:cc_id>/members/edit/', ListMembersEditView.as_view()),

    path('list/religion/<int:cc_id>/', ClubView.as_view()),
    path('list/religion/<int:cc_id>/detail/', ListDetailView.as_view()),
    path('list/religion/<int:cc_id>/apply/', ListApplyView.as_view()),
    path('list/religion/<int:cc_id>/apply2/<int:user_id>/', ListApply2View.as_view()),
    path('list/religion/<int:cc_id>/apply/success/', ListApplySuccessView.as_view()),
    path('list/religion/<int:cc_id>/apply/fail/', ListApplyFailView.as_view()),
    path('list/religion/<int:cc_id>/joinus/', ListJoinUsView.as_view()),
    path('list/religion/<int:cc_id>/members/', ListMembersView.as_view()),
    path('list/religion/<int:cc_id>/members/edit/', ListMembersEditView.as_view()),

    path('list/volunteer/<int:cc_id>/', ClubView.as_view()),
    path('list/volunteer/<int:cc_id>/detail/', ListDetailView.as_view()),
    path('list/volunteer/<int:cc_id>/apply/', ListApplyView.as_view()),
    path('list/volunteer/<int:cc_id>/apply2/<int:user_id>/', ListApply2View.as_view()),
    path('list/volunteer/<int:cc_id>/apply/success/', ListApplySuccessView.as_view()),
    path('list/volunteer/<int:cc_id>/apply/fail/', ListApplyFailView.as_view()),
    path('list/volunteer/<int:cc_id>/joinus/', ListJoinUsView.as_view()),
    path('list/volunteer/<int:cc_id>/members/', ListMembersView.as_view()),
    path('list/volunteer/<int:cc_id>/members/edit/', ListMembersEditView.as_view()),

    path('list/etc/<int:cc_id>/', ClubView.as_view()),
    path('list/etc/<int:cc_id>/detail/', ListDetailView.as_view()),
    path('list/etc/<int:cc_id>/apply/', ListApplyView.as_view()),
    path('list/etc/<int:cc_id>/apply2/<int:user_id>/', ListApply2View.as_view()),
    path('list/etc/<int:cc_id>/apply/success/', ListApplySuccessView.as_view()),
    path('list/etc/<int:cc_id>/apply/fail/', ListApplyFailView.as_view()),
    path('list/etc/<int:cc_id>/joinus/', ListJoinUsView.as_view()),
    path('list/etc/<int:cc_id>/members/', ListMembersView.as_view()),
    path('list/etc/<int:cc_id>/members/edit/', ListMembersEditView.as_view()),

    #login,signup
    path('login/', include(router.urls)),
    path('signup/', include(router.urls)),

    #mypage
    path('mypage/<int:user_id>/', MypageView.as_view()),
    path('mypage/<int:user_id>/edit/', MypageEditView.as_view()),
    path('mypage/<int:user_id>/status/', MypageStatusView.as_view()),
    path('mypage/<int:user_id>/introduction/', MypageIntroductionView.as_view()),
    path('mypage/<int:user_id>/<int:ci_id>/notice/', MypageRecruitNoticeView.as_view()),
    
    #recruit
    path('recruit/selection/', include(router.urls)),
    path('recruit/<int:club_id>/applicants',RecruitApplicantsView.as_view()),
    path('recruit/process/basicinfo/',include(router.urls) ),
    path('recruit/process/noticeinfo/', RecruitNoticeview.as_view()),
    path('recruit/process/form/', RecruitProcessFormView.as_view()),
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
    path('circle/open/', CreateClubApproval.as_view()),
    path('circle/open/success/', include(router.urls)),
    path('circle/open/fail/', include(router.urls)),
    path('circle/open/approval/', include(router.urls)),
    path('circle/open/reject/', include(router.urls)),

    
]

  