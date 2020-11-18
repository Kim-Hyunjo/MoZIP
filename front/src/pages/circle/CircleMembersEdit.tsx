import React,{useState} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
import CircleMembersEditSubmaster from './CircleMembersEditSubmaster'
import CircleMembersEditmaster from './CircleMembersEditmaster'
import CircleMembersEditTech from './CircleMembersEditTech'
import CircleMembersEditModal from './CircleMembersEditModal'
  interface Role {
      id: number,
      name: string
      status: string,
      content:string
  }
const CircleMembersEdit = () => {
    const [master, setMaster] = useState<Role[]>([
        {
            id: 0, name:'최우영', status:'회장',content:'프로필 사진'
        },
    ]);
    const [submaster, setSubMaster] = useState<Role[]>([
        {
            id: 0, name:'박웅기', status:'부회장',content:'프로필 사진'
        },
    ]);

    const [tech, setTech] = useState<Role[]>([
        {id: 0, name:'왕희도', status:'기술',content:'프로필 사진'},
        {id: 1, name:'왕희도', status:'기술',content:'프로필 사진'
        },
    ]);
        const masterList = master.map((item) =>{
            return(
                <CircleMembersEditmaster
                propsRole={item}/>
            )
        })
    
        const submasterList = submaster.map((item) =>{
            return(
                <CircleMembersEditSubmaster
                propsRole={item}/>
            )
        })
        const techList = tech.map((item) =>{
            return(
                <CircleMembersEditTech
                propsRole={item}/>
            )
        })
        

    return (
        <div className="circleMembers">
            <div><h2>운영진수정</h2>
                <h4>
                내 동아리의 운영진 명단을 수정해보세요.<br></br>
                동아리 부원 권한 단계는 소유자(회장), 관리자(운영진), 회원 총 3가지입니다. <br></br>
                Owner의 경우 명칭만 변경 가능하며, 1명으로 고정되어있습니다. 권한을 넘김으로써 회장을 변경할 수 있습니다.<br></br>            
                Manager의 경우 명칭을 변경할 수 있으며 직책의 수를 변경할 수 있습니다. 직책 및 인원 추가를 통해 변경 
                가능합니다.<br></br>
                구체적인 내용은 guide 페이지에서 확인하실 수 있습니다.
                </h4>
            </div>
            <div className="members_title">운영진</div>
            <div>
                <ul className="membersKind">
                    <li>회장</li>
                    <li>부회장</li>
                    <li>기술처</li>
                    <li>회계</li>
                    <li><button  id = "button_plus" type="button">+</button></li>
                </ul>
            </div>
            <div style={{display:'flex'}}>
                {masterList}
            </div>
            <div style={{display:'flex'}}>
            {submasterList}

            </div>
            <div style={{display:'flex'}}>
                 {techList}
                
            </div>
            
            <button id="button4" type="submit">완료</button>
        </div>
    )
}

export default CircleMembersEdit
