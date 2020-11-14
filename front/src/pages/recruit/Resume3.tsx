import React from 'react'

const Resume3 = () => {
    return (
        <div>
            <div>
                <h2>면접관 조 관리</h2>
                <p>면접관, 면접 시간, 면접 그룹, 면접 일시 등을 지정해보세요. 아래 정보를 입력해 자동으로 면접 조를 짜보세요.</p>

                <form action=""></form>
                <div>
                    <h3>면접 인원 관리</h3>
                    <label htmlFor="">한 그룹 당 지원자 인원 : 
                    </label>
                    <input type="select"/>
                    <label htmlFor="">한 그룹 당 면접관 인원 : 
                    </label>
                    <input type="select"/>
                    <label htmlFor="">한 그룹 당 면접 시간 : 25분
                    </label>
                </div>
                <div>
                    <h3>면접 일시</h3>
                     <input type="checkbox" name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} />시~<input type="select"maxLength={2} />시
                     <input type="checkbox" name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} />시~<input type="select"maxLength={2} />시
                     <input type="checkbox" name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} />시~<input type="select"maxLength={2} />시
                </div>
                <div>
                    <h3>면접 가능한 운영진</h3>
                    <p>
                                            면접 가능한 운영진의 개인 일정에 따라 면접 가능한 시간을 설정해놓고 
                        아래 "현재 상태로 면접 그룹 나누기" 버튼을 누르시면 자동으로 면접 조가 
                        배정이 됩니다.
                    </p>
                    <div>
                        <ul>
                            <li>
                                <h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button>
                            </li>
                            <li><h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button></li>
                            <li><h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button></li>
                            <li><h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button></li>
                            <li><h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button></li>
                            <li><h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button></li>
                            <li><h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button></li>
                            <li><h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button></li>
                            <li><h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button></li>
                            <li><h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button></li>
                            <li><h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button></li>
                            <li><h4>최우영</h4>
                                <span>선택완료</span>
                                <button>시간선택</button></li>
                        </ul>
                        <button>수정</button>
                        <button>저장</button>
                    </div>
                    <button>면접 그룹 나누기</button>
                </div>
                <div>
                    <h3>면접 조 결과</h3>
                    <ul>
                        <li>
                            <strong>1조</strong><span>총 12명</span><p>7월 10일 오후 4
                                ~7시
                            </p>
                        </li>
                        <li>
                            <strong>1조</strong><span>총 12명</span><p>7월 10일 오후 4
                                ~7시
                            </p>
                        </li>
                        <li>
                            <strong>1조</strong><span>총 12명</span><p>7월 10일 오후 4
                                ~7시
                            </p>
                        </li>
                        <li>
                            <strong>1조</strong><span>총 12명</span><p>7월 10일 오후 4
                                ~7시
                            </p>
                        </li>
                    </ul>
                    <button>자세히</button>
                    <button>임시저장</button>
                </div>
                <div>
                    <h3>남은 인원: 0명</h3>
                    <p>남은 인원은 '자세히'에 들어가 직접 시간을 지정해주세요.</p>
                </div>
            </div>
            <button>면접 그룹 등록하기</button>
        </div>
    )
}

export default Resume3
