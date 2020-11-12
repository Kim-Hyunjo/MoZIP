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
import Test from './Test/Test';
import TestList from './Test/TestList';
import ListAll from './pages/list/ListAll';
import List from './pages/list/List';
import ListAcademy from './pages/list/ListAcademy';
import ListArt from './pages/list/ListArt';
import ListNetworking from './pages/list/ListNetworking';
import ListSports from './pages/list/ListSports';
import ListTravel from './pages/list/ListTravel';
import ListReligion from './pages/list/ListReligion';
import ListVolunteer from './pages/list/ListVolunteer';
import ListETC from './pages/list/ListETC';
import Apply from './pages/list/apply/Apply';
import Apply2 from './pages/list/apply/Apply2';
import Circle from './pages/circle/Circle';
import CircleDetail from './pages/circle/CircleDetail';

import ListApplySuccess from './pages/list/apply/ListApplySuccess';
import ListApplyFail from './pages/list/apply/ListApplyFail';
import login from './pages/login/login';
import sginup from './pages/login/signup';
import mypage from './pages/mypage/mypage';
import myPageEdit from './pages/mypage/myPageEdit';
import mypageStatus from './pages/mypage/mypageStatus';
import Use from './pages/about/Use';
import detailPage1 from './pages/detailPage1';
import SelfIntroduction from './pages/SelfIntroduction';
import myPageNotice from './pages/mypage/myPageNotice';
import Open from './pages/circle/Open';
import myPageIntroduction from './pages/mypage/myPageIntroduction';
import CircleOpenSuccess from './pages/circle/CircleOpenSuccess';
import CircleOpenApproval from './pages/circle/CircleOpenApproval';
import CircleOpenReject from './pages/circle/CircleOpenReject';
import ListSubject from './pages/list/ListSubject';
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
            <Route exact path="/rt" component={RedirectTest} />{' '}
            {/* 리다이렉트 방법*/}
            {/* <Route exact path="/list/academy" component={ListAcademy} />
            <Route exact path="/list/art" component={ListArt} />
            <Route exact path="/list/networking" component={ListNetworking} />
            <Route exact path="/list/sports" component={ListSports} />
            <Route exact path="/list/travel" component={ListTravel} />
            <Route exact path="/list/religion" component={ListReligion} />
            <Route exact path="/list/volunteer" component={ListVolunteer} />
            <Route exact path="/list/etc" component={ListETC} />
            <Route exact path="/list/학술/1" component={detailPage1} /> */}
            <Route exact path="/mypage" component={mypage} />
            <Route exact path="/mypage/edit" component={myPageEdit} />
            <Route exact path="/mypage/status" component={mypageStatus} />
            <Route
              exact
              path="/mypage/introduction"
              component={SelfIntroduction}
            />
            <Route exact path="/about/use" component={Use}></Route>
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
            <Route exact path="/list" component={List} />
            <Route path="/list/:subject" component={ListSubject} />
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
              path="/list/:subject/:circle_id"
              component={Circle}
            ></Route>
            <Route
              exact
              path="/list/:subject/:circle_id/detail"
              component={CircleDetail}
            ></Route>
            <Route
              exact
              path="/mypage/introduction"
              component={SelfIntroduction}
            />
            <Route exact path="/about/Use" component={Use}></Route>
            <Route exact path="/circle/Open" component={Open}></Route>
            {/* <Route
              exact
              path="/mypage/introduction"
              component={SelfIntroduction}
            /> */}
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
