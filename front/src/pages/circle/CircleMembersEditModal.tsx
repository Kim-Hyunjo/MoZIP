import React, { ReactComponentElement } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';



function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 1200   ,
      height:800,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display:'flex'
    },
  }),
);

interface Role {
    id: number;
    name: string;
    status: string;
    content:string;
}


const CircleMembersEditModal=  ()=> {
    const guest:Role[] =[
        { id: 2, name:'한채은', status:'기술',content:'프로필 사진'},
           { id: 3, name:'왕희도', status:'기술',content:'프로필 사진'},
           { id: 4, name:'박웅기', status:'기술',content:'프로필 사진'},
           { id: 5, name:'한예송', status:'기술',content:'프로필 사진'},
           { id: 6, name:'한예송', status:'기술',content:'프로필 사진'},
    ]
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const handleAdd =() =>{
    setOpen(false);
    
}
const handleItem = (e: React.MouseEvent) =>{
    console.dir((e.target as any).value)
}
  const body = (
    <div style={modalStyle} className={classes.paper}>
        {guest.map((item) => {
             return(
                <div onClick={handleItem} key={item.id}>
                <div className="role">
            <div className="roleName" >{item.status} (관리자)</div>
               </div>
               <div className="user_namecard_edit"><div className="user_name">{item.name}</div><button id="button_x" type="button">x</button><div className="user_role">{item.status}</div><span>{item.content}</span></div>
            </div>
             )
        })}
      {/* <SimpleModal /> */}
      <button id="button4" onClick={handleClose} >취소</button>
      <button id="button4" type="submit" onClick={handleAdd}>추가</button>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} className="changeOwner">
        인원 추가
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default CircleMembersEditModal