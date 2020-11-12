import React,{useState,useEffect} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
  
const Apply2 = ({history}:any) => {
   
    const [motivation, setmotivation] = useState('')
    const [reason, setreason] = useState('')
    const [agreement, setagreement] = useState<boolean>(false)

    const [language1, setlanguage1] = useState<boolean>(false)
    const [language2, setlanguage2] = useState<boolean>(false)
    const [language3, setlanguage3] = useState<boolean>(false)

    const [date1, setDate1] = useState<boolean>(false)
    const [date2, setDate2] = useState<boolean>(false)
    const [date3, setDate3] = useState<boolean>(false)

    const checkDateChange1:any = (e:Event) =>{
        setDate1((e.target as any).checked)
    }
    const checkDateChange2:any = (e:Event) =>{
        setDate2((e.target as any).checked)
    }
    const checkDateChange3:any = (e:Event) =>{
        setDate3((e.target as any).checked)
    }


    const handleChange1:any= (e:Event)=>{
        setmotivation((e.target as any).value)
    }
    const handleChange2:any= (e:Event)=>{
        setreason((e.target as any).value)
    }
    const checkHandler:any = (e:Event) =>{
        setagreement((e.target as any).checked)
    }
    const checkLangChange1:any = (e:Event)=>{
        setlanguage1((e.target as any).checked)
    }
    const checkLangChange2:any  = (e:Event)=>{
        setlanguage2((e.target as any).checked)
    }
    const checkLangChange3:any  = (e:Event)=>{
        setlanguage3((e.target as any).checked)
    }
    const goBack:any = () =>{
        history.goBack();
       
    }
 
    const renderSubmit = () =>{
        if(agreement){
            return(
                <Link to='/list/academy/{circleID}/apply3'><button type="submit" >제출</button></Link>
            )
        }
        return(
            <button type="submit" disabled >제출</button>
        )
    }
    
    return (
        <>
        <div>
            <div><h2>Tave 지원하기</h2></div>
            <div>
                <h3>지원서</h3>
                <form action="" >
                    <div>
                        <div><label htmlFor="">TAVE에 지원한 동기를 알려주세요.</label>
                        <textarea name="" id="" cols={80}rows={5} onChange={handleChange1} value={motivation}></textarea></div>
                        
                        <div><label htmlFor="">4차 산업 혁명에 관심을 가지게 된 계기를 알려주세요..</label>
                        <textarea name="" id="" cols={80}rows={5} onChange={handleChange2} value={reason}></textarea></div>

                        <div>
                        <label htmlFor="">다룰 수 있는 언어를 선택해주세요.</label>
                        <input type="checkbox" checked={language1} onChange={checkLangChange1} name="Python" value="Python"/><span>Python</span>
                        <input type="checkbox" checked={language2} onChange={checkLangChange2} name="C" value="C"/><span>C</span>
                        <input type="checkbox" checked={language3} onChange={checkLangChange3} name="Java" value="Java"/><span>Java</span>
                        </div>

                        <div>
                        <label htmlFor="">면접 가능 시간을 선택해 주세요.</label><br/>
                        {/* 날짜는 back에서 받아온 데이터로 교체 */}
                        <input type="checkbox" checked={date1} onChange={checkDateChange1} name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} />시~<input type="select"maxLength={2} />시<br/>
                        <input type="checkbox" checked={date2} onChange={checkDateChange2} name="second" value="2020년 7월 19일 목요일"/><strong>2020년 7월 19일 목요일</strong><input type="select"maxLength={2} />시~<input type="select"maxLength={2} />시<br/>
                        <input type="checkbox" checked={date3} onChange={checkDateChange3} name="third" value="2020년 7월 20일 금요일"/><strong>2020년 7월 20일 금요일</strong><input type="select"maxLength={2}/>시~<input type="select"maxLength={2} />시
                        </div>

                       <div>
                       <label htmlFor="">질문 5</label>
                        <input type="textarea"/>
                       </div>

                        <div>
                        <label htmlFor=""></label>
                        <input type="checkbox" checked={agreement} onChange={checkHandler}/><span>해당 동아리에서 이름, 사진, 생년월일, 전화번호를 열람하는 것에 동의합니다.</span>
                        </div>
                    </div>
                </form>
                <button type="button" onClick={goBack}>이전</button>
                <button type="button">저장</button>
                {renderSubmit()}
            </div>
            <div>
                <h2>자기소개함</h2>
                <ul>
                    <li><p>지원 동기를 
                    말씀해주세요</p></li>
                    <li><p>지원 동기를 
                    말씀해주세요</p></li>
                    <li><p>지원 동기를 
                    말씀해주세요</p></li>
                    <li><p>지원 동기를 
                    말씀해주세요</p></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Apply2
