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
        <div className="circleMembers">
            <div><h2>운영진수정</h2>
                <h4>
                내 동아리의 운영진 명단을 수정해보세요.<br></br>
                동아리 부원 권한 단계는 소유자(회장), 관리자(운영진), 회원 총 3가지입니다. <br></br>
                Owner의 경우 명칭만 변경 가능하며, 1명으로 고정되어있습니다. 권한을 넘김으로써 회장을 변경할 수 있습니다.<br></br>            
                Manager의 경우 명칭을 변경할 수 있으며 직책의 수를 변경할 수 있습니다. 직책 및 인원 추가를 통해 변경 
                가능합니다.<br></br>
                구체적인 내용은 guide 페이지에서 확인하실 수 있습니다.
                </h4>
            </div>
            <div className="members_title">운영진</div>
            <div>
                <ul className="membersKind">
                    <li>회장</li>
                    <li>부회장</li>
                    <li>기술처</li>
                    <li>회계</li>
                    <li><button id = "button_plus" type="button">+</button></li>
                </ul>
            </div>
            <div>
                <div className="role">
                    <div className="roleName">회장 (owner)</div>
                    <a className="changeOwner" href="#">권한 넘기기</a>
                </div>
                <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회장</div><span>프로필 사진</span></div>
            </div>
            <div>
                <div className="role">
                    <div className="roleName">부회장 (관리자)</div>
                    <a className="changeOwner" href="#">인원 추가</a>
                </div>
                <div className="user_namecard_edit"><div className="user_name">박웅기</div><button id="button_x" type="button">x</button><div className="user_role">부회장</div><span>프로필 사진</span></div>
            </div>
            <div>
                 <div className="role"> 
                    <div className="roleName">기술처 (관리자)</div>
                    <a className="changeOwner" href="#">인원 추가</a>
                </div>
                <div className="user_namecard_edit"><div className="user_name">왕희도</div><button id="button_x" type="button">x</button><div className="user_role">기술</div><span>프로필 사진</span></div>
                <div className="user_namecard_edit"><div className="user_name">왕희도</div><button id="button_x" type="button">x</button><div className="user_role">기술</div><span>프로필 사진</span></div>
                <div className="user_namecard_edit"><div className="user_name">왕희도</div><button id="button_x" type="button">x</button><div className="user_role">기술</div><span>프로필 사진</span></div>
                <div className="user_namecard_edit"><div className="user_name">왕희도</div><button id="button_x" type="button">x</button><div className="user_role">기술</div><span>프로필 사진</span></div>
                <div className="user_namecard_edit"><div className="user_name">왕희도</div><button id="button_x" type="button">x</button><div className="user_role">기술</div><span>프로필 사진</span></div>
            </div>
            <button id="button4" type="submit">완료</button>
        </div>
    )
}

export default CircleMembersEdit
