import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

import person1 from '../images2/member1@2x.png';
import person2 from '../images2/member2@2x.png';
import person3 from '../images2/member3@2x.png';
import person4 from '../images2/member4@2x.png';
import person5 from '../images2/member5@2x.png';
import person6 from '../images2/member6@2x.png';
import person7 from '../images2/member7@2x.png';
import person8 from '../images2/member8@2x.png';
import person9 from '../images2/member9@2x.png';

const Applicants = () => {
    return (
        <div className="applicants">
            <h2> 지원자 현황</h2>
            <div>
                <div className="memberNum">총 90명</div>

                <ul className="user_namecard_list">
                    <li className="user_namecard"><div className="user_name">최우영</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person1}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">박웅기</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person5}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">왕희도</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person3}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">한채은</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person4}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">한예송</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person2}
                                alt='profile image' />
                        </div></li>

                    <li className="user_namecard"><div className="user_name">박은민</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person6}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">최지민</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person7}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">신현주</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person8}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">김가은</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person9}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">김철수</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person5}
                                alt='profile image' />
                        </div></li>

                    <li className="user_namecard"><div className="user_name">이민영</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person3}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">권연주</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person8}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">김민지</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person2}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">박지연</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person9}
                                alt='profile image' />
                        </div></li>
                    <li className="user_namecard"><div className="user_name">김가연</div>
                        <div className="clubImage">
                            <img
                                className="Image120"
                                src={person1}
                                alt='profile image' />
                        </div></li>
                </ul>
            </div>
            <Link to="/mypage/status"><button id="button4">확인</button></Link>
        </div>
    )
}

export default Applicants
