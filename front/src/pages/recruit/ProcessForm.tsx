import { Link } from 'react-router-dom';
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
import Select from '@material-ui/core/Select';

const ProcessForm = () => {
  const [openMultiChoice, setOpenMultiChoice] = React.useState(false);
  const handleClickOpenMutliChoice = () => {
    setOpenMultiChoice(true);
  };
  const handleCloseMutliChoice = () => {
    setOpenMultiChoice(false);
  };

  const [openShortAnswer, setOpenShortAnswer] = React.useState(false);
  const handleClickOpenShortAnswer = () => {
    setOpenShortAnswer(true);
  };
  const handleCloseShortAnswer = () => {
    setOpenShortAnswer(false);
  };

  const [openLongAnswer, setOpenLongAnswer] = React.useState(false);
  const handleClickOpenLongAnswer = () => {
    setOpenLongAnswer(true);
  };
  const handleCloseLongAnswer = () => {
    setOpenLongAnswer(false);
  };

  const [valueSingleOrMulti, setValueSingleOrMulti] = React.useState('single');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueSingleOrMulti((event.target as HTMLInputElement).value);
  };

  const MulList = [
    { id: 1, question: '선지1' },
    { id: 2, question: '선지2' },
    { id: 3, question: '선지3' },
  ];

  return (
    <div>
      <h2>자기소개서 양식 작성</h2>
      <h3>지원서 내 자기소개서 질문과 양식을 작성해주세요.</h3>

      <div>
        <div className="explain_notice">
          <div>단답형 글자 수 제한 : 50자</div>
          <div>서술형 글자 수 제한 : 500자</div>
        </div>

        <div className="explain_notice explain_notice_bold">
        <div>
          질문 형식은 <span>객관식, 단답형, 서술형</span> 3가지가 있습니다.
        </div>
        <div>
          서술형 질문은 <span>최대 10개까지</span> 생성할 수 있습니다.
        </div>
        <div>
          객관식 문제는 <span>단일 선택형, 복수 선택형</span> 중 선택할 수
          있습니다.
        </div>
        </div>
      </div>

      <div className="buttons_typechoice">
        <button id="button7B" className="buttons_7B" onClick={handleClickOpenMutliChoice}>
          <div className="font_7B_1">객관식</div>
          <div className="font_7B_2">질문 추가</div>
        </button>
        <button id="button7B" className="buttons_7B" onClick={handleClickOpenShortAnswer}>
          <div className="font_7B_1">단답형</div>
          <div className="font_7B_2">질문 추가</div>
        </button>
        <button id="button7B" className="buttons_7B" onClick={handleClickOpenLongAnswer}>
          <div className="font_7B_1">서술형</div>
          <div className="font_7B_2">질문 추가</div>
        </button>
      </div>

      <div>
        <div className="semititle">추가한 질문</div>
        <div className="recruit_question">
          <div className="recruit_question_number">
            1.{' '}
          </div>
          <div className="recruit_question_type">
            서술형 
          </div>
          <div className="recruit_question_content"> 
            TAVE에 지원한 동기를 작성해주세요. <span>*</span>
          </div>
          <div ><button id="button6W_smaller" className="buttons_6">수정</button>
          <button id="button6R_smaller" className="buttons_6">삭제</button></div>
        </div>
        <div className="recruit_question">
          <div className="recruit_question_number">
            2.{' '}
          </div>
          <div className="recruit_question_type">
            서술형
          </div>
          <div className="recruit_question_content">
            4차 산업 혁명에 관심을 가지게 된 계기를 알려주세요.{' '}
            <span>*</span>
          </div>
          <div ><button id="button6W_smaller" className="buttons_6">수정</button>
          <button id="button6R_smaller" className="buttons_6">삭제</button></div>
        </div>
      </div>

      <div>
        <div className="semititle additional_top_space">개인 정보 열람 목록</div>

        <div className="privacylist">
          <div className="explain_notice explain_notice_move1">동아리에서 열람할 개인정보 목록을 선택해주세요.
          열람 정보 제공 동의는 지원자가 지원서 작성 시 하게 됩니다.</div>
        <div>
          <label>
            <input type="checkbox" name="Python" value="name" />
            이름
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="Python" value="sex" />
            성별
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="Python" value="img" />
            사진
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="Python" value="academic" />
            학적
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="Python" value="birth" />
            생년월일
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="Python" value="phone" />
            전화번호
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="Python" value="email" />
            이메일 주소
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="Python" value="address" />
            주소
          </label>
        </div>
        </div>
      </div>

      <div>
        <div className="semititle additional_top_space">면접 시간 설정</div>
        <div className="explain_notice explain_notice_move2">
          면접 가능 시간을 미리 설정하면 지원자가 지원서 작성 시 본인에게 가능한
          시간을 선택할 수 있습니다.
        </div>
        <div className="smalltitle">날짜 입력</div>
        <div className="recruit_interview_slots">
          <input
            type="date"
            className="putin_interview_slots"
            name="년"
            max="2001-01-01"
            min="1979-12-31"
            //   onChange={dateChange}
            //   value={date}
          />
          <button id="button6B" className="givemargin">입력</button>
          <div>{'시간 목록 띄우기'}</div>
        </div>
        <div className="smalltitle">
          시간 입력 <span>  * 면접 시작 시간을 입력해주세요.</span>
        </div >
        <div className="recruit_interview_slots2">
          <input
          className="putin_interview_slots"
          type="time"
          defaultValue="07:30"
          name="시"
          />
          <div className="wave">~</div>
          <input
          className="putin_interview_slots"
          type="time"
          defaultValue="07:30"
          name="시"
          />
          <button id="button6B" className="givemargin">입력</button>
        
        <div>{'시간 목록 띄우기'}</div></div>
      </div>

      <div>
        <div className="smalltitle">
          면접 진행 시간 <span>* 한 면접 당 배정 될 시간을 입력해주세요.</span>
        </div>
        <div className="recruit_choose"><Select className="recruit_choosetime" defaultValue="분" >
        <option aria-label="minute" value="5" />
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
        <option value={35}>35</option>
        <option value={40}>40</option>
        <option value={45}>45</option>
        <option value={50}>50</option>
        <option value={55}>55</option>
        <option value={60}>60</option>
        </Select>
        <div>분</div></div>
      </div>

      <div>
        <div className="smalltitle">
          면접 중간 쉬는 시간{' '}
          <span>* 면접 사이의 쉬는 시간을 입력해주세요.</span>
        </div>
        <div className="recruit_choose">
          <Select className="recruit_choosetime" defaultValue="분" >
        <option aria-label="minute" value="5" />
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
        <option value={35}>35</option>
        <option value={40}>40</option>
        <option value={45}>45</option>
        <option value={50}>50</option>
        <option value={55}>55</option>
        <option value={60}>60</option>
        </Select>
        <div>분</div>
        </div>
      </div>

      <div className="recruit_bottombuttons">
        <button id="button5W" className="recruit_bottombutton">임시저장</button>
        <button id="button5B" className="recruit_bottombutton">제출하기</button>
      </div>

      <Dialog 
        open={openMultiChoice}
        onClose={handleCloseMutliChoice}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className="rec_dig_title" id="form-dialog-title">객관식 질문 추가하기</DialogTitle>
        <DialogContent>
          <TextField
            placeholder="질문을 입력하세요."
            autoFocus
            margin="dense"
            id="name"
            label="질문 입력하기"
            type="text"
            fullWidth
          />
          <div>
            <FormLabel component="legend" className="rec_dig_semititle">단일/복수 선택</FormLabel>
            <div className="rec_dig_explain">단일 선택형: 하나의 선지만 선택이 가능합니다.</div>
            <div className="rec_dig_explain">복수 선택형: 여러 개의 선지 선택이 가능합니다.</div>
          </div>
          <RadioGroup className="rec_dig_radio"
            aria-label="gender"
            name="gender1"
            value={valueSingleOrMulti}
            onChange={handleChange}
          >
            <FormControlLabel value="single" control={<Radio />} label="단일" />
            <FormControlLabel value="multi" control={<Radio />} label="복수" />
          </RadioGroup>
          <div>
            <FormLabel component="legend" className="rec_dig_semititle">선지 입력</FormLabel>
            <div className="rec_dig_explain">질문에 대한 선지를 작성해주세요.</div>
          </div>
          <div className="rec_dig_input">
            <input className="rec_dig_placeholder" type="text" placeholder="선지를 입력하세요."></input>
            <button id="button6B_smaller">입력</button>
          </div>
          <div >
            {MulList.map((item) => {
              return (
                <div className="rec_dig_put" key={item.id}>
                  {item.question}
                  <button className="rec_dig_putbtn" id="button6B_smaller">삭제</button>
                </div>
              );
            })}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseMutliChoice} color="primary">
            닫기
          </Button>
          <Button onClick={handleCloseMutliChoice} color="primary">
            저장
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openShortAnswer}
        onClose={handleCloseShortAnswer}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className="rec_dig_title" id="form-dialog-title">단답형 질문 추가하기</DialogTitle>
        <DialogContent>
          <TextField
            placeholder="질문을 입력하세요."
            autoFocus
            margin="dense"
            id="name"
            label="질문 입력하기"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseShortAnswer} color="primary">
            닫기
          </Button>
          <Button onClick={handleCloseShortAnswer} color="primary">
            저장
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openLongAnswer}
        onClose={handleCloseLongAnswer}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className="rec_dig_title" id="form-dialog-title">서술형 질문 추가하기</DialogTitle>
        <DialogContent>
          <TextField
            placeholder="질문을 입력하세요."
            autoFocus
            margin="dense"
            id="name"
            label="질문 입력하기"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLongAnswer} color="primary">
            닫기
          </Button>
          <Button onClick={handleCloseLongAnswer} color="primary">
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProcessForm;
