import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Resume3 = () => {
    const manager = [{name:'최우영', select:'선택완료',timeSelect:'시간선택'},
    {name:'최우영', select:'선택완료',timeSelect:'시간선택'},
    {name:'최우영', select:'선택완료',timeSelect:'시간선택'},
    {name:'최우영', select:'선택완료',timeSelect:'시간선택'},
    {name:'최우영', select:'선택완료',timeSelect:'시간선택'},
    {name:'최우영', select:'선택완료',timeSelect:'시간선택'},
    {name:'최우영', select:'선택완료',timeSelect:'시간선택'},
    {name:'최우영', select:'선택완료',timeSelect:'시간선택'},
    {name:'최우영', select:'선택완료',timeSelect:'시간선택'},
    {name:'최우영', select:'선택완료',timeSelect:'시간선택'},
    {name:'최우영', select:'선택완료',timeSelect:'시간선택'},
    {name:'최우영', select:'선택완료',timeSelect:'시간선택'}]
    const division = [{group:'1조',date:'7월 10일', time:'오후 4~7시',total:'12'},{group:'2조',date:'7월 10일', time:'오후 4~7시',total:'12'},{group:'3조',date:'7월 10일', time:'오후 4~7시',total:'12'},{group:'4조',date:'7월 10일', time:'오후 4~7시',total:'12'},]
    return (
        <div className="resume">
            <div>
                <h2>면접관 조 관리</h2>
                <div className="small_title">면접관, 면접 시간, 면접 그룹, 면접 일시 등을 지정해보세요. 아래 정보를 입력해 자동으로 면접 조를 짜보세요.</div>

                <form action=""></form>
                <div className="setting">
                    <div className="title">면접 인원 관리</div>
                    <label htmlFor="">한 그룹 당 지원자 인원 : </label>
                    <input type="select"/> 명 <br></br>
                    <label htmlFor="">한 그룹 당 면접관 인원 : </label>
                    <input type="select"/> 명 <br></br>
                    <label htmlFor="">한 그룹 당 면접 시간 : 25분
                    </label>
                </div>
                <div className="setting">
                    <div className="title">면접 일시</div>
                     <div className="interviewDate"><input type="checkbox" name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} /> 시 ~<input type="select"maxLength={2} /> 시</div>
                     <div className="interviewDate"><input type="checkbox" name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} /> 시 ~<input type="select"maxLength={2} /> 시</div>
                     <div className="interviewDate"><input type="checkbox" name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} /> 시 ~<input type="select"maxLength={2} /> 시</div>
                </div>
                <div className="width1000">
                    <div className="title">면접 가능한 운영진</div>
                    <div className="extraInform">
                        면접 가능한 운영진의 개인 일정에 따라 면접 가능한 시간을 설정해놓고 <br></br>
                        아래 "현재 상태로 면접 그룹 나누기" 버튼을 누르시면 자동으로 면접 조가 배정이 됩니다.
                    </div>
                    <div>
                        <ul className="adminList">
                            {manager.map((info)=>{
                                return(
                                    <li className="tiny_gray_namecard">
                                     <div className="tiny_name">{info.name}</div>
                                    <div className="tiny_status">{info.select}</div>
                                    <Link to ="/recruit/schedule/management/staff">
                                    <button id="buttonSelect">{info.timeSelect}</button></Link>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="twoButtons">
                        <button id="button1_blue">저장</button>
                        <button id="button1">수정</button>
                    </div>
                    <button id="button10">면접 그룹 나누기</button>
                </div>
                <div>
                    <div className="title">면접 조 결과</div>
                    <ul>
                        {division.map((info)=>{
                            <li className="tiny_gray_namecard">
                             <div className="tiny_name">{info.group}</div>
                             <div className="tiny_status">총 {info.total}명</div>
                             <p>{info.date}<br></br>{info.time}
                             </p>
                         </li>
                        })}
                        
                    </ul>
                    <div className="twoButtons">
                        <button id="button1_blue">임시저장</button>
                        <Link to="/recruit/schedule/management/detail"><button id="button1">자세히</button></Link>
                    </div>
                </div>
                <div className="result">
                    <div className="title">남은 인원: 0명</div>
                    <p>남은 인원은 '자세히'에 들어가 직접 시간을 지정해주세요.</p>
                </div>
            </div>
            <Link to ="/recruit/resume"><button id="button_red">면접 그룹 등록하기</button></Link>
        </div>
    )
}

export default Resume3
