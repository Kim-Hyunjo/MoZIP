/* eslint-disable react-hooks/rules-of-hooks */
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
import '../layout.css';
import '../button.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MyPageIntroductionItem from './MyPageIntroductionItem';

interface Question {
  id: number;
  title: string;
  content: string;
}

const myPageIntroduction = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [questions, setQuestions] = useState<Question[]>([
    { id: 0, title: '지원 동기/이유', content: 'asdasdasd' },
    {
      id: 1,
      title:
        '대학 입학 후 현재까지 한 활동과 느낀점을 중심으로 자신을 소개해주세요.',
      content: '',
    },
    { id: 2, title: '자기 소개(성격)', content: '' },
    { id: 3, title: '취미/특기/관심사', content: '' },
    { id: 4, title: '동아리 활동과 관련하여 지금까지 한 활동', content: '' },
    {
      id: 5,
      title: '단체 생활을 한 경험, 느낀점, 단체에서의 역할',
      content: '',
    },
    {
      id: 6,
      title: '타인과 갈등 발생했던 상황에서 성공/실패한 경험 느낀점',
      content: '',
    },
    { id: 7, title: '공모전/대회 경력', content: '' },
    { id: 8, title: '자신에게 가장 의미 있었던 경험', content: '' },
    { id: 9, title: '동아리에서 하고 싶은 활동', content: '' },
    { id: 10, title: '동아리 활동을 통해 얻고 싶은 점', content: '' },
    { id: 11, title: '본인이 동아리에 도움이 될 수 있는 점', content: '' },
    { id: 12, title: '동아리에서 본인을 뽑아야 하는 이유', content: '' },
    { id: 13, title: '향후 학업 계획', content: '' },
    { id: 14, title: '각오', content: '' },
  ]);

  const [count, setCount] = useState<number>(15);
  const [value, setValue] = useState('long');
  const [title, setTitle] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeQuestion = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTitle((e.target as HTMLInputElement).value);
  };

  const handleSave = () => {
    setOpen(false);
    let question: Question = {
      id: count,
      title: title,
      content: '',
    };
    let q: Question[] = Object.assign([], questions);
    q.push(question);
    setCount(count + 1);
    setTitle('');
    setQuestions(q);
  };

  const handleUpdate = (id: number, content: string) => {
    let qs: Question[] = Object.assign([], questions);
    qs.map((info) => {
      if (info.id === id) {
        info.content = content;
      }
    });
    setQuestions(qs);
    console.log(questions);
  };

  const handleRemove = (id: number) => {
    let qs: Question[] = [];
    questions.map((info) => {
      if (info.id !== id) {
        qs.push(info);
      }
    });
    setQuestions(qs);
  };

  const questionFormList = questions.map((item) => {
    return (
      <div key={item.id}>
        <MyPageIntroductionItem
          propsQuestion={item}
          onUpdate={handleUpdate}
          onRemove={handleRemove}
        />
      </div>
    );
  });

  return (
    <div className="mypage_introduction">
      <h2>자기소개함</h2>
      <h4>자기소개서 질문과 답변을 미리 준비해보세요.</h4>
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
        <button id="button3_intro" onClick={handleClickOpen}>
          직접 추가
        </button>
      </div>
      <div>
        <div>{questionFormList}</div>
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
              name="kind"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="long"
                control={<Radio />}
                label="서술"
                defaultChecked
              />
              <FormControlLabel
                value="short"
                control={<Radio />}
                label="단답"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            autoFocus
            name="question"
            margin="dense"
            id="name"
            label="질문을 작성해주세요."
            type="text"
            onChange={handleChangeQuestion}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button type="submit" onClick={handleSave} color="primary">
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default myPageIntroduction;
