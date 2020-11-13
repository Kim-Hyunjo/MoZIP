import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './layout.css';
import './button.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const myPageIntroduction = () => {
  const questionList = [
    { index: 0, title: '지원 동기/이유' },
    {
      index: 1,
      title:
        '대학 입학 후 현재까지 한 활동과 느낀점을 중심으로 자신을 소개해주세요.',
    },
    { index: 2, title: '자기 소개(성격)', content: '' },
    { index: 3, title: '취미/특기/관심사', content: '' },
    { index: 4, title: '동아리 활동과 관련하여 지금까지 한 활동', content: '' },
    {
      index: 5,
      title: '단체 생활을 한 경험, 느낀점, 단체에서의 역할',
      content: '',
    },
    {
      index: 6,
      title: '타인과 갈등 발생했던 상황에서 성공/실패한 경험 느낀점',
      content: '',
    },
    { index: 7, title: '공모전/대회 경력', content: '' },
    { index: 8, title: '자신에게 가장 의미 있었던 경험', content: '' },
    { index: 9, title: '동아리에서 하고 싶은 활동', content: '' },
    { index: 10, title: '동아리 활동을 통해 얻고 싶은 점', content: '' },
    { index: 11, title: '본인이 동아리에 도움이 될 수 있는 점', content: '' },
    { index: 12, title: '동아리에서 본인을 뽑아야 하는 이유', content: '' },
    { index: 13, title: '향후 학업 계획', content: '' },
    { index: 14, title: '각오', content: '' },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="introduction_wrapper">
      <h2>자기소개함</h2>
      <h3>자기소개서 질문과 답변을 미리 준비해보세요.</h3>
      <div className="flexthem">
        
        <div>
          <label>
            <select
              id="list-name_intro"
              // defaultValue={subject}
              // value={subject}
              // onChange={(e) => setSubject(e.target.value)}
              // onBlur={(e) => setSubject(e.target.value)}
            >
              <option>최신순</option>
              <option>인기순</option>
            </select>
          </label>
        </div>
        <button id="button3_intro" onClick={handleClickOpen}>직접 추가</button>
      </div>
      <div>
        <div>
          {questionList.map((item) => {
            return (
              <div  key={item.index}>
                <div className="introduction_question">{item.title}</div>
                {/* <input className="input" type="text"></input> */}
                <div className="introduction_answer">
                  <div className="input">
                <TextField
                id="outlined-multiline-static"
                multiline
                rows={6}
                
                placeholder="질문에 대한 답안을 작성해주세요."
                variant="outlined"
                fullWidth
                />
                </div>
                
                <div className="introduction_buttons"><button id="button1_blue" >수정하기</button>
                <button id="button1_red" >삭제하기</button></div></div>
              </div>
            );
          })}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          직접 질문 / 답변 추가하기
        </DialogTitle>
        <DialogContent>
          <DialogContentText>질문 유형</DialogContentText>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="서술" control={<Radio />} label="서술" />
              <FormControlLabel value="단답" control={<Radio />} label="단답" />
            </RadioGroup>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="질문을 작성해주세요."
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handleClose} color="primary">
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default myPageIntroduction;
