import React, { Component, useState } from 'react';
import styled from 'styled-components';
// import { StyledText } from '../style';
import KaKaoLogin from 'react-kakao-login';

const KakaoSignUp = () => {
  const [data, setData] = useState<any>();

  const responseKaKao = (res: any) => {
    setData(res);
    const data1 = res.json();

    alert(JSON.stringify(res));
    console.log(JSON.stringify(res));
  };

  const responseFail = (err: any) => {
    alert(err);
  };

  return (
    <div>
      <h1>로그인</h1>
      <br></br>
      <div>
        <KaKaoBtn
          token={'68e1890c86abef0b895c50c05679908a'}
          needProfile={true}
          onSuccess={responseKaKao}
          onFail={responseFail}
          //   key={'68e1890c86abef0b895c50c05679908a'}
        />
      </div>
    </div>
  );
};

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default KakaoSignUp;
