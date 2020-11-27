import React, { useState, } from 'react'
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from 'react-router-dom';
// import Apply from '../list/apply/Apply';
import './recruit.css';

const Schedule2 = (props: RouteComponentProps<{}>) => {
    const [edit, setEdit] = useState<boolean>(false);
    // let _temp : boolean[];
    const day = [{ day: '1일차', date: '2020년 7월 10일', time: ' 오후 4시~7시', site: '동국대학교', total: "총 16명" },
    { day: '2일차', date: '2020년 7월 12일', time: ' 오후 4시~7시', site: '히히대학교', total: "총 12명" },
    { day: '3일차', date: '2020년 7월 13일', time: ' 오후 5시~7시', site: '호호대학교', total: "총 12명" }]
    const schedule = [{ date: "2020.10.03", count: '1일차' }, { date: "2020.10.03", count: '2일차' }, { date: "2020.10.03", count: '3일차' }];
    const apply = [{ time: "13:00", candidate: "한채은,한예송", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김철수,박철수", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김웅기,나웅기", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "이채은,김채은", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "홍길동,고길동", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "최희도,김희도", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김하연,권하연", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김동욱,양성봉", manager: "김스탭,권스탭" },]
    const appply2 = [{ time: "13:00", candidate: "한채은,한예송", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김철수,박철수", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김웅기,나웅기", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "이채은,김채은", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "홍길동,고길동", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "최희도,김희도", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김하연,권하연", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김동욱,양성봉", manager: "김스탭,권스탭" },]
    const appply3 = [{ time: "13:00", candidate: "한채은,한예송", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김철수,박철수", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김웅기,나웅기", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "이채은,김채은", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "홍길동,고길동", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "최희도,김희도", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김하연,권하연", manager: "김스탭,권스탭" }, { time: "13:00", candidate: "김동욱,양성봉", manager: "김스탭,권스탭" },]

    let dayInform;
    // const handleClick= async(event : Event)  => {
    //     setEdit(!edit);
    //     event.preventDefault();
    // }
    // if(!edit){
    //     dayInform = <div>
    //         <button onClick={() => handleClick} id="button1">수정하기</button>
    //         <div className="tiny_gray_namecard">
    //             날짜 : {day[0].date}<br></br>
    //             시간 : {day[0].time}<br></br>
    //             위치 : {day[0].site}<br></br>
    //             인원 : {day[0].total}<br></br>
    //         </div>
    //         </div>
    //     }else{
    //         dayInform = <div>
    //         <button onClick={() => handleClick} id="button1">저장하기</button>
    //         <div className="tiny_gray_namecard">
    //             날짜 : <input type="text" defaultValue={day[0].date}></input><br></br>
    //             시간 : <input type="text" defaultValue={day[0].time}></input><br></br>
    //             위치 : <input type="text" defaultValue={day[0].site}></input><br></br>
    //             인원 : <input type="text" defaultValue={day[0].total}></input><br></br>
    //         </div></div>
    //     }
    const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // _temp[0] = false;
        setEdit(!edit);
    }
    return (
        <div className="schedule">
            <div>
                <h2>면접 일정 관리하기</h2>
                <h4>면접 일정을 수정 및 정리해보세요.</h4>

                <div className="middle_title">면접 일정</div>
                <div>
                    <ul className="scheduleAll">
                        {schedule.map((info) => {
                            return (
                                <li className="scheduleDay">{info.date}<br></br><span>{info.count}</span></li>
                            )
                        })}
                    </ul>
                </div>
                <form action="">
                    <div className="display_vert">
                        <div className="give_space_bottom schedule_cards">
                            {edit ? (<button className="button_editscheduleinfo" onClick={(event) => handleEdit(event)} id="button1">저장하기</button>) : (<button className="button_editscheduleinfo" onClick={(event) => handleEdit(event)} id="button1">전체 일일정보 수정</button>)}
                            {day.map((item) => {
                                return (<div className="display_horiz give_space_bottom">
                                    <div className="interviewDayInform">
                                        <span>{item.day}</span>
                                        {edit ? (
                                            <div>
                                                <div className="tiny_gray_namecard tiny_gray_namecard_edit">
                                                    날짜 : <input type="text" defaultValue={item.date}></input><br></br>
                                시간 : <input type="text" defaultValue={item.time}></input><br></br>
                                위치 : <input type="text" defaultValue={item.site}></input><br></br>
                                인원 : <input type="text" defaultValue={item.total}></input><br></br>
                                                </div></div>
                                        ) : (
                                                <div>

                                                    <div className="tiny_gray_namecard ">
                                                        <div> 날짜 : {item.date}<br></br> </div>
                                                        <div> 시간 : {item.time}<br></br> </div>
                                                        <div> 위치 : {item.site}<br></br> </div>
                                                        <div> 인원 : {item.total}<br></br> </div>
                                                    </div>
                                                </div>
                                            )}
                                    </div>

                                    <div className="intervieweeInform">
                                        <div className="display_horiz interview_group_wrap"><h3>{item.day} 대상자</h3>
                                            <span>총 {apply.length}명</span>
                                            <button id="button1">수정하기</button></div>
                                        <ul className="intervieweeGroup">
                                            {apply.map((info) => {
                                                return (
                                                    <li className="tiny_gray_namecard">
                                                        {info.time}
                                                        <span>{info.manager}</span>
                                                        <div>{info.candidate}</div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div></div>)

                            })}


                        </div>

                        {/* <div className="display_horiz give_space_bottom">
                    <div className="interviewDayInform">
                        <span>{day[1].day}</span>
                        <button id="button1">수정하기</button>
                        <div className="tiny_gray_namecard">
                            날짜 : {day[1].date}<br></br>
                            시간 : {day[1].time}<br></br>
                            위치 : {day[1].site}<br></br>
                            인원 : {day[1].total}<br></br>
                        </div>
                    </div>
                    <div className="intervieweeInform">
                        <div className="display_horiz interview_group_wrap">
                            <h3>{day[1].day} 대상자</h3>
                            <span>총 12명</span>
                            <button id="button1">수정하기</button>
                        </div>
                        <ul className="intervieweeGroup">
                            {appply2.map((info)=>{
                                return(
                                    <li className="tiny_gray_namecard">
                                        {info.time}
                                        <span>{info.manager}</span>
                                        <div>{info.candidate}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    </div>

                    <div className="display_horiz give_space_bottom">
                    <div className="interviewDayInform">
                        <span>{day[2].day}</span>
                        <button id="button1">수정하기</button>
                        <div className="tiny_gray_namecard">
                            날짜 : {day[2].date}<br></br>
                            시간 : {day[2].time}<br></br>
                            위치 : {day[2].site}<br></br>
                            인원 : {day[2].total}<br></br>
                        </div>
                    </div>
                    <div className="intervieweeInform">
                        <div className="display_horiz interview_group_wrap">
                            <h3>{day[2].day} 대상자</h3>
                            <span>총 12명</span>
                            <button id="button1">수정하기</button>
                        </div>
                        <ul className="intervieweeGroup">
                            {appply3.map((info)=>{
                                return(
                                    <li className="tiny_gray_namecard">
                                        {info.time}
                                        <span>{info.manager}</span>
                                        <div>{info.candidate}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div> */}
                        {/* </div> */}
                    </div>
                    <div className="interview_leftover">
                        <h2>남은 인원:</h2>
                        <div>
                            <div className="tiny_gray_namecard display_horiz2">
                                <h4>김남음</h4>
                                <span>
                                    회원
                            </span>
                                <div className="clubImage">
                                    <img src="http://placehold.it/100x100" />
                                </div>
                            </div>
                            <div className="tiny_gray_namecard display_horiz2">
                                <h4>박남음</h4>
                                <span>
                                    회원
                            </span>
                                <div className="clubImage">
                                    <img src="http://placehold.it/100x100" />
                                </div>
                            </div>
                            <div className="tiny_gray_namecard display_horiz2">
                                <h4>이남음</h4>
                                <span>
                                    회원
                            </span>
                                <div className="clubImage">
                                    <img src="http://placehold.it/100x100" />
                                </div>
                            </div>
                            <div className="tiny_gray_namecard display_horiz2">
                                <h4>오남음</h4>
                                <span>
                                    회원
                            </span>
                                <div className="clubImage">
                                    <img src="http://placehold.it/100x100" />
                                </div>
                            </div>
                            <div className="tiny_gray_namecard display_horiz2">
                                <h4>권남음</h4>
                                <span>
                                    회원
                            </span>
                                <div className="clubImage">
                                    <img src="http://placehold.it/100x100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="interview_btns5">
                        <Link to="/recruit/schedule/management"><button id="button5W" >돌아가기</button></Link>
                        <Link to="/recruit/schedule/management"><button id="button5B" >저장</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Schedule2
