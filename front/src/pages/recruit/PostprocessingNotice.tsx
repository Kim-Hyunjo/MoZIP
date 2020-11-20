import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const PostprocessingNotice = () => {
    const [content, setcontent] = useState('')
    const ChangeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setcontent((e.target as any).value)
    }
    return (
        <div className="postprocessing">
            <h2>
            합격 안내문
            </h2>
            <h4>면접 일정을 수정 및 정리해보세요.</h4>

            <textarea placeholder="합격 안내문을 작성해주세요.
                (ex. 회비 입금, MT 및 OT 일정, 연락처 등)
                아래 예시를 참고해주세요." name="" id="" cols={90} rows={20} onChange={ChangeHandler}>

            </textarea>
            <div className="postProButtons">
                <button id = "button1">이전</button>
                <Link to ="/mypage/status">
                <button id="button_red">최종 합격자 발표</button></Link>
                <Link to ="/recruit/interview/postprocessing">
                <button id ="button4">저장</button></Link>
            </div>
            <div className="middle_title">예시:</div>
            <div className="example">
                <p>안녕하세요. TAVE입니다.<br/>
                    TAVE 6기에 최종 합격하게 되신 것을 진심으로 축하드립니다!<br/>
                    
                    회비  및 MT비 입금 관련 안내드리겠습니다.<br/>
                    
                    회비 입금 안내<br/>
                    입금 금액: 3,000,000원<br/>
                    입금계좌 : 카카오뱅크<br/>
                    1234-23-41243(홍길동)<br/>
                    
                    *9월 21일(월) 23:59 까지 입금 마감입니다.<br/>
                    입금확인 후 회원자격을 부여받습니다.<br/>
                    
                    기타 문의사항은 카카오톡 플러스친구를 통해 문의 주세요.<br/>
                    
                    ICE BREAKING 안내<br/>
                    세부적인 ICE BREAKING 안내는 29일에 단체 채팅방을 통해 알려드릴 예정입니다.</p>
            </div>
        </div>
    )
}

export default PostprocessingNotice
