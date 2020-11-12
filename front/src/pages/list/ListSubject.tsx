import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import Circle from '../circle/Circle';
import './tab.css';

const ListSubject = (props: RouteComponentProps<{ subject: string }>) => {
  const 학술 = [
    { id: '1', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '2', name: '학술', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '3', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '4', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '5', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '6', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '7', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '8', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '9', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  return (
    <div>
      <h1>{props.match.params.subject}</h1>
      <div className="club_list">
        <ul id="horizontal_club_list">
          {학술.map((item, index) => {
            return (
              <li>
                <Link to={`${props.match.url}/${item.id}`}>
                  <h3>{item.name}</h3>
                  <p>{item.introduction}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Route exact path="/list/:subject/:circle_id" component={Circle}></Route>
    </div>
  );
};

export default ListSubject;
