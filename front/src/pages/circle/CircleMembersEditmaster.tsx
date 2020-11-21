import React,{useState} from 'react'
interface Role {
    id: number;
    name: string;
    status: string;
    content:string;
}
interface Props {
    propsRole:Role;
}
const CircleMembersEditMaster:React.FunctionComponent<Props> = ({
    propsRole
    
    
}) =>{
   
 
    
      
   
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
export default CircleMembersEditMaster
