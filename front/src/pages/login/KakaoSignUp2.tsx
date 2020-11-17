import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
// import { StyledText } from '../style';
import KaKaoLogin from 'react-kakao-login';
import axios from 'axios';
import Cookies from 'universal-cookie';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

const KakaoSignUp = () => {
  const classes = useStyles();

  const [img, setImg] = useState<string>('');
  const cookies = new Cookies();

  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   return () => {
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   };
  // }, [img]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const responseKaKao = (res: any) => {
    const access_token = JSON.stringify(res.response.access_token);
    const name = JSON.stringify(res.profile.properties.nickname);
    const image = JSON.stringify(res.profile.properties.thumbnail_image);
    const semi_email = JSON.stringify(res.profile.kakao_account.email);
    const email = semi_email.replace(/^"+|"+$/g, '');

    console.log(access_token);
    cookies.set('access_token', access_token, { path: '/' });
    cookies.set('name', name, { path: '/' });
    cookies.set('image', image, { path: '/' });
    cookies.set('email', email, { path: '/' });
    cookies.set('access_token', access_token, { path: '/' });
    setImg(image);
    console.log(image);
    handleClickOpen();
    // alert(JSON.stringify(res));
    // console.log(JSON.stringify(res));
  };

  const responseFail = (err: any) => {
    alert(err);
  };

  return (
    <div className="login">
        <h2>Log in</h2>
        <h4>기존에 사용하시는 계정으로 간단하게 로그인 하세요.</h4>
      <br></br>
      <div className="kakaoButton">
        <KaKaoBtn
          token={'68e1890c86abef0b895c50c05679908a'}
          needProfile={true}
          onSuccess={responseKaKao}
          onFail={responseFail}
        />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{cookies.get('name')}</DialogTitle>
        <DialogContent>
          <div className={classes.root}>
            <Avatar
              alt="Remy Sharp"
              src={cookies.get('image')}
              className={classes.large}
            />
          </div>
          <DialogContentText id="alert-dialog-description">
            로그인하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            아뉴
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus href="/">
            네
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default KakaoSignUp;
