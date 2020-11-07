import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import React, {  useState } from "react";

const Listpage1 = () => {
    const [test,setSubject]  = useState([{name:'전체'},{name:'학술'},{name:'예술'},{name: '친목'},{name: '스포츠'}, {name:'여행'},{ name:'종교'},{name:'봉사'}])


const 학술 = [{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}
,{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}];
const 예술 = [{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}
,{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}]   

const 친목 = [{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}
,{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}]   

const 스포츠 = [{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}
,{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}]   

const 여행 = [{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}
,{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}]   

const 종교 = [{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}
,{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}]   

const 봉사 = [{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}
,{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"},{name: "Tave", introduction:"국내 최초 4차 산업혁명동아리"}]   

const handlerSubject =  (e:any) =>{
    
}


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
                value={item.name} onChange={handlerSubject}>
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
    </div>
   
    <div>
        <ul >
                {학술.map((item,index)=> {
                      
                return(
                    
                    <li style={{marginRight:'10px'}}><Link to="/list/학술/1"><h3>{item.name}</h3><p>{item.introduction}</p></Link></li>
                  
                    )
                })}
                {예술.map((item)=> {
                return(
                    <li style={{marginRight:'10px'}}><Link to="/list/전체/1"><h3>{item.name}</h3><p>{item.introduction}</p></Link></li>
                    )
                })}
                {친목.map((item)=> {
                return(
                    <li style={{marginRight:'10px'}}><Link to="/list/전체/1"><h3>{item.name}</h3><p>{item.introduction}</p></Link></li>
                    )
                })}
                {스포츠.map((item)=> {
                return(
                     <li style={{marginRight:'10px'}}><Link to="/list/전체/1"><h3>{item.name}</h3><p>{item.introduction}</p></Link></li>
                    )
                })}
                {여행.map((item)=> {
                return(
                     <li style={{marginRight:'10px'}}><Link to="/list/전체/1"><h3>{item.name}</h3><p>{item.introduction}</p></Link></li>
                    )
                })}
                {종교.map((item)=> {
                return(
                    <li style={{marginRight:'10px'}}><Link to="/list/전체/1"><h3>{item.name}</h3><p>{item.introduction}</p></Link></li>
                    )
                })}
                {봉사.map((item)=> {
                return(
                    <li style={{marginRight:'10px'}}><Link to="/list/전체/1"><h3>{item.name}</h3><p>{item.introduction}</p></Link></li>
                    )
                })}
           
         </ul>
    </div>
    
    </>
    )
    
}

export default Listpage1