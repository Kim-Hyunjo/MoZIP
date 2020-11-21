import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

const ListAll = () => {
  const [test, setSubject] = useState([
    { name: '전체' },
    { name: '학술' },
    { name: '예술' },
    { name: '친목' },
    { name: '스포츠' },
    { name: '여행' },
    { name: '종교' },
    { name: '봉사' },
  ]);

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

  const handlerSubject = (e: any) => {};

  return (
    <div>
      <div>
        <h2>전체 동아리 목록</h2>
        <p>MOZIP에 등록된 전체 동아리 목록을 확인해보세요.</p>
        <div>
          <label>
            <select id="list-name">
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
          <ul id="horizontal_list">
            <li>
              <Link to="/list" >전체</Link>
            </li>
            <li>
              <Link to="/list/academy">학술</Link>
            </li>
            <li>
              <Link to="/list/art">예술</Link>
            </li>
            <li>
              <Link to="/list/networking">친목</Link>
            </li>
            <li>
              <Link to="/list/sports">스포츠</Link>
            </li>
            <li>
              <Link to="/list/travel">여행</Link>
            </li>
            <li>
              <Link to="/list/religion">종교</Link>
            </li>
            <li>
              <Link to="/list/volunteer">봉사</Link>
            </li>
            <li>
              <Link to="/list/etc">기타</Link>
            </li>
          </ul>
        </div>
        <div className="club_list">
          <ul id="horizontal_club_list">
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
            {예술.map((item) => {
              return (
                <li>
                  <Link to="/list/전체/1">
                    <h3>{item.name}</h3>
                    <p>{item.introduction}</p>
                  </Link>
                </li>
              );
            })}
            {친목.map((item) => {
              return (
                <li>
                  <Link to="/list/전체/1">
                    <h3>{item.name}</h3>
                    <p>{item.introduction}</p>
                  </Link>
                </li>
              );
            })}
            {스포츠.map((item) => {
              return (
                <li>
                  <Link to="/list/전체/1">
                    <h3>{item.name}</h3>
                    <p>{item.introduction}</p>
                  </Link>
                </li>
              );
            })}
            {여행.map((item) => {
              return (
                <li>
                  <Link to="/list/전체/1">
                    <h3>{item.name}</h3>
                    <p>{item.introduction}</p>
                  </Link>
                </li>
              );
            })}
            {종교.map((item) => {
              return (
                <li>
                  <Link to="/list/전체/1">
                    <h3>{item.name}</h3>
                    <p>{item.introduction}</p>
                  </Link>
                </li>
              );
            })}
            {봉사.map((item) => {
              return (
                <li>
                  <Link to="/list/전체/1">
                    <h3>{item.name}</h3>
                    <p>{item.introduction}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListAll;
