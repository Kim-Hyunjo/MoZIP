import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircleMembersEditDialogItem from './CircleMembersEditDialogItem';

interface Props {
  deparment_id: number;
  refMembers: Member[];
  onAddMembers(department_id: number, members: Member[]): void;
}

interface Member {
  member_id: number;
  name: string;
  role: string;
  image: string;
  isChecked: boolean;
}

const CircleMembersEditDialog = ({
  deparment_id,
  refMembers,
  onAddMembers,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState<Member[]>([
    {
      member_id: 1,
      name: '최우영',
      role: '회장',
      image: 'image',
      isChecked: false,
    },
    {
      member_id: 2,
      name: '홍길동',
      role: '부회장',
      image: 'image',
      isChecked: false,
    },
    {
      member_id: 3,
      name: '박웅기',
      role: '기술처',
      image: 'image',
      isChecked: false,
    },
    {
      member_id: 4,
      name: '한예송',
      role: '기술처',
      image: 'image',
      isChecked: false,
    },
    {
      member_id: 5,
      name: '왕희도',
      role: '기술처',
      image: 'image',
      isChecked: false,
    },
    {
      member_id: 6,
      name: '한채은',
      role: '기술처',
      image: 'image',
      isChecked: false,
    },
    {
      member_id: 7,
      name: '박나박',
      role: '일반',
      image: 'image',
      isChecked: false,
    },
    {
      member_id: 8,
      name: '김나박',
      role: '일반',
      image: 'image',
      isChecked: false,
    },
    {
      member_id: 9,
      name: '고길동',
      role: '일반',
      image: 'image',
      isChecked: false,
    },
    {
      member_id: 10,
      name: '이순신',
      role: '일반',
      image: 'image',
      isChecked: false,
    },
  ]);

  const handleClickOpen = () => {
    let tmps: Member[] = Object.assign([], members);
    tmps.map((member) => {
      member.isChecked = false;
    });
    refMembers.map((refMember) => {
      tmps.map((member) => {
        if (refMember.member_id === member.member_id) {
          member.isChecked = true;
        }
      });
    });
    setMembers(tmps);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let tmps: Member[] = [];
    members.map((member) => {
      if (member.isChecked === true) {
        tmps.push(member);
      }
    });
    onAddMembers(deparment_id, tmps);
    setOpen(false);
  };

  const handleAddMember = (member_id: number) => {
    let tmps: Member[] = Object.assign([], members);
    tmps.map((member) => {
      if (member.member_id === member_id) {
        member.isChecked = true;
      }
    });
    console.log(tmps);
    setMembers(tmps);
  };

  const handleDeleteMember = (member_id: number) => {
    let tmps: Member[] = Object.assign([], members);
    tmps.map((member) => {
      if (member.member_id === member_id) {
        member.isChecked = false;
      }
    });
    console.log(tmps);
    setMembers(tmps);
  };

  return (
    <div>
      <button className="changeOwner" onClick={handleClickOpen}>
        인원 추가
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">부원 선택하기</DialogTitle>
        <DialogContent>
          <DialogContentText>선택해보세요!</DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
          {members.map((member) => {
            return (
              <CircleMembersEditDialogItem
                key={member.member_id}
                member={member}
                department_id={deparment_id}
                onAdd={handleAddMember}
                onDelete={handleDeleteMember}
              ></CircleMembersEditDialogItem>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handleSubmit} color="primary">
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CircleMembersEditDialog;
