import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import React, { useState } from 'react';
import ListAcademy from './ListAcademy';
import ListSubject from './ListSubject';
import "./tab.css";

const List = (props: RouteComponentProps<{}>) => {
  const [subject, setSubject] = useState<string>('전체');
  const test = [
    { name: '전체' },
    { name: '학술' },
    { name: '예술' },
    { name: '친목' },
    { name: '스포츠' },
    { name: '여행' },
    { name: '종교' },
    { name: '봉사' },
  ];

  const 학술 = [
    { name: '학술', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 예술 = [
    { name: '예술', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 친목 = [
    { name: '친목', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 스포츠 = [
    { name: '스포츠', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 여행 = [
    { name: '여행', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 종교 = [
    { name: '종교', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 봉사 = [
    { name: '봉사', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 기타 = [
    { name: '기타', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  return (
    <Router>
      <div>
        <Route
          path={`${props.match.url}`}
          render={() => (
            <div>
              <h2>전체 동아리 목록</h2>
              <p>MOZIP에 등록된 전체 동아리 목록을 확인해보세요.</p>
              <div>
                <label>
                  <select
                    id="list-name"
                    defaultValue={subject}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    onBlur={(e) => setSubject(e.target.value)}
                  >
                    {test.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>
              <div>
                <div>{subject}</div>
                <ul id="horizontal_list">
                  {test.map((item) => {
                    return (
                      <Link
                        to={`${props.match.url}/${item.name}`}
                        onClick={() => {
                          setSubject(item.name);
                          console.log(item.name);
                        }}
                      >
                        
                        <li>
                          <div className = "border top_border"></div>
                          {item.name}
                          <div className = "border bottom_border"></div>
                        </li>
                        
                      </Link>
                    );
                  })}
                </ul>
              </div>
              <div className="club_list">
                {/* <ul id="horizontal_club_list">
                  {학술.map((item, index) => {
                    return (
                      <li>
                        <Link to="/list/학술/1">
                          <h3>{item.name}</h3>
                          <p>{item.introduction}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul> */}
              </div>
            </div>
          )}
        ></Route>
        <Route path={`${props.match.url}/:subject`} component={ListSubject} />
      </div>
    </Router>
  );
};

export default List;
