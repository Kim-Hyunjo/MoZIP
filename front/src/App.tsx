import React, { useState, useEffect } from 'react';
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
import ApplyNotice from './pages/list/apply/ApplyNotice';
import ApplyTemplete from './pages/list/apply/ApplyTemplete';
import Circle from './pages/circle/Circle';
import CircleDetail from './pages/circle/CircleDetail';
import ListApplySuccess from './pages/list/apply/ListApplySuccess';
import ListApplyFail from './pages/list/apply/ListApplyFail';
import mypage from './pages/mypage/mypage';
import mypageStatus from './pages/mypage/mypageStatus';
import myPageNotice from './pages/mypage/myPageNotice';
import Use from './pages/about/Use';
import Open from './pages/circle/Open';
import CircleOpenSuccess from './pages/circle/CircleOpenSuccess';
import CircleOpenApproval from './pages/circle/CircleOpenApproval';
import CircleOpenReject from './pages/circle/CircleOpenReject';
import CircleMembersEdit from './pages/circle/CircleMembersEdit';
import CircleMembers from './pages/circle/CircleMembers';
import ProcessBasicInfo from './pages/recruit/ProcessBasicInfo';
import ProcessForm from './pages/recruit/processForm/ProcessForm';
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
import PostprocessingNotice from './pages/recruit/PostprocessingNotice';
import InterviewPostprocessing from './pages/recruit/InterviewPostprocessing';
import FinalProcessing from './pages/recruit/FinalProcessing';
import KakaoSignUp from './pages/login/KakaoSignUp';
import MyPageEdit from './pages/mypage/myPageEdit';
import guideRegistration from './pages/about/guideRegistration';
import guideSelfintroduction from './pages/about/guideSelfintroduction';
import guideOperation from './pages/about/guideOperation';

import Cookies from 'universal-cookie';
import Button from '@material-ui/core/Button';
import ScrollToTop from './scroll/ScrollToTop';

import logo from './images/logo@2x.png';
import Test from './Test/Test';
import words from './images/words.png';
import Intro from './pages/about/Intro';
import myPageIntroduction from './pages/mypage/introduction/myPageIntroduction';

function App() {
  const cookies = new Cookies();

  const [login, setLogin] = useState<string>(cookies.get('access_token'));

  const handleLogin = (token: string) => {
    setLogin(token);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <header>
          <Link to="/home">
            <img id="mozip_logo" src={logo} alt="Mo:ZIP logo" />
          </Link>
          {/* {cookies.get('access_token')} */}
          {/* {typeof cookies.get('none')} */}
          {/* {cookies.get('access_token') === undefined ? ( */}
          {login === '' ? (
            <Link to="/login">
              <div id="button_login">로그인/회원가입</div>
            </Link>
          ) : (
              <Button
                id="button_logout"
                onClick={() => {
                  cookies.remove('access_token');
                  cookies.remove('name');
                  cookies.remove('image');
                  cookies.remove('email');
                  setLogin('');
                }}
              >
                로그아웃
              </Button>
            )}

          <nav>
            <div id="list">
              <ul className="menu">
                {/* NavLink를 이용하면 다이나믹 스타일 적용가능 */}
                <li>
                  <NavLink exact to="/mypage/:user_id">
                    My Page
                  </NavLink>
                  <ul className="sub">
                    <li>
                      <NavLink exact to="/mypage/:user_id">
                        My Page
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
                    Guide
                  </NavLink>
                  <ul className="sub">
                    <li>
                      <NavLink exact to="/intro">
                        Guide
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/guide/registration">
                        동아리 개설법
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/guide/operation">
                        동아리 운영하기
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/guide/selfintroduction">
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
            {'!!!!!!테스트!!!!!!'}
            <Route exact={true} path="/test" component={Test} />
            <Route exact={true} path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/intro" component={Intro} />
            <Route exact path="/posts" component={TestList} />
            <Route exact path="/rt" component={RedirectTest} />
            {/* mypage */}
            <Route exact path="/mypage/status" component={mypageStatus} />
            <Route
              exact
              path="/mypage/:circle_id/notice"
              component={myPageNotice}
            />
            <Route
              exact
              path="/mypage/introduction"
              component={myPageIntroduction}
            />
            <Route exact path="/mypage/edit/:user_id" component={MyPageEdit} />
            <Route exact path="/mypage/:user_id" component={mypage} />
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
              path="/list/:subject/:circle_id/members"
              component={CircleMembers}
            ></Route>
            <Route
              exact
              path="/list/:subject/:circle_id/members/edit"
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
              component={ApplyNotice}
            ></Route>
            <Route
              exact
              path="/list/:subject/:circle_id/apply2"
              component={ApplyTemplete}
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
              exact
              path="/recruit/interview/postprocessing"
              component={InterviewPostprocessing}
            ></Route>
            <Route
              exact
              path="/recruit/interview/postprocessing/notice"
              component={PostprocessingNotice}
            ></Route>
            <Route
              exact
              path="/recruit/schedule/management/detail"
              component={Schedule2}
            ></Route>
            <Route
              exact
              path="/recruit/finalprocessing"
              component={FinalProcessing}
            ></Route>
            <Route
              exact
              path="/guide/registration"
              component={guideRegistration}
            ></Route>
            <Route
              exact
              path="/guide/selfintroduction"
              component={guideSelfintroduction}
            ></Route>
            <Route
              exact
              path="/guide/operation"
              component={guideOperation}
            ></Route>

            {'login'}
            <Route
              exact
              path="/login"
              render={() => <KakaoSignUp onLogin={handleLogin}></KakaoSignUp>}
            ></Route>

            {/* NotFount */}
            <Route component={NotFound} />
          </Switch>
        </div>
        <hr />
        <footer>
          <div className="footer_display_vert">
            <img
              src={logo}
              alt='logo' />
            <img
              src={words}
              alt='explanation' />
          </div>
          <div className="footer_navs">
            <div className="footer_display_vert footer_nav">
              <span>Information</span>
              <nav>
                <ul>
                  <li>
                    <Link className="footer_link" to="/intro">Guide</Link>
                  </li>
                  <li>
                    <Link className="footer_link" to="/login">Join Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer_display_vert footer_nav">
              <span>Support</span>
              <nav>
                <ul>
                  <li>
                    <Link className="footer_link" to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link className="footer_link" to="/">Customer Service</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer_display_vert footer_nav">
              <span>Legal</span>
              <nav>
                <ul>
                  <li>
                    <Link className="footer_link" to="/">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link className="footer_link" to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link className="footer_link" to="/">Cookie Policy</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
