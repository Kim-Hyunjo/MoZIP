import React from 'react'

const Resume2 = () => {
    return (
        <div className="resume">
            <div>
                <h2>지원자 지원서 정보</h2>
                <div className = "small_title">지원자의 정보 및 자기소개서를 확인해보세요. </div>
            </div>
            <div className="personScore">점수 총점 : 10점</div>
            <div className="big_namecard">
                <span>프로필 사진</span>
                <div className="right_side">
                <ul>
                    <li className="name">한채은</li>
                    <li>테이브 대학교 3학년</li>
                    <li>2001.07.07</li>
                    <li>010-0000-0000</li>
                    <li>tave._.wave@naver.com</li>
                    <li>서울시 강남구</li>
                </ul>
                </div>
            </div>
            <div>
                <div className="title">자기소개서</div>
                <form action="">
                <ul>
                    <div className="small_gray_namecard">
                        <li>
                            <div className="resumeQuestion">우리 동아리에 지원하게 된 동기를 말씀해 주세요.</div>
                            <div className="resumeAnswer">TAVE가 킹왕짱이기 때문입니다.</div>
                            <label htmlFor=""></label>
                            <input type="number" min={0} max ={10}/>
                            <button id ="button4">저장</button>
                        </li>
                    </div>
                    <div className="small_gray_namecard">
                        <li>
                            <div className="resumeQuestion">우리 동아리에 지원하게 된 동기를 말씀해 주세요.</div>
                            <div className="resumeAnswer">TAVE가 킹왕짱이기 때문입니다.</div>
                            <label htmlFor=""></label>
                            <input type="number" min={0} max ={10}/>
                            <button id ="button4">저장</button>
                        </li>
                    </div>
                    <div className="small_gray_namecard">
                        <li>
                            <div className="resumeQuestion">우리 동아리에 지원하게 된 동기를 말씀해 주세요.</div>
                            <div className="resumeAnswer">TAVE가 킹왕짱이기 때문입니다.</div>
                            <label htmlFor=""></label>
                            <input type="number" min={0} max ={10}/>
                            <button id ="button4">저장</button>
                        </li>
                    </div>
                    <div className="small_gray_namecard">
                        <li>
                            <div className="resumeQuestion">우리 동아리에 지원하게 된 동기를 말씀해 주세요.</div>
                            <div className="resumeAnswer">TAVE가 킹왕짱이기 때문입니다.</div>
                            <label htmlFor=""></label>
                            <input type="number" min={0} max ={10}/>
                            <button id ="button4">저장</button>
                        </li>
                    </div>
                </ul>
                </form>
            </div>
        </div>
    )
}

export default Resume2
