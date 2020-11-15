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
        <div>
            <div>
                <h2>면접 일정 관리하기</h2>
                <p>면접 일정을 수정 및 정리해보세요.</p>

                <h3>면접 일정</h3>
                <div>
                    <ul>
                        {schedule.map((info)=>{
                            return(
                                <li>{info.date}<span>{info.count}</span></li>
                            )
                        })}
                    </ul>
                </div>
                <form action="">
                <div>
                    <div><strong>{day[0].day}</strong>
                    <button>수정하기</button>
                    <p>{day[0].date}
                    {day[0].time}
                    {day[0].site}
                    {day[0].total}</p>
                    </div>
                    <div>
                        <h3>1조 대상자</h3>
                        <span>총 16명</span>
                        <button>수정하기</button>
                        <ul>
                            {appply.map((info)=>{
                                return(
                                    <li>{info.time}<span>{info.candidate}</span><em>{info.manager}</em><strong>{info.candidate}</strong></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div><strong>{day[1].day}</strong>
                    <button>수정하기</button>
                    <p>{day[1].date}
                    {day[1].time}
                    {day[1].site}
                    {day[1].total}</p>
                    </div>
                    <div>
                        <h3>2조 대상자</h3>
                        <span>총 12명</span>
                        <button>수정하기</button>
                        <ul>
                            {appply2.map((info)=>{
                                return(
                                    <li>{info.time}<span>{info.candidate}</span><em>{info.manager}</em><strong>{info.candidate}</strong></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div><strong>{day[2].day}</strong>
                    <button>수정하기</button>
                    <p>{day[2].date}
                    {day[2].time}
                    {day[2].site}
                    {day[2].total}</p>
                    </div>
                    <div>
                        <h3>3조 대상자</h3>
                        <span>총 12명</span>
                        <button>수정하기</button>
                        <ul>
                            {appply3.map((info)=>{
                                return(
                                    <li>{info.time}<span>{info.candidate}</span><em>{info.manager}</em><strong>{info.candidate}</strong></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>남은 인원:</h3>
                    <div>
                        <h4>박웅기</h4>
                            <span>
                                회원
                            </span>
                            <div>프로필 사진</div>
                    </div>
                </div>
                <button>돌아가기</button>
                <button>저장</button>
                </form>
            </div>
        </div>
    )
}

export default Schedule2
