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
import Apply from './pages/list/academy/Apply';
import Apply2 from './pages/list/academy/Apply2';
import Apply3 from './pages/list/academy/Apply3';
import Apply4 from './pages/list/academy/Apply4';
import Apply5 from './pages/list/academy/Apply5';

import ListApplySuccess from './pages/list/ListApplySuccess';
import ListApplyFail from './pages/list/ListApplyFail';
import login from './pages/login/login';
import sginup from './pages/login/signup';
import mypage from './pages/mypage/mypage';
import myPageEdit from './pages/mypage/myPageEdit';
import mypageStatus from './pages/mypage/mypageStatus';
import Use from './pages/about/Use';
import Open from './pages/circle/Open';
import detailPage1 from './pages/detailPage1';
import SelfIntroduction from './pages/SelfIntroduction';
import myPageNotice from './pages/mypage/myPageNotice';
import myPageIntroduction from './pages/mypage/myPageIntroduction';
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
                    Guide
                  </NavLink>
                  <ul className="sub">
                    <li>
                      <NavLink exact to="/">
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
            <Route exact path="/list" component={List} />
            <Route
              exact
              path="/list/apply/success"
              component={ListApplySuccess}
            />
            <Route exact path="/list/apply/fail" component={ListApplyFail} />
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
<<<<<<< HEAD

            <Route exact path="/mypage/introduction" component={SelfIntroduction} />
            <Route exact path="/about/Use" component ={Use}></Route>
            <Route exact path="/circle/Open" component ={Open}></Route>
            <Route exact path="/list/academy/{circleID}/apply" component ={Apply}></Route>
            <Route exact path="/list/academy/{circleID}/apply2" component ={Apply2}></Route>
            <Route exact path="/list/academy/{circleID}/apply3" component ={Apply3}></Route>
            <Route exact path="/list/academy/{circleID}/apply4" component ={Apply4}></Route>
            <Route exact path="/list/academy/{circleID}/apply5" component ={Apply5}></Route>
            
=======
            <Route exact path="/mypage/notice" component={myPageNotice} />
            <Route
              exact
              path="/mypage/introduction"
              component={myPageIntroduction}
            />
>>>>>>> develop
            <Route
              exact
              path="/mypage/introduction"
              component={SelfIntroduction}
            />
<<<<<<< HEAD
=======
            <Route exact path="/about/Use" component={Use}></Route>
            <Route exact path="/circle/Open" component={Open}></Route>
            <Route
              exact
              path="/list/academy/{circleID}/apply"
              component={Apply}
            ></Route>
            <Route
              exact
              path="/list/academy/{circleID}/apply2"
              component={Apply2}
            ></Route>
            <Route
              exact
              path="/list/academy/{circleID}/apply3"
              component={Apply3}
            ></Route>
            <Route
              exact
              path="/list/academy/{circleID}/apply4"
              component={Apply4}
            ></Route>
            <Route
              exact
              path="/list/academy/{circleID}/apply5"
              component={Apply5}
            ></Route>
>>>>>>> develop
            <Route exact path="/about/Use" component={Use}></Route>
            <Route exact path="/circle/Open" component={Open}></Route>
            <Route
              exact
              path="/mypage/introduction"
              component={SelfIntroduction}
            />
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
