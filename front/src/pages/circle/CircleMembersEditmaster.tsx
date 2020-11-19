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
const CircleMembersEditmaster:React.FunctionComponent<Props> = ({
    propsRole
    
    
}) =>{
return (
    <div>
         <div className="role">
            <div className="roleName">{propsRole.status} (관리자)</div>
            <button className="changeOwner" >권한 넘기기</button>
        </div>
        <div className="user_namecard_edit">
            <div className="user_name">{propsRole.name}</div>
            <div className="user_role">{propsRole.status}</div>
            <div className="clubImage">
                <img src="http://placehold.it/120x120" />
            </div>
        </div>
    </div>
)
}
export default CircleMembersEditmaster
