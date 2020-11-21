import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface Candidate{
    name : string;
    status : string;
}

const FinalProcessing = () => {
    const [status, setStatus] =useState<string>('미입금');
    const [candidates, setCandidates] = useState<Candidate[]>([
        {name:"한채은", status:'미입금'},
        {name:"한채은1", status:'입금 완료'},
        {name:"한채은2", status:'입금 오류'},
        {name:"한채은3", status:'입금 완료'}
    ]);
    const handleClick = (_candidate : Candidate) =>{
        let tmps: Candidate[] = Object.assign([], candidates);
        tmps.map((info)=>{
            if(info.name === _candidate.name){
                if (_candidate.status === '입금 완료'){
                    _candidate.status = '미입금';
                }
                else if (_candidate.status === '미입금'){
                    _candidate.status = '입금 오류';
                }
                else if (_candidate.status === '입금 오류'){
                    _candidate.status = '입금 완료';
                }
            }
        })
        setCandidates(tmps);
    }
    return (
        <div className="final">
            <div>
                <h2>최종 합격자 저장</h2>
                <h4>합격자들이 동아리 회비, MT비 등의 돈을 모두 입금 완료했을 시 최종 합격자들로 동아리 부원에 추가해보세요.<br></br>  
                은행에서 제공하는 입금 엑셀 파일을 업로드하면 자동으로 입금 인원이 분류됩니다. (입금 완료, 미입금, 입금 오류)<br></br>
                입금 여부는 수동적으로도 변경이 가능합니다. 직접 입금 완료/미입금/입금 오류 버튼을 눌러 변경할 수 있습니다. 
                </h4>
            </div>
            <div>
                <div className="middle_title">임시 합격자 목록</div>
                <div className="paidNum">총 33명중 23명</div>
                    <div className="right">
                        <label htmlFor="">
                            <select name="" id="">
                                <option value="입금완료순">입금완료순</option>
                            </select>
                        </label>
                        <button id="button_excel" type="button"></button>
                    </div>

                <div>
                    <ul className="finalList">
                        {candidates.map((info : Candidate)=>{
                             return(
                                <li className="finalPerson">
                                    <input type="checkbox" />
                                    {info.name}
                                    <div className="twoButtons"><div>
                                    <button onClick={()=>(handleClick(info))} id="button4">{info.status}</button>
                                    <Link to ="/recruit/interview/postprocessing/detail">
                                    <button id="button1">상세보기</button></Link></div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div>
            <button id="button_red" type ="submit">부원 최종 등록</button>
            </div>
        </div>
    )
}

export default FinalProcessing
