import React from 'react'

const Schedule1 = () => {
    return (
        <div className = "schedule">
            <div>
                <h2>개인 면접 시간 관리하기</h2>
                <div className ="small_title">운영진 개인이 면접을 볼 수 있는 시간을 입력하여 편하게 면접관을 배정해보세요.</div>
            </div>
            <form action="">
            <div>
                <div className="middle_title">최우영</div>
                <div className="selectTime">
                    <div className="candidateTime">
                        <label htmlFor=""></label>
                        <input type="checkbox" name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} />시 ~<input type="select"maxLength={2} />시
                    </div>
                    <div className="candidateTime">
                        <label htmlFor=""></label>
                        <input type="checkbox" name="second" value="2020년 7월 19일 수요일"/><strong>2020년 7월 19일 수요일</strong><input type="select" maxLength={2} />시 ~<input type="select"maxLength={2} />시
                    </div>
                    <div className="candidateTime">
                        <label htmlFor=""></label>
                        <input type="checkbox" name="third" value="2020년 7월 20일 수요일"/><strong>2020년 7월 20일 수요일</strong><input type="select" maxLength={2} />시 ~<input type="select"maxLength={2} />시
                    </div>
                </div>
            </div>
            <button id ="button4">저장</button>
            </form>
        </div>
    )
}

export default Schedule1
