import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import './App.css';
import NotFound from './error/NotFound';
import Home from './Test/home';
import RedirectTest from './Test/RedirectTest';
import Test from './Test/Test';
import TestList from './Test/TestList';
import ListAll from './pages/list/ListAll';
import ListAcademy from './pages/list/ListAcademy';
import ListArt from './pages/list/ListArt';
import ListNetworking from './pages/list/ListNetworking';
import ListSports from './pages/list/ListSports';
import ListTravel from './pages/list/ListTravel';
import ListReligion from './pages/list/ListReligion';
import ListVolunteer from './pages/list/ListVolunteer';
import ListETC from './pages/list/ListETC';

import login from './pages/login';
import sginup from './pages/signup';
import mypage from './pages/mypage';
import mypageStatus from './pages/mypageStatus';

import detailPage1 from './pages/detailPage1';
import SelfIntroduction from './pages/SelfIntroduction';
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <div id = "list">
              <ul>
                {/* <li><Link to="/">Index</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/intro">Intro</Link></li> */}
                {/* NavLink를 이용하면 다이나믹 스타일 적용가능 */}
                <li><NavLink exact to="/mypage">My Page</NavLink></li>
                <li><NavLink exact to="/list">List</NavLink></li>
                <li><NavLink exact to="/intro">Guide</NavLink></li>
                <li><NavLink exact={true} to="/home">Home</NavLink></li>
              </ul>
            </div>
          </nav>
        </header>
        <hr />
        <h1>여기는 바디</h1>
        <Switch>
          <Route exact={true} path="/home" component={Home} />
          <Route exact path="/" render={() => <h3>Index</h3>} />
          <Route exact path="/intro" render={() => <h3>소개</h3>} />
          <Route exact path="/posts" component={TestList} />
          <Route exact path="/rt" component={RedirectTest} /> {/* 리다이렉트 방법*/}
          <Route exact path="/list" component={ListAll}/>
          <Route exact path="/list/academy" component={ListAcademy}/>
          <Route exact path="/list/art" component={ListArt}/>
          <Route exact path="/list/networking" component={ListNetworking}/>
          <Route exact path="/list/sports" component={ListSports}/>
          <Route exact path="/list/travel" component={ListTravel}/>
          <Route exact path="/list/religion" component={ListReligion}/>
          <Route exact path="/list/volunteer" component={ListVolunteer}/>
          <Route exact path="/list/etc" component={ListETC}/>
          <Route exact path="/list/학술/1" component={detailPage1}/>
          
          <Route exact path="/mypage" component={mypage} />
          <Route exact path="/mypage/status" component={mypageStatus} />

          <Route exact path="/mypage/introduction" component={SelfIntroduction} />
          <Route component={NotFound} />
        </Switch>
        <hr />
        <footer>
          <h1>여기는 푸터</h1>
          <nav>
            <ul>
              <li><Link to="/">이용약관</Link></li>
              <li><Link to="/home">개인정보 처리방침</Link></li>
              <li><Link to="/intro">고객센터</Link></li>
            </ul>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Optio amet deserunt repudiandae,
              est reprehenderit unde culpa? Beatae,
              cum iste vel, non eaque inventore alias quo maiores vero,
              tenetur facilis quisquam?
            </div>
          </nav>
        </footer>
      </div>
    </Router>
  );
}


export default App;
