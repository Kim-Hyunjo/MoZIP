import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

const CircleMembersEdit = () => {
    return (
        <div>
            <div><h2>운영진수정</h2></div>
            <div>
                <p>
                내 동아리의 운영진 명단을 수정해보세요.

                동아리 부원 권한 단계는 소유자(회장), 관리자(운영진), 회원 총 3가지입니다. 
                Owner의 경우 명칭만 변경 가능하며, 1명으로 고정되어있습니다. 권한을 넘김으로써 회장을 변경할 수 있습니다.            
                Manager의 경우 명칭을 변경할 수 있으며 직책의 수를 변경할 수 있습니다. 직책 및 인원 추가를 통해 변경 
                가능합니다.
                구체적인 내용은 guide 페이지에서 확인하실 수 있습니다.
                </p>
            </div>
            <div><h3>운영진</h3></div>
            <div>
                <ul>
                    <li>회장</li>
                    <li>부회장</li>
                    <li>기술처</li>
                    <li>회계</li>
                    <button type="button">+</button>
                </ul>
            </div>
            <div>
                <h3>회장 (owner)</h3>
                <a href="#">권한 넘기기</a>
                <div><h3>최우영</h3><strong>회장</strong><span>프로필 사진</span></div>
            </div>
            <div>
                 <h3>부회장 (관리자)</h3>
                <a href="#">인원 추가</a>
                <div><h3>최우영</h3><strong>회장</strong><span>프로필 사진</span></div>
                <button type="button">x</button>
            </div>
            <div>
                 <h3> 기술처 (관리자)</h3>
                <a href="#">권한 추가</a>
                <div><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span><button type="button">x</button></div>
                <div><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span><button type="button">x</button></div>
                <div><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span><button type="button">x</button></div>
            </div>
            <button type="submit">완료</button>
        </div>
    )
}

export default CircleMembersEdit
