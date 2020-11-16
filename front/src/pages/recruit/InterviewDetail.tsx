import React from 'react'

const InterviewDetail = () => {
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
                <h2>면접 자세히</h2>
                <h4>면접 조 세부 내용을 확인해보세요. "면접 보기" 버튼을 통해 면접 평가서로 이동할 수 있습니다.</h4>
                
                <form action="">
                <div>
                <div className="display_horiz give_space_bottom give_space_top">
                    <div className="interviewDayInform">
                        <span>{day[0].day}</span>
                        <div className="tiny_gray_namecard">
                            날짜 : {day[0].date}<br></br>
                            시간 : {day[0].time}<br></br>
                            위치 : {day[0].site}<br></br>
                            인원 : {day[0].total}<br></br>
                        </div>
                    </div>
                    <div className="intervieweeInform">
                        <div className="display_horiz interview_group_wrap"><h3>{day[0].day} 대상자</h3>
                        <span>총 16명</span></div>
                        <ul className="intervieweeGroup">
                            {appply.map((info)=>{
                                return(
                                    <li className="tiny_gray_namecard">
                                        {info.time}
                                        <span>{info.manager}</span>
                                        <div>{info.candidate}</div>
                                        <button id ="button4">면접보기</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="interview_btns5">
                    <button id="button5W" >돌아가기</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default InterviewDetail
