


from django.db import migrations, models
import djongo.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Club',
            fields=[
                ('cc_id', models.IntegerField(default=0, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=15)),
                ('information', models.CharField(max_length=30, null=True)),
                ('category', models.CharField(choices=[('c1', '학술'), ('c2', '예술'), ('c3', '친목'), ('c4', '스포츠'), ('c5', '여행'), ('c6', '종교'), ('c7', '봉사'), ('c8', '기타')], default='c1', max_length=8)),
                ('foundationdate', djongo.models.fields.JSONField(default=None)),
                ('detail_information', models.TextField(default=None, max_length=300)),
                ('self_image', models.CharField(default=None, max_length=10)),
                ('card_image', djongo.models.fields.JSONField(default=[])),
                ('telephone', models.CharField(default=None, max_length=15)),
                ('email', models.EmailField(default=None, max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Club_FAQ',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('FAQ', djongo.models.fields.JSONField()),
                ('club_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Club_introduce',
            fields=[
                ('number', models.CharField(default=None, max_length=5)),
                ('region', models.CharField(default=None, max_length=25)),
                ('target', models.CharField(choices=[('t1', '대학생'), ('t2', '직장인'), ('t3', '일반인')], default='t1', max_length=10)),
                ('time', models.CharField(default=None, max_length=10)),
                ('mainURL', models.URLField(default=None)),
                ('detail', djongo.models.fields.JSONField(default=[])),
                ('poster', models.CharField(default=None, max_length=5)),
                ('card_image', djongo.models.fields.JSONField(default=[])),
                ('club_id', models.IntegerField(default=0)),
                ('types', models.CharField(choices=[('1', '면접전형'), ('2', '서류전형'), ('3', '면접+서류전형')], default='1', max_length=20)),
                ('ci_id', models.CharField(default=0, max_length=15, primary_key=True, serialize=False, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Club_member',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('member', djongo.models.fields.JSONField()),
                ('club_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Club_review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review', djongo.models.fields.JSONField()),
                ('club_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Creation_Club',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default=None, max_length=15)),
                ('information', models.CharField(default=None, max_length=30)),
                ('category', models.CharField(choices=[('c1', '학술'), ('c2', '예술'), ('c3', '친목'), ('c4', '스포츠'), ('c5', '여행'), ('c6', '종교'), ('c7', '봉사'), ('c8', '기타')], default='c1', max_length=8)),
                ('foundationdate', djongo.models.fields.JSONField()),
                ('detail_information', models.TextField(default=None, max_length=300)),
                ('self_image', models.CharField(default=None, max_length=10)),
                ('telephone', models.CharField(default=None, max_length=15)),
                ('email', models.EmailField(default=None, max_length=254)),
                ('approval', models.CharField(choices=[('a1', '미확인'), ('a2', '승인'), ('a3', '승인불가')], default='a1', max_length=8)),
                ('created_id', models.PositiveIntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Pass_Fail',
            fields=[
                ('Type', models.CharField(choices=[('1', '면접전형'), ('2', '서류전형'), ('3', '면접+서류전형')], default='1', max_length=15)),
                ('ci_id', models.CharField(max_length=15)),
                ('user_id', models.PositiveIntegerField()),
                ('pass_fail', models.CharField(choices=[('1', '합격'), ('2', '불합격'), ('3', '보류'), ('4', '미결정')], default='1', max_length=10)),
                ('detail', djongo.models.fields.JSONField()),
                ('pf_id', models.CharField(max_length=10, primary_key=True, serialize=False, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='recruit_basic_question',
            fields=[
                ('number', models.PositiveIntegerField()),
                ('basic', djongo.models.fields.JSONField()),
                ('optional', djongo.models.fields.JSONField()),
                ('club_id', models.IntegerField()),
                ('user_id', models.PositiveIntegerField()),
                ('rbq_id', models.CharField(max_length=15, primary_key=True, serialize=False, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='recruit_format',
            fields=[
                ('Type', models.CharField(choices=[('1', '면접전형'), ('2', '서류전형'), ('3', '면접+서류전형')], default='1', max_length=15)),
                ('club_id', models.IntegerField(default=0)),
                ('user_id', models.PositiveIntegerField(default=0)),
                ('rf_id', models.CharField(max_length=15, primary_key=True, serialize=False, unique=True)),
                ('approval_info', djongo.models.fields.JSONField(default=[])),
                ('time', djongo.models.fields.JSONField(default=[])),
                ('run_time', models.IntegerField(default=0)),
                ('rest_time', models.IntegerField(default=0)),
                ('Multiple_choice', djongo.models.fields.JSONField(default=[])),
                ('Short_answer', djongo.models.fields.JSONField(default=[])),
                ('long_answer', djongo.models.fields.JSONField(default=[])),
            ],
        ),
        migrations.CreateModel(
            name='recruit_notice',
            fields=[
                ('notice', djongo.models.fields.JSONField()),
                ('ci_id', models.CharField(max_length=15, primary_key=True, serialize=False, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='recruit_QA',
            fields=[
                ('QA', djongo.models.fields.JSONField()),
                ('ci_id', models.CharField(max_length=15, primary_key=True, serialize=False, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('group', models.CharField(choices=[('g1', '학생'), ('g2', '직장인'), ('g3', '일반인')], default='g1', max_length=3)),
                ('name', models.CharField(max_length=15)),
                ('education', djongo.models.fields.JSONField()),
                ('grader', models.CharField(choices=[('gr1', '1학년'), ('gr2', '2학년'), ('gr3', '3학년'), ('gr4', '4학년')], default='gr1', max_length=4)),
                ('states', models.CharField(choices=[('s1', '재학'), ('s2', '휴학'), ('s3', '졸업')], default='s1', max_length=3)),
                ('birthday', models.CharField(max_length=12)),
                ('telephone', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=254)),
                ('address', models.TextField()),
                ('self_image', models.CharField(max_length=10)),
                ('date', models.DateField(auto_now_add=True)),
                ('user_id', models.PositiveIntegerField(primary_key=True, serialize=False, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='user_apply_list',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.PositiveIntegerField()),
                ('apply_list', djongo.models.fields.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='user_circle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.PositiveIntegerField()),
                ('states', models.CharField(choices=[('1', '모집안함'), ('2', '모집중'), ('3', '서류 진행'), ('4', '면접 진행'), ('5', '회비 입금 대기 중')], default='1', max_length=15)),
                ('club_in', djongo.models.fields.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='user_recordQ',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.PositiveIntegerField()),
                ('recordQ', djongo.models.fields.JSONField()),
            ],
        ),
    ]
