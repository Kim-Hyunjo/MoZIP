import React from 'react'

const Apply = () => {
    return (
        <div>
            <div><h2>Tave 지원하기</h2></div>
            <div>
                <h3>지원 전 공지사항</h3>
                <p>- ㅇㅇㅇ의 활동 기간은 2020년11월부터 2021년 2월까지입니다. 만약, 이 기간내에 졸업을 예정하고 계신다면 아쉽지만 활동이 불가능합니다.

                    - 코로나 19 사태로 인하여 정부의 사회적 거리두기 정책에 따라  면접은 전체 온라인으로 진행됩니다. 면접 시간에 대한 자세한 사항은 서류 합격자 대상으로 재공지 드리겠습니다.

                    - 활동 회비는 최종 합격자 대상으로 첫 모임때에 공지됩니다.

                    ※ 프론티어란? ㅇㅇㅇ 7기를 이끌어가는 리더를 양성하는 과정으로 소정 기간의 교육을 통해 7기의 전체 운영을 담당하게 됩니다.

                    ※ 기타 문의 사항 : 플러스 친구 추가 후 문의( http://pf.kakao.com/_abcdef )</p>
            </div>
            <div>
            <form>
                <label htmlFor=""></label>
                <input type="checkbox" name="agreement" value="notification"/>
                <span>본 공지사항을 모두 읽었으며 동의합니다.</span>
            </form>
            <button type="submit">다음</button>
            </div>
        </div>
    )
}

export default Apply
