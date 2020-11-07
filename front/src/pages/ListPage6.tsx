import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, {  useState } from "react";

const Listpage6 = () => {
    const test  = [{name:'학술'},{name:'예술'},{name: '친목'},{name: '스포츠'}, {name:'여행'},{ name:'종교'},{name:'봉사'}]


const 여행 = [{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}
,{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}]   

return(
       <>
            <div>
            <h2>전체 동아리 목록</h2>
            <p>MOZIP에 등록된 전체 동아리 목록을 확인해보세요.</p>
            <div>
            <label>
            <select id="list-name" >
            {test.map((item,index)=> { 

                return(
                <option key={index}
                value={item.name}>
                    {item.name}
                        </option>
                    )
            })}
                        
                        </select>
            </label>
        </div>  
        <div>
            <ul>
                <li><Link to="/list/전체">전체</Link></li>
                <li><Link to="/list/학술">학술</Link></li>
                <li><Link to="/list/예술">예술</Link></li>
                <li><Link to="/list/친목">친목</Link></li>
                <li><Link to="/list/스포츠">스포츠</Link></li>
                <li><Link to="/list/여행">여행</Link></li>
                <li><Link to="/list/봉사">봉사</Link></li>
            </ul>
        </div>
        <div>
        {여행.map((item)=> {
                return(
                    <li style={{marginRight:'10px'}}><Link to="/list/전체/1"><h3>{item.name}</h3><p>{item.introduction}</p></Link></li>
                    )
                })}
        </div>
    </div>
   
    
    </>
    )
    
}

export default Listpage6