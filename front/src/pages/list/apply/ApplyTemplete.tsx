import { BrowserRouter as Router, Route, Link, RouteComponentProps } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './apply.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';



interface Apply2{
  user_record : UserRecord,
}

interface UserRecord{
  user_id : number,
  RecordQ : Answer[],
}

interface Answer{
  Q1 : string,
  A1 : string,
}

const ApplyTemplete = ({ history }: any) => {
  const [motivation, setmotivation] = useState('');
  const [reason, setreason] = useState('');
  const [agreement, setagreement] = useState<boolean>(false);

  const [language1, setlanguage1] = useState<boolean>(false);
  const [language2, setlanguage2] = useState<boolean>(false);
  const [language3, setlanguage3] = useState<boolean>(false);

  const [date1, setDate1] = useState<boolean>(false);
  const [date2, setDate2] = useState<boolean>(false);
  const [date3, setDate3] = useState<boolean>(false);

  const checkDateChange1: any = (e: Event) => {
    setDate1((e.target as any).checked);
  };
  const checkDateChange2: any = (e: Event) => {
    setDate2((e.target as any).checked);
  };
  const checkDateChange3: any = (e: Event) => {
    setDate3((e.target as any).checked);
  };

  const handleChange1: any = (e: Event) => {
    setmotivation((e.target as any).value);
  };
  const handleChange2: any = (e: Event) => {
    setreason((e.target as any).value);
  };
  const checkHandler: any = (e: Event) => {
    setagreement((e.target as any).checked);
  };
  const checkLangChange1: any = (e: Event) => {
    setlanguage1((e.target as any).checked);
  };
  const checkLangChange2: any = (e: Event) => {
    setlanguage2((e.target as any).checked);
  };
  const checkLangChange3: any = (e: Event) => {
    setlanguage3((e.target as any).checked);
  };
  const goBack: any = () => {
    history.goBack();
  };


  const copyMessage = (val: string) =>{
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }



  const [_apply, setApply2] = useState<Apply2>({
    user_record:{
      user_id: 1,
      RecordQ: [{
        Q1 : "지원 동기/이유",
        A1 : "TAVE가 최고의 동아리라는 것이 지구 반대편까지 소문이 났다고 들었습니다.",
      },
      {
        Q1 : "자기소개(성격)",
        A1 : "저는 성격 좋은 테이비입니다.",
    },
      {
        Q1 : "각오",
        A1 : "파이팅~!~!~",
    }]
    }
  })
  const getApi = async () => {
    await axios.get(`http://127.0.0.1:8000/list/academy/1/apply2/1/`).then((r) => {
      let res: Apply2 = r.data;
      setApply2(res);
    })
  }
  useEffect(() => {
    getApi()
  }, [])


  const renderSubmit = () => {
    if (agreement) {
      return (
        <Link to="/list/:subject/:circle_id/apply/success">
          <button id="button4" type="submit">
            제출
          </button>
        </Link>
      );
    }
    return (
      <button id="button4" type="submit" disabled>
        제출
      </button>
    );
  };

  return (
    <div className="apply_wrapper">
      <div>
        <h2>Tave 지원하기</h2>
      </div>
      <div className="whole_resume">
      <div>
        <h4>지원서</h4>
        <form action="">
          <div className="apply_questions">
            <div className="question_box">
              <div className="applyquestion">
                <label htmlFor="">TAVE에 지원한 동기를 알려주세요.</label>
              </div>
              <div>
               <textarea className="essay" name="" id="" cols={80}rows={5} onChange={handleChange1} value={motivation}></textarea>
              </div>
            </div>

            <div className="question_box">
              <div className="applyquestion">
                <label htmlFor="">
                  4차 산업 혁명에 관심을 가지게 된 계기를 알려주세요.
                </label>
              </div>
              <div>
                <textarea className="essay" name="" id="" cols={80} rows={5}></textarea>
              </div>
            </div>

            <div className="question_box">
              <div className="applyquestion">
                <label htmlFor="">다룰 수 있는 언어를 선택해주세요.</label>
              </div>
              <div>
                <div className="applyCheckbox">
                <input type="checkbox" checked={language1} onChange={checkLangChange1} name="Python" value="Python"/>Python
                </div>
                <div className="applyCheckbox">
                <input type="checkbox" checked={language2} onChange={checkLangChange2} name="C" value="C"/>C
                </div>
                <div className="applyCheckbox">
                <input type="checkbox" checked={language3} onChange={checkLangChange3} name="Java" value="Java"/>Java
                </div>
              </div>
            </div>

            <div className="question_box">
              <div className="applyquestion">
                <label htmlFor="">면접 가능 시간을 선택해 주세요.</label>
              </div>
              <div>
                {/* 날짜는 back에서 받아온 데이터로 교체 */}
                <div>
                {/* <input type="checkbox" checked={date1} onChange={checkDateChange1} name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} />시~<input type="select"maxLength={2} />시 */}
                <input type="checkbox" checked={date1} onChange={checkDateChange1} name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong>
                <Select className="apply_choosetime" defaultValue="시">
                  <option aria-label="hour" value="16" />
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>  
                  <option value={19}>19</option>
                </Select>시~
                <Select className="apply_choosetime" defaultValue="시">
                  <option aria-label="hour" value="16" />
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>  
                  <option value={19}>19</option>
                </Select>시
                </div>
                <div>
                <input type="checkbox" checked={date2} onChange={checkDateChange2} name="second" value="2020년 7월 19일 목요일"/><strong>2020년 7월 19일 목요일</strong>
                <Select className="apply_choosetime" defaultValue="시">
                  <option aria-label="hour" value="16" />
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>  
                  <option value={19}>19</option>
                </Select>시~
                <Select className="apply_choosetime" defaultValue="시">
                  <option aria-label="hour" value="16" />
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>  
                  <option value={19}>19</option>
                </Select>시
                </div>
                <div>
                {/* <input type="checkbox" checked={date3} onChange={checkDateChange3} name="third" value="2020년 7월 20일 금요일"/><strong>2020년 7월 20일 금요일</strong><input type="select"maxLength={2}/>시~<input type="select"maxLength={2} />시 */}
                <input type="checkbox" checked={date3} onChange={checkDateChange3} name="third" value="2020년 7월 20일 금요일"/><strong>2020년 7월 20일 금요일</strong>
                <Select className="apply_choosetime" defaultValue="시">
                  <option aria-label="hour" value="16" />
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>  
                  <option value={19}>19</option>
                </Select>시~
                <Select className="apply_choosetime" defaultValue="시">
                  <option aria-label="hour" value="16" />
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>  
                  <option value={19}>19</option>
                </Select>시
                </div>
              </div>
            </div>

            <div>
              <form className="noticeConsent">
                <label htmlFor=""></label>
                <input type="checkbox" checked={agreement} onChange={checkHandler}/><span>해당 동아리에서 이름, 사진, 생년월일, 전화번호를 열람하는 것에 동의합니다.</span>
              </form>
            </div>
          </div>
        </form>
        <div className="apply2Buttons">
          {/* <Link to="/list/:subject/:circle_id/apply"> */}
          <button id="button1" type="button" onClick={goBack}>
            이전 
          </button>
          {/* </Link> */}
          <button id="button1" type="button">
            저장
          </button>
          {renderSubmit()}
        </div>
      </div>
      <div className="resumeList">
        <div className="resumeList_header">자기소개함</div>
        <ul>
          {/* {_apply.user_record.RecordQ.map((item)=>{
            <li>
              {item.Q1}<button onClick={()=>copyMessage(item.A1)} value="click to copy" >복사하기</button>
            </li>
          })} */}
          <li>
            {_apply.user_record.RecordQ[0].Q1}<button id="copy" onClick={()=>copyMessage(_apply.user_record.RecordQ[0].A1)} value="click to copy" >복사하기</button>
          </li>
          <li>
            {_apply.user_record.RecordQ[1].Q1}<button id="copy" onClick={()=>copyMessage(_apply.user_record.RecordQ[1].A1)} value="click to copy" >복사하기</button>
          </li>
          <li>
            {_apply.user_record.RecordQ[2].Q1}<button id="copy" onClick={()=>copyMessage(_apply.user_record.RecordQ[2].A1)} value="click to copy" >복사하기</button>
          </li>
          
          {/* <li>
            {_apply.user_record.RecordQ}
          </li>
          <li>
            자기 소개(성격)<p>복사하기</p>
          </li>
          <li>
            공모전/대회 경력<p>복사하기</p>
          </li>
          <li>
            각오<p>복사하기</p>
          </li> */}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default ApplyTemplete;
