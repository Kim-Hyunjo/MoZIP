import React, { useState } from 'react'
import CircleMembersEditModal from './CircleMembersEditModal'

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
   
return (
    <div>
         <div className="role">
                    <div className="roleName">{propsRole.status} (관리자)</div>
                    <CircleMembersEditModal/>
                </div>
        <div className="user_namecard_edit"><div className="user_name">{propsRole.name}</div><button id="button_x" type="button">x</button><div className="submaster_role">{propsRole.status}</div>
        <div className="subClubImage">
            <img src="http://placehold.it/120x120" />
        </div>
    </div>
    </div>
)
}
export default CircleMembersEditSubmaster
