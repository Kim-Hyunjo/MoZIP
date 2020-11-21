import React, { useState } from 'react'

interface Role {
    id: number;
    name: string;
    status: string;
    content: string;
}

interface Props {
    propsRole: Role;
    tech: any
    setTech: any
    index: number
}

const CircleMembersEditTech: React.FunctionComponent<Props> = ({
    propsRole,
    tech,
    setTech,
    index
}) => {

    const onDelete = (e: React.MouseEvent) => {
        const newTech = Object.assign([], tech);
        newTech.splice(index, 1)
        setTech(newTech)
    }

    return (
        <div >
            <div className="role">
            </div>
            <div className="user_namecard_edit">
                <div className="user_name">{propsRole.name}</div>
                <button onClick={onDelete} id="button_x" type="button">x</button>
                <div className="user_role">{propsRole.status}</div>
                <span>{propsRole.content}</span>
                <div className="subClubImage">
            <img src="http://placehold.it/120x120" />
        </div></div>
        </div>
    )
}

export default CircleMembersEditTech
