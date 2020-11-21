import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

const CircleMembers = () => {
    return (
        <div className="circleMembers">
            <div>
                <h2>회원 명단</h2>
                <h4>내 동아리의 부원 명단을 정리 및 확인해보세요.</h4>
             </div>
             <div className="membersSort">
                <div className="memberNum">총 160명</div>
                <Link to ="/list/:subject/:circle_id/members/edit"><button id="button3">운영진 수정</button></Link>
                <div className="members_title">운영진 및 동아리 부원</div>
               
                <ul className="membersKind">
                    <li>회장</li>
                    <li>기술처</li>
                    <li>회원</li>
                </ul>
            </div>
            <div>
                <div className="roleName">회장</div>
                <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회장</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
            </div>

            <div>
                <div className="roleName">기술처</div>
                <div className="user_namecard_list">
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">기술</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">기술</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">기술</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">기술</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">기술</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">기술</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">기술</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">기술</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                </div>
            </div>

            <div>
                <div className="roleName">회원</div>
                <div className="user_namecard_list">
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                    <div className="user_namecard"><div className="user_name">최우영</div><div className="user_role">회원</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></div>
                </div>
            </div>

        </div>
    )
}

export default CircleMembers
