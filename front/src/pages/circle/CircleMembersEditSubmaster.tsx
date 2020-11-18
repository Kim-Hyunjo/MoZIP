import React, { useState } from 'react'


interface Role {
    id: number;
    name: string;
    status: string;
    content:string;
}
interface Props {
    propsRole:Role;

}

const CircleMembersEditSubmaster:React.FunctionComponent<Props> = ({
    propsRole
    
}) =>{
    const guest:Role[] =[
        { id: 1, name:'한채은', status:'기술',content:'프로필 사진'},
           { id: 2, name:'왕희도', status:'기술',content:'프로필 사진'},
           { id: 3, name:'박웅기', status:'기술',content:'프로필 사진'},
           { id: 4, name:'한예송', status:'기술',content:'프로필 사진'},
    ]
    const [open, setOpen] = useState<boolean>(false)
 
    
      
   
return (
    <div>
         <div className="role">
                    <div className="roleName">{propsRole.status} (관리자)</div>
                    <button className="changeOwner" >인원 추가</button>
                </div>
        <div className="user_namecard_edit"><div className="user_name">{propsRole.name}</div><button id="button_x" type="button">x</button><div className="user_role">{propsRole.status}</div><span>{propsRole.content}</span></div>
    </div>
)
}
export default CircleMembersEditSubmaster
