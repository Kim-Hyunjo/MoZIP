import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, {  useState } from "react";

const ListTravel = () => {
    const test  = [{name:'학술'},{name:'예술'},{name: '친목'},{name: '스포츠'}, {name:'여행'},{ name:'종교'},{name:'봉사'}]


const 여행 = [{name: "여행", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}
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
                            <option key={index} value={item.name}>
                                {item.name}
                            </option>
                        )
                    })}            
                </select>
            </label>
        </div>  
        <div>
            <ul>
                <li><Link to="/list">전체</Link></li>
                <li><Link to="/list/academy">학술</Link></li>
                <li><Link to="/list/art">예술</Link></li>
                <li><Link to="/list/networking">친목</Link></li>
                <li><Link to="/list/sports">스포츠</Link></li>
                <li><Link to="/list/travel">여행</Link></li>
                <li><Link to="/list/religion">종교</Link></li>
                <li><Link to="/list/volunteer">봉사</Link></li>
                <li><Link to="/list/etc">기타</Link></li>
            </ul>
        </div>
        <div>
        {여행.map((item)=> {
                return(
                    <li style={{marginRight:'10px'}}><Link to="/list/travel"><h3>{item.name}</h3><p>{item.introduction}</p></Link></li>
                    )
                })}
        </div>
    </div>
   
    
    </>
    )
    
}

export default ListTravel