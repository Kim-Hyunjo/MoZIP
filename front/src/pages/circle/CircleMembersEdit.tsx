import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircleMembersEditDialog from './CircleMembersEditDialog';
import CircleMembersEditItem from './CircleMembersEditItem';

interface Role {
  role_id: number;
  role_name: string;
}

interface Member {
  member_id: number;
  name: string;
  role: string;
  image: string;
}

interface Member2 {
  member_id: number;
  name: string;
  role: string;
  image: string;
  isChecked: boolean;
}

interface Department {
  department_id: number;
  role: Role;
  members: Member[];
}

interface DTO {
  roles: Role[];
  departments: Department[];
}

const CircleMembersEdit = () => {
  const dto: DTO = {
    roles: [
      { role_id: 1, role_name: '회장' },
      { role_id: 2, role_name: '부회장' },
      { role_id: 3, role_name: '기술처' },
    ],
    departments: [
      {
        department_id: 1,
        role: { role_id: 1, role_name: '회장' },
        members: [
          { member_id: 1, name: '최우영', role: '회장', image: 'image' },
        ],
      },
      {
        department_id: 2,
        role: { role_id: 2, role_name: '부회장' },
        members: [
          { member_id: 2, name: '홍길동', role: '부회장', image: 'image' },
        ],
      },
      {
        department_id: 3,
        role: { role_id: 3, role_name: '기술처' },
        members: [
          { member_id: 3, name: '박웅기', role: '기술처', image: 'image' },
          { member_id: 4, name: '한예송', role: '기술처', image: 'image' },
          { member_id: 5, name: '왕희도', role: '기술처', image: 'image' },
          { member_id: 6, name: '한채은', role: '기술처', image: 'image' },
        ],
      },
    ],
  };

  const [roleIndex, setRoleIndex] = useState<number>(4);
  const [departmentIndex, setDepartmentIndex] = useState<number>(4);
  const [roles, setRoles] = useState<Role[]>(dto.roles);
  const [departments, setDepartments] = useState<Department[]>(dto.departments);
  const [toggleRole, setToggleRole] = useState<boolean>(false);
  const [newRole, setNewRole] = useState<string>('');

  useEffect(() => {
    setRoles(dto.roles);
    setDepartments(dto.departments);
  }, []);

  const handleToggleRole = () => {
    setToggleRole(!toggleRole);
  };

  const handleChangeNewRole = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRole(e.target.value);
  };

  const handleCreateRole = () => {
    let tmps: Role[] = Object.assign([], roles);
    let tmp: Role = { role_id: roleIndex, role_name: newRole };
    tmps.push(tmp);

    let tmpDepartments: Department[] = Object.assign([], departments);
    tmpDepartments.push({
      department_id: departmentIndex,
      role: tmp,
      members: [],
    });

    setRoleIndex(roleIndex + 1);
    setNewRole('');
    setRoles(tmps);
    setDepartments(tmpDepartments);
  };

  const handleRemoveRole = (role_id: number) => {
    let tmps: Role[] = [];
    roles.map((role) => {
      if (role.role_id !== role_id) {
        tmps.push(role);
      }
    });

    let tmpDepartments: Department[] = [];
    departments.map((department) => {
      if (department.role.role_id !== role_id) {
        tmpDepartments.push(department);
      }
    });

    setRoles(tmps);
    setDepartments(tmpDepartments);
  };

  const handleRemoveMember = (department_id: number, member_id: number) => {
    let tmpMembers: Member[] = [];
    let tmpDepartments: Department[] = Object.assign([], departments);
    tmpDepartments.map((department) => {
      if (department.department_id === department_id) {
        department.members.map((member) => {
          if (member.member_id !== member_id) {
            tmpMembers.push(member);
          }
        });
        department.members = Object.assign([], tmpMembers);
      }
    });
    console.log(tmpDepartments);
    setDepartments(tmpDepartments);
  };

  const handleAddMembers = (department_id: number, members: Member[]) => {
    console.log(department_id);
    console.log(members);

    let tmps: Department[] = Object.assign([], departments);
    tmps.map((department) => {
      if (department.department_id === department_id) {
        department.members = [...members];
      }
    });
    console.log(tmps);
    setDepartments(tmps);
  };

  return (
    <div className="circleMembersEdit">
      <div>
        <h2>운영진수정</h2>
      </div>
      <h4>
        내 동아리의 운영진 명단을 수정해보세요.<br></br>
        동아리 부원 권한 단계는 소유자(회장), 관리자(운영진), 회원 총
        3가지입니다. <br></br>
        Owner의 경우 명칭만 변경 가능하며, 1명으로 고정되어있습니다. 권한을
        넘김으로써 회장을 변경할 수 있습니다. <br></br>
        Manager의 경우 명칭을 변경할 수 있으며 직책의 수를 변경할 수 있습니다.
        직책 및 인원 추가를 통해 변경 가능합니다.<br></br>
        구체적인 내용은 guide 페이지에서 확인하실 수 있습니다.
      </h4>
      <div className="members_title">운영진</div>
      <div>
        <ul className="membersKind">
          {roles.map((role) => {
            return (
              <li key={role.role_id}>
                {role.role_name}
                <button
                  id="button_plus"
                  type="button"
                  onClick={() => handleRemoveRole(role.role_id)}
                >
                  x
                </button>
              </li>
            );
          })}
          <li>
            <button id="button_plus" type="button" onClick={handleToggleRole}>
              {toggleRole ? '-' : '+'}
            </button>
          </li>
        </ul>
        <span hidden={!toggleRole}>
          <input
            type="text"
            value={newRole}
            onChange={handleChangeNewRole}
          ></input>
          <button onClick={handleCreateRole}>추가</button>
        </span>
      </div>
      {departments.map((department) => {
        return (
          <div key={department.department_id}>
            <div className="role">
              <div className="roleName">{department.role.role_name}</div>
              {department.role.role_name === '회장' ? (
                <button className="changeOwner">권한 넘기기</button>
              ) : (
                <CircleMembersEditDialog
                  deparment_id={department.department_id}
                  refMembers={department.members as Member2[]}
                  onAddMembers={handleAddMembers}
                ></CircleMembersEditDialog>
              )}
            </div>
            {department.members.map((member) => {
              return (
                <CircleMembersEditItem
                  key={member.member_id}
                  member={member}
                  department_id={department.department_id}
                  onRemove={handleRemoveMember}
                ></CircleMembersEditItem>
              );
            })}
          </div>
        );
      })}
      <button id="button4" type="submit">
        완료
      </button>
    </div>
  );
};

export default CircleMembersEdit;
