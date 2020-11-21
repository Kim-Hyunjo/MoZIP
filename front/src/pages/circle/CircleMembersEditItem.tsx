import React, { Fragment, useState } from 'react';

interface Member {
  member_id: number;
  name: string;
  role: string;
  image: string;
}

interface Props {
  member: Member;
  department_id: number;
  onRemove(department_id: number, role_id: number): void;
}

const CircleMembersEditItem = ({ member, department_id, onRemove }: Props) => {
  const handleRemove = () => {
    onRemove(department_id, member.member_id);
  };

  return (
    <Fragment>
      <div className="user_namecard_edit">
        <div className="user_name">{member.name}</div>
        {member.role !== '회장' ? (
          <button id="button_x" type="button" onClick={handleRemove}>
            x
          </button>
        ) : (
          <Fragment></Fragment>
        )}
        <div className="submaster_role">{member.role}</div>
        <div className="subClubImage">
          <img src="http://placehold.it/120x120" />
        </div>
      </div>
    </Fragment>
  );
};

export default CircleMembersEditItem;
