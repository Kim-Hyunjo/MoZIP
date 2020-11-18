import React from 'react';
import Button from '@material-ui/core/Button';
import { Dialog } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogContentText } from '@material-ui/core';
import { DialogTitle }from '@material-ui/core';

//https://material-ui.com/components/dialogs/ 여기 있는 거 썼어요!
export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        확인
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"저장하고 수정을 완료하시겠습니까?"}</DialogTitle>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            예
          </Button>
          <Button onClick={handleClose} color="primary">
            아니요
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}