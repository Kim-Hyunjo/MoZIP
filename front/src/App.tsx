import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import './App.css';
import NotFound from './error/NotFound';
import Home from './Test/home';
import RedirectTest from './Test/RedirectTest';
import TestList from './Test/TestList';
import List from './pages/list/List';
import Apply from './pages/list/apply/Apply';
import Apply2 from './pages/list/apply/Apply2';
import Circle from './pages/circle/Circle';
import CircleDetail from './pages/circle/CircleDetail';
import ListApplySuccess from './pages/list/apply/ListApplySuccess';
import ListApplyFail from './pages/list/apply/ListApplyFail';
import mypage from './pages/mypage/mypage';
import myPageEdit from './pages/mypage/myPageEdit';
import mypageStatus from './pages/mypage/mypageStatus';
import Use from './pages/about/Use';
import Open from './pages/circle/Open';
import myPageIntroduction from './pages/mypage/introduction/myPageIntroduction';
import CircleOpenSuccess from './pages/circle/CircleOpenSuccess';
import CircleOpenApproval from './pages/circle/CircleOpenApproval';
import CircleOpenReject from './pages/circle/CircleOpenReject';
import CircleMembersEdit from './pages/circle/CircleMembersEdit';
import CircleMembers from './pages/circle/CircleMembers';
import ProcessBasicInfo from './pages/recruit/ProcessBasicInfo';
import ProcessForm from './pages/recruit/ProcessForm';
import Selection from './pages/recruit/Selection';
import ProcessNoticeInfo from './pages/recruit/ProcessNoticeInfo';
import Applicants from './pages/recruit/Applicants';
import Resume from './pages/recruit/Resume';
import Resume2 from './pages/recruit/Resume2';
import Resume3 from './pages/recruit/Resume3';
import Schedule1 from './pages/recruit/Schedule1';
import Schedule2 from './pages/recruit/Schedule2';
import Interview from './pages/recruit/Interview';
import InterviewCommonQuestion from './pages/recruit/InterviewCommonQuestion';
import InterviewDetail from './pages/recruit/InterviewDetail';
import Record from './pages/recruit/record/Record';
import PostInterviewPersonal from './pages/recruit/PostInterviewPersonal';
import InterviewPostprocessing from './pages/recruit/InterviewPostprocessing';
import FinalProcessing from './pages/recruit/FinalProcessing';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <div id="list">
              <ul className="menu">
                {/* NavLink를 이용하면 다이나믹 스타일 적용가능 */}
                <li>
                  <NavLink exact to="/mypage">
                    My Page
                  </NavLink>
                  <ul className="sub">
                    <li>
                      <NavLink exact to="/">
                        지원 이력
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/mypage/introduction">
                        자기소개서함
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink exact to="/list">
                    List
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/intro">
                    Recruit
                  </NavLink>
                  <ul className="sub">
                    <li>
                      <NavLink exact to="circle/open">
                        동아리 개설
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/">
                        동아리 운영
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/">
                        자기소개서함이란
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink exact={true} to="/home">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <hr />
        <div className="body">
          <Switch>
            <Route exact={true} path="/home" component={Home} />
            <Route exact path="/" render={() => <h3>Index</h3>} />
            <Route exact path="/intro" render={() => <h3>소개</h3>} />
            <Route exact path="/posts" component={TestList} />
            <Route exact path="/rt" component={RedirectTest} />
            {/* mypage */}
            <Route exact path="/mypage" component={mypage} />
            <Route exact path="/mypage/edit" component={myPageEdit} />
            <Route exact path="/mypage/status" component={mypageStatus} />
            <Route
              exact
              path="/mypage/:circle_id/notice"
              component={mypageStatus}
            />
            <Route
              exact
              path="/mypage/introduction"
              component={myPageIntroduction}
            />
            <Route exact path="/about/use" component={Use}></Route>
            {/* circle */}
            <Route exact path="/circle/open" component={Open}></Route>
            <Route
              exact
              path="/circle/open/success"
              component={CircleOpenSuccess}
            ></Route>
            <Route
              exact
              path="/circle/open/approval"
              component={CircleOpenApproval}
            ></Route>
            <Route
              exact
              path="/circle/open/reject"
              component={CircleOpenReject}
            ></Route>
            <Route
              exact
              path="/circle/members"
              component={CircleMembers}
            ></Route>
            <Route
              exact
              path="/circle/members/edit"
              component={CircleMembersEdit}
            ></Route>
            {/* list */}
            <Route exact path="/list" component={List} />
            <Route
              exact
              path="/list/:subject/:circle_id"
              component={Circle}
            ></Route>
            <Route
              exact
              path="/list/:subject/:circle_id/apply/success"
              component={ListApplySuccess}
            />
            <Route
              exact
              path="/list/:subject/:circle_id/apply/fail"
              component={ListApplyFail}
            />
            <Route
              exact
              path="/list/:subject/:circle_id/apply"
              component={Apply}
            ></Route>
            <Route
              exact
              path="/list/:subject/:circle_id/apply2"
              component={Apply2}
            ></Route>
            <Route
              exact
              path="/list/:subject/:circle_id/detail"
              component={CircleDetail}
            ></Route>
            <Route exact path="/about/Use" component={Use}></Route>
            <Route exact path="/circle/Open" component={Open}></Route>
            {/* Recruit */}
            <Route
              exact
              path="/recruit/selection"
              component={Selection}
            ></Route>
            <Route
              exact
              path="/recruit/process/basicinfo"
              component={ProcessBasicInfo}
            ></Route>
            <Route
              exact
              path="/recruit/process/noticeinfo"
              component={ProcessNoticeInfo}
            ></Route>
            <Route
              exact
              path="/recruit/process/form"
              component={ProcessForm}
            ></Route>
            <Route
              exact
              path="/recruit/applicants"
              component={Applicants}
            ></Route>
            <Route exact path="/recruit/resume" component={Resume}></Route>
            <Route
              exact
              path="/recruit/resume/:member_id"
              component={Resume2}
            ></Route>
            <Route
              exact
              path="/recruit/schedule/management"
              component={Resume3}
            ></Route>
            <Route
              exact
              path="/recruit/schedule/management/staff"
              component={Schedule1}
            ></Route>
            <Route
              exact
              path="/recruit/interview"
              component={Interview}
            ></Route>
            <Route
              exact
              path="/recruit/interview/commonquestion"
              component={InterviewCommonQuestion}
            ></Route>
            <Route
              exact
              path="/recruit/schedule2"
              component={Schedule2}
            ></Route>
            <Route
              exact
              path="/recruit/interview/detail/1"
              component={InterviewDetail}
            ></Route>
            <Route
              exact
              path="/recruit/interview/record"
              component={Record}
            ></Route>
            <Route
              exact
              path="/recruit/interview/postprocessing/detail"
              component={PostInterviewPersonal}
            ></Route>
            <Route
              path="/recruit/interview/InterviewPostprocessing"
              component={InterviewPostprocessing}
            ></Route>
            <Route
              exact
              path="/recruit/schedule2"
              component={Schedule2}
            ></Route>
            <Route
              exact
              path="/recruit/finalprocessing"
              component={FinalProcessing}
            ></Route>

            {/* NotFount */}
            <Route component={NotFound} />
          </Switch>
        </div>
        <hr />
        <footer>
          <h1>여기는 푸터</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">이용약관</Link>
              </li>
              <li>
                <Link to="/home">개인정보 처리방침</Link>
              </li>
              <li>
                <Link to="/intro">고객센터</Link>
              </li>
            </ul>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              amet deserunt repudiandae, est reprehenderit unde culpa? Beatae,
              cum iste vel, non eaque inventore alias quo maiores vero, tenetur
              facilis quisquam?
            </div>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;
