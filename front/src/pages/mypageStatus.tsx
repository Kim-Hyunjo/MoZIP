import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import React, {  useState } from "react";

const mypageStatus = () => { 
  const personalClublist = [{name: "~나의 동아리~", introduction:"~동아리의 상세설명~", position:"운영진"},{name: "~나의동아리2~", introduction:"~동아리의 상세설명2~", position:"회원"}]
  
  return(
    <div>
      <div id="namecard">
        동아리 모집 현황
      </div>
    </div>
  )
    
}

export default mypageStatus