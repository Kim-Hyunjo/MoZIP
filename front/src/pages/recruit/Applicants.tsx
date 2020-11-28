import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

const Applicants = () => {
    return (
        <div className="applicants">
            <h2> 지원자 현황</h2>
            <div>
                <div className="memberNum">총 90명</div>
               
                <ul className="user_namecard_list">
                    <li className="user_namecard"><div className="user_name">최우영</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">박웅기</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">왕희도</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">햔채은</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">한예송</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>

                    <li className="user_namecard"><div className="user_name">최우영</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">박웅기</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">왕희도</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">햔채은</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">한예송</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>

                    <li className="user_namecard"><div className="user_name">최우영</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">박웅기</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">왕희도</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">햔채은</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                    <li className="user_namecard"><div className="user_name">한예송</div>
                    <div className="clubImage">
                        <img src="http://placehold.it/120x120" />
                    </div></li>
                </ul>
            </div>
            <Link to = "/mypage/status"><button id="button4">확인</button></Link>
        </div>
    )
}

export default Applicants
