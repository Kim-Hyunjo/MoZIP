import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, {  useState } from "react";

const detailPage1 = () => {
    return (
        <>
        <div>
            <h2>Tave</h2>
            <h3>국내 최초 4차 산업 혁명 동아리</h3>
            <em>2017.06.30</em>
        </div>
        <div>
            <p>안녕하세요! 제 4차 산업혁명 연구 동아리 TAVE에서 6기 회원을 모집합니다.커리큘럼은 4차산업혁명 관련 세션과 스터디 그리고 프로젝트로, 4차 산업혁명에 관한 시야를 넓힐 수 있고 자신의 실력을 향상시킬 수 있도록 구성했습니다.또한 다양한 분야의 사람들과 교류하며 네트워크를 형성할 수 있습니다!전체 오프라인 모임은 한강 Ice Breaking, OT, 컨퍼런스 총3번 
진행되며 스터디 및 프로젝트 활동은 팀별로 소규모로 진행됩니다.
자세한 내용은 TAVE 카카오톡 플러스 친구를 통해 문의 바랍니다.</p>
        </div>
        <div>
            <h3>동아리원 후기와 FAQ를 보고 싶으면</h3>
            {/* 회원가입 링크 및 이미지 삽입 */}
            <span>지금 회원가입하기</span>
        </div>
        </>
    )
}

export default detailPage1
