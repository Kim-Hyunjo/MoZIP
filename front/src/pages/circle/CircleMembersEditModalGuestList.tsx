import React, { useState } from 'react'

interface Role {
    id: number;
    name: string;
    status: string;
    content: string;
}

interface Props {
    eachGuest: Role;
    index: number
    guests: Role[]
    setTech: any
}

const CircleMembersEditModalGuestList: React.FunctionComponent<Props> = (
    { eachGuest,
        index,
        guests,
        setTech }
) => {

  

   
    return (
        <div>
            <div className="role">
                <div className="roleName"></div>
            </div>
            
            <div className="user_namecard_edit"><div className="user_name">{eachGuest.name}</div><div className="user_role">{eachGuest.status}</div><span>{eachGuest.content}</span></div>

        </div>
    )
}

export default CircleMembersEditModalGuestList
    ;