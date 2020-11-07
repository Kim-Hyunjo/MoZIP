import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import './App.css';
import NotFound from './error/NotFound';
import Home from './Test/home';
import RedirectTest from './Test/RedirectTest';
import Test from './Test/Test';
import TestList from './Test/TestList';
import ListPage1 from './pages/ListPage1';
import ListPage2 from './pages/ListPage2';
import ListPage3 from './pages/ListPage3';
import ListPage4 from './pages/ListPage4';
import ListPage5 from './pages/ListPage5';
import ListPage6 from './pages/ListPage6';
import ListPage7 from './pages/ListPage7';
import detailPage1 from './pages/detailPage1';
import SelfIntroduction from './pages/SelfIntroduction';
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>여기는 헤더</h1>
          <nav>
            <ul>
              {/* <li><Link to="/">Index</Link></li>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/intro">Intro</Link></li> */}
              {/* NavLink를 이용하면 다이나믹 스타일 적용가능 */}
              <li><NavLink exact={true} activeStyle={{ fontSize: 24 }} to="/">Index</NavLink></li>
              <li><NavLink activeStyle={{ fontSize: 24 }} to="/home">Home</NavLink></li>
              <li><NavLink activeStyle={{ fontSize: 24 }} to="/intro">Intro</NavLink></li>
            </ul>
          </nav>
        </header>
        <hr />
        <h1>여기는 바디</h1>
        <Switch>
          <Route exact={true} path="/" render={() => <h3>Index</h3>} />
          <Route exact={true} path="/home" component={Home} />
          <Route path="/intro" render={() => <h3>소개</h3>} />
          <Route path="/posts" component={TestList} />
          <Route path="/rt" component={RedirectTest} /> {/* 리다이렉트 방법*/}
          <Route exact path="/list/전체" component={ListPage1}/>
  <Route exact path="/list/학술" component={ListPage2}/>
  <Route exact path="/list/예술" component={ListPage3}/>
  <Route exact path="/list/친목" component={ListPage4}/>
  <Route exact path="/list/스포츠" component={ListPage5}/>
  <Route exact path="/list/여행" component={ListPage6}/>
  <Route exact path="/list/봉사" component={ListPage7}/>
  <Route exact path="/list/학술/1" component={detailPage1}/>
  <Route exact path="/자기소개함" component={SelfIntroduction} />
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
