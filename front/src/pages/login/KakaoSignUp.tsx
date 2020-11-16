import React, { Component } from 'react';
import styled from 'styled-components';
// import { StyledText } from '../style';
import Axios from 'axios';
import KaKaoLogin from 'react-kakao-login';

interface State {
  data: any;
}

class KakaoSignUp extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: 'kakao',
    };
  }

  responseKaKao = async (res: any) => {
    this.setState({
      data: res,
    });
    const semi_email = JSON.stringify(
      this.state.data.profile.kakao_account.email,
    );
    const _email = semi_email.replace(/^"+|"+$/g, '');

    const semi_age = JSON.stringify(
      this.state.data.profile.kakao_account.age_range[0],
    );
    const s_age = semi_age.replace(/^"+|"+$/g, '');
    const _age = parseInt(s_age);

    // try {
    //   alert(JSON.stringify(this.state.data.profile.id));
    //   const response = await Axios({
    //     method: 'get',
    //     url: `${_url}/api/user_exist/${JSON.stringify(
    //       this.state.data.profile.id,
    //     )}/`,
    //     responseType: 'json',
    //   });
    //   const msg: string = JSON.stringify(response.data.message);

    //   if (msg == 'true') {
    //     alert('로그인되었습니다');
    //   } else {
    //     try {
    //       const signup_response = await axios({
    //         method: 'post',
    //         url: `${_url}/api/user_list/`,
    //         data: {
    //           password: 1234,
    //           email: _email,
    //           kakao_id: JSON.stringify(this.state.data.profile.id),
    //           nickname: JSON.stringify(
    //             this.state.data.profile.properties.nickname,
    //           ),
    //           image: JSON.stringify(
    //             this.state.data.profile.properties.profile_image,
    //           ),
    //           ages: _age,
    //         },
    //         responseType: 'json',
    //       });
    //       alert(signup_response);
    //     } catch (err) {
    //       sessionStorage.clear();
    //       alert(err);
    //     }
    //   }
    // } catch (err) {
    //   sessionStorage.clear();
    //   alert(err);
    // }
  };

  // responseKaKao = (res: any) => {
  //   this.setState({
  //     data: res,
  //   });
  //   alert(JSON.stringify(this.state.data));
  //   console.log(JSON.stringify(this.state.data));
  // };

  responseFail = (err: any) => {
    alert(err);
  };

  render() {
    return (
      <div>
        <h1>로그인</h1>
        {/* <StKaKaoLogin>
                        <img src={img} alt="a" onClick={this.loginWithKakao} />
                    </StKaKaoLogin> */}
        <br></br>
        <div>
          <KaKaoBtn
            token={'68e1890c86abef0b895c50c05679908a'}
            // buttonText="KaKao"
            needProfile={true}
            onSuccess={this.responseKaKao}
            onFail={this.responseFail}
            key={'68e1890c86abef0b895c50c05679908a'}
            // getProfile={true}
          />
        </div>
      </div>
    );
  }
}
const StKaKaoLogin = styled.div`
  cursor: pointer;
  /* border-radius:10px; */
  /* width: 200px; */
  /* &:hover{
        box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
    } */
`;

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
