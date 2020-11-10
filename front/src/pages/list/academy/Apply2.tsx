import React,{useState} from 'react'

const Apply2 = () => {
    
    return (
        <>
        <div>
            <div><h2>Tave 지원하기</h2></div>
            <div>
                <h3>지원서</h3>
                <form action="">
                    <div>
                        <div><label htmlFor="">TAVE에 지원한 동기를 알려주세요.</label>
                        <textarea name="" id="" cols={80}rows={5}></textarea></div>
                        
                        <div><label htmlFor="">4차 산업 혁명에 관심을 가지게 된 계기를 알려주세요..</label>
                        <textarea name="" id="" cols={80}rows={5}></textarea></div>

                        <div>
                        <label htmlFor="">다룰 수 있는 언어를 선택해주세요.</label>
                        <input type="checkbox" name="Python" value="Python"/><span>Python</span>
                        <input type="checkbox" name="C" value="C"/><span>C</span>
                        <input type="checkbox" name="Java" value="Java"/><span>Java</span>
                        </div>

                        <div>
                        <label htmlFor="">면접 가능 시간을 선택해 주세요.</label>
                        <input type="date"/><input type="select" maxLength={2} />시~<input type="select"maxLength={2} />시
                        <input type="date"/><input type="select"maxLength={2} />시~<input type="select"maxLength={2} />시
                        <input type="date"/><input type="select"maxLength={2}/>시~<input type="select"maxLength={2} />시
                        </div>

                       <div>
                       <label htmlFor="">질문 5</label>
                        <input type="textarea"/>
                       </div>

                        <div>
                        <label htmlFor=""></label>
                        <input type="checkbox"/><span>해당 동아리에서 이름, 사진, 생년월일, 전화번호를 열람하는 것에 동의합니다.</span>
                        </div>
                    </div>
                </form>
                <button type="button">이전</button>
                <button type="button">저장</button>
                <button type="button">제출</button>
            </div>
            <div>
                <h2>자기소개함</h2>
                <ul>
                    <li><p>지원 동기를 
                    말씀해주세요</p></li>
                    <li><p>지원 동기를 
                    말씀해주세요</p></li>
                    <li><p>지원 동기를 
                    말씀해주세요</p></li>
                    <li><p>지원 동기를 
                    말씀해주세요</p></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Apply2
