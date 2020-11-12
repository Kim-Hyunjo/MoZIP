import React,{useState} from 'react'
import './apply.css';

const Apply2 = () => {
    
    return (
        <>
        <div>
            <div><h2>Tave 지원하기</h2></div>
            <div>
                <div className="middle_title">지원서</div>
                <form action="">
                    <div className ="apply_questions">
                        <div className ="question_box">
                            <div className ="question"><label htmlFor="">TAVE에 지원한 동기를 알려주세요.</label></div>
                            <div><textarea name="" id="" cols={80}rows={5}></textarea></div>
                        </div>

                        <div className ="question_box">
                            <div className ="question"><label htmlFor="">4차 산업 혁명에 관심을 가지게 된 계기를 알려주세요.</label></div>
                            <div><textarea name="" id="" cols={80}rows={5}></textarea></div>
                        </div>

                        <div className ="question_box">
                            <div className ="question"><label htmlFor="">다룰 수 있는 언어를 선택해주세요.</label></div>
                            <div> 
                                <div className = "applyCheckbox"><input type="checkbox" name="Python" value="Python"/><span>Python</span></div>
                                <div className = "applyCheckbox"><input type="checkbox" name="C" value="C"/><span>C</span></div>
                                <div className = "applyCheckbox"><input type="checkbox" name="Java" value="Java"/><span>Java</span></div>
                            </div>
                        </div>

                        <div className ="question_box">
                            <div className ="question"><label htmlFor="">면접 가능 시간을 선택해 주세요.</label></div>
                            <div>
                                <div><input type="date"/><input type="select" maxLength={2} /> 시  ~<input type="select"maxLength={2} /> 시</div>
                                <div><input type="date"/><input type="select"maxLength={2} /> 시  ~<input type="select"maxLength={2} /> 시</div>
                                <div><input type="date"/><input type="select"maxLength={2}/> 시  ~<input type="select"maxLength={2} /> 시</div>
                            </div>
                        </div>

                        <div>
                        <form className="noticeConsent">
                            <label htmlFor=""></label>
                            <input type="checkbox"/><span>  해당 동아리에서 이름, 사진, 생년월일, 전화번호를 열람하는 것에 동의합니다.</span>
                        </form>
                        </div>
                    </div>
                </form>
                <div className="apply2Buttons">
                    <button id="button1" type="button">이전</button>
                    <button id="button1" type="button">저장</button>
                    <button id="button4" type="button">제출</button>
                </div>
            </div>
            <div className="resumeList">
                <div className="resumeList_header">자기소개함</div>
                <ul>
                    <li>지원 동기를 말씀해주세요<p>복사하기</p></li>
                    <li>지원 동기를 말씀해주세요<p>복사하기</p></li>
                    <li>지원 동기를 말씀해주세요<p>복사하기</p></li>
                    <li>지원 동기를 말씀해주세요<p>복사하기</p></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Apply2
