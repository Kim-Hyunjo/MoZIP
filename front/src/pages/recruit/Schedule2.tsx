import React from 'react'

const Schedule2 = () => {
    const  day = [{day:'1일차', date:'2020년 7월 10일', time:' 오후 4시~7시', site:'동국대학교',total:"총 16명"},
    {day:'1일차' ,date:'2020년 7월 12일', time:' 오후 4시~7시', site:'히히대학교',total:"총 12명"},
    {day:'1일차' ,date:'2020년 7월 13일', time:' 오후 5시~7시', site:'호호대학교',total:"총 12명"}]
    const schedule = [{date:"2020.10.03", count:'1일차'},{date:"2020.10.03", count:'2일차'},{date:"2020.10.03", count:'3일차'}];
    const appply = [{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},]
    const appply2 = [{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},]
    const appply3 = [{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},{time:"13:00",candidate:"한채은,한예송",manager:"최우영,왕희도"},]
    return (
        <div className="schedule">
            <div>
                <h2>면접 일정 관리하기</h2>
                <h4>면접 일정을 수정 및 정리해보세요.</h4>

                <div className="middle_title">면접 일정</div>
                <div>
                    <ul className ="scheduleAll">
                        {schedule.map((info)=>{
                            return(
                                <li className="scheduleDay">{info.date}<br></br><span>{info.count}</span></li>
                            )
                        })}
                    </ul>
                </div>
                <form action="">
                <div>
                <div className="display_horiz give_space_bottom">
                    <div className="interviewDayInform">
                        <span>{day[0].day}</span>
                        <button id="button1">수정하기</button>
                        <div className="tiny_gray_namecard">
                            날짜 : {day[0].date}<br></br>
                            시간 : {day[0].time}<br></br>
                            위치 : {day[0].site}<br></br>
                            인원 : {day[0].total}<br></br>
                        </div>
                    </div>
                    <div className="intervieweeInform">
                        <div className="display_horiz interview_group_wrap"><h3>조별 대상자</h3>
                        <span>총 16명</span>
                        <button id="button1">수정하기</button></div>
                        <ul className="intervieweeGroup">
                            {appply.map((info)=>{
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
                            <h3>조별 대상자</h3>
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
                            <h3>조별 대상자</h3>
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
                    </div>
                    </div>
                </div>
                <div className="interview_leftover">
                    <h2>남은 인원:</h2>
                    <div>
                    <div className="tiny_gray_namecard display_horiz2">
                        <h4>박웅기</h4>
                            <span>
                                회원
                            </span>
                            <div>프로필 사진</div>
                    </div>
                    <div className="tiny_gray_namecard display_horiz2">
                        <h4>박웅기</h4>
                            <span>
                                회원
                            </span>
                            <div>프로필 사진</div>
                    </div>
                    <div className="tiny_gray_namecard display_horiz2">
                        <h4>박웅기</h4>
                            <span>
                                회원
                            </span>
                            <div>프로필 사진</div>
                    </div>
                    <div className="tiny_gray_namecard display_horiz2">
                        <h4>박웅기</h4>
                            <span>
                                회원
                            </span>
                            <div>프로필 사진</div>
                    </div>
                    <div className="tiny_gray_namecard display_horiz2">
                        <h4>박웅기</h4>
                            <span>
                                회원
                            </span>
                            <div>프로필 사진</div>
                    </div>
                    <div className="tiny_gray_namecard display_horiz2">
                        <h4>박웅기</h4>
                            <span>
                                회원
                            </span>
                            <div>프로필 사진</div>
                    </div>
                    <div className="tiny_gray_namecard display_horiz2">
                        <h4>박웅기</h4>
                            <span>
                                회원
                            </span>
                            <div>프로필 사진</div>
                    </div>
                    </div>
                </div>
                <div className="interview_btns5">
                    <button id="button5W" >돌아가기</button>
                    <button id="button5B" >저장</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Schedule2
