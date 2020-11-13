import React, {  useState, } from "react";
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import IntroductionInfoList from "../components/IntroductionInfoList";

const SelfIntroduction = (props:any) => {
    // let id:number =0;
    // const [name, setname]:any = useState('')
    // const [information, setinformation]:any = useState([])

    // const handleChange = (e:any) => {
    //     setname(e.target.value)
    // }
       
    // const handleCreate = (  e:any) =>{
    //     e.preventDefault()
    //     setinformation(information.concat(...name, id++))
    //     setname('')
    //   }
   
  
    
    return (
        <div> 
            <div>
                <h2>자기소개함</h2>
                <p>자기소개서 질문과 답변을 미리 준비해보세요.</p>
            </div>
            <div>
                <h2>1.우리동아리에 지원하게 된 동기를 말씀해주세요.</h2>
                {/* <form onSubmit={handleCreate} >
                    <input onChange={handleChange}  value={name}/>
                </form>
                <IntroductionInfoList data={information}></IntroductionInfoList> */}
            </div>
            <button type ="submit">등록</button>
        </div>
    )
}


export default SelfIntroduction;
