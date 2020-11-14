import React from 'react'

const Resume2 = () => {
    return (
        <div>
            <div>
                <h2>지원자 지원서 정보</h2>
                <span>지원자의 정보 및 자기소개서를 확인해보세요. </span>
            </div>

            <h3>한채은</h3>
            <span>점수 총점 : 10점</span>
            <div>
                <h3>한채은</h3>
                <span>프로필 사진</span>
                <ul>
                    <li><span>한채은</span></li>
                    <li><span>테이브 대학교 3학년</span></li>
                    <li><span>2001.07.07</span></li>
                    <li><span>010-0000-0000</span></li>
                    <li><span>tave._.wave@naver.com</span></li>
                    <li><span>서울시 강남구</span></li>
                </ul>
            </div>
            <div>
                <h3>자기소개서</h3>
                <form action="">
                <ul>
                 <li><h4>우리 동아리에 지원하게 된 동기를 말씀해 주세요.</h4>
                <span>TAVE가 킹왕짱이기 때문입니다.</span>
                <label htmlFor=""></label>
                <input type="number" min={10} max ={100}/>
                <button>저장</button></li>
                <li><h4>우리 동아리에 지원하게 된 동기를 말씀해 주세요.</h4>
                <span>TAVE가 킹왕짱이기 때문입니다.</span>
                <label htmlFor=""></label>
                <input type="number" min={10} max ={100}/>
                <button>저장</button></li>
                <li><h4>우리 동아리에 지원하게 된 동기를 말씀해 주세요.</h4>
                <span>TAVE가 킹왕짱이기 때문입니다.</span>
                <label htmlFor=""></label>
                <input type="number" min={10} max ={100}/>
                <button>저장</button></li>
                <li><h4>우리 동아리에 지원하게 된 동기를 말씀해 주세요.</h4>
                <span>TAVE가 킹왕짱이기 때문입니다.</span>
                <label htmlFor=""></label>
                <input type="number" min={10} max ={100}/>
                <button>저장</button></li>
                </ul>
                </form>
            </div>
        </div>
    )
}

export default Resume2
