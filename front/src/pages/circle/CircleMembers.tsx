import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

const CircleMembers = () => {
    return (
        <div>
            <div>
                <h2>회원 명단</h2>
                <span>내 동아리의 부원 명단을 정리 및 확인해보세요.</span>
             </div>
             <div>
                <h3>총 160명</h3>
                <h4>운영진 및 동아리 부원</h4>
               
                <ul>
                    <li>회장</li>
                    <li>기술처</li>
                    <li>회원</li>
                </ul>
                <button>운영진 수정</button>
            </div>
            <div>
                <h2>회장</h2>
                <div><h3>최우영</h3><strong>회장</strong><span>프로필 사진</span></div>
            </div>

            <div>
                <h2>기술처</h2>
                <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
            </div>

            <div>
                <h2>기술처</h2>
                <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
            </div>
            <div>
                <h2>기술처</h2>
                <ul>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    

                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>

                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>

                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    <li><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span></li>
                    
                </ul>
            
            </div>

            </div>
    )
}

export default CircleMembers
