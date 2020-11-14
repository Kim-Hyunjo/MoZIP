import React from 'react';
import './resume.css';

const Resume = () => {
    return (
        <div className="resume">
            <h2>지원자 목록</h2>
                <form action="">
                    <label htmlFor=""></label>
                    <button id="button4">통계 보기</button>
                    <div className="stateBox">
                        <ul className="states">
                            <li><div className="stateName">전체</div></li>
                            <li><div className="stateName">미결정</div></li>
                            <li><div className="stateName">합격</div></li>
                            <li><div className="stateName">불합격</div></li>
                            <li><div className="stateName">보류</div></li>
                        </ul>

                        <div className="stateUsers">총 100명</div>
                        <ul className = "horizontal_people_list">
                            <li>
                                <label htmlFor=""></label>
                                <input type="checkbox"/>
                                <span className="personalName">한채은</span>
                                <span className="personalTime">1조 13:00</span>
                                <div className="rightSide">
                                    <span className="personalScore"> 점수 :10점</span>
                                    <strong id="skip">보류</strong>   
                                    <button id ="button1">상세보기</button>
                                </div>
                            </li>
                            <li>
                                <label htmlFor=""></label>
                                <input type="checkbox"/>
                                <span className="personalName">한채은</span>
                                <span className="personalTime">1조 13:00</span>
                                <div className="rightSide">
                                    <span className="personalScore"> 점수 :10점</span>
                                    <strong id="skip">보류</strong>   
                                    <button id ="button1">상세보기</button>
                                </div>
                            </li>
                            <li>
                                <label htmlFor=""></label>
                                <input type="checkbox"/>
                                <span className="personalName">한채은</span>
                                <span className="personalTime">1조 13:00</span>
                                <div className="rightSide">
                                    <span className="personalScore"> 점수 :10점</span>
                                    <strong id="skip">보류</strong>   
                                    <button id ="button1">상세보기</button>
                                </div>
                            </li>
                            <li>
                                <label htmlFor=""></label>
                                <input type="checkbox"/>
                                <span className="personalName">한채은</span>
                                <span className="personalTime">1조 13:00</span>
                                <div className="rightSide">
                                    <span className="personalScore"> 점수 :10점</span>
                                    <strong id="skip">보류</strong>   
                                    <button id ="button1">상세보기</button>
                                </div>
                            </li>
                            <li>
                                <label htmlFor=""></label>
                                <input type="checkbox"/>
                                <span className="personalName">한채은</span>
                                <span className="personalTime">1조 13:00</span>
                                <div className="rightSide">
                                    <span className="personalScore"> 점수 :10점</span>
                                    <strong id="skip">보류</strong>   
                                    <button id ="button1">상세보기</button>
                                </div>
                            </li>
                        </ul>
                        <div className = "changeButtons">
                            *선택한 후 아래 버튼을 누르면 해당 인원이 이동합니다.
                            <div className ="changeButton3">
                                <button id="skipButt">보류</button>
                                <button id="outButt">불합격</button>
                                <button id="inButt">합격</button>
                            </div>
                        </div>
                    </div>
                    
                </form>
                <div><button id="button_red">면접 일정 관리</button></div>
        </div>
    )
}

export default Resume
