import React, { Fragment, useState } from 'react';

interface Member {
  member_id: number;
  name: string;
  role: string;
  image: string;
  isChecked: boolean;
}

interface Props {
  member: Member;
  department_id: number;
  onAdd(member_id: number): void;
  onDelete(member_id: number): void;
}

const CircleMembersEditDialogItem = ({
  member,
  department_id,
  onAdd,
  onDelete,
}: Props) => {
  const handleAdd = () => {
    onAdd(member.member_id);
  };

  const handleDelete = () => {
    onDelete(member.member_id);
  };

  return (
    <Fragment>
      <div className="user_namecard_edit">
        <div className="user_name">{member.name}</div>
        {!member.isChecked ? (
          <button id="button_x" type="button" onClick={handleAdd}>
            +
          </button>
        ) : (
          <button id="button_x" type="button" onClick={handleDelete}>
            -
          </button>
        )}
        <div className="submaster_role">{member.role}</div>
        <div className="subClubImage">
          <img src="http://placehold.it/120x120" />
        </div>
      </div>
    </Fragment>
  );
};

export default CircleMembersEditDialogItem;
