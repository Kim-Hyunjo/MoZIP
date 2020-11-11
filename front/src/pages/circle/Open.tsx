import React, { useState } from 'react';
import axios from 'axios';
// import {Typography, Button , Form, message, Input, Icon} from 'antd'
import Dropzone from 'react-dropzone';
import './circle.css';

const Open = () => {
  
    const [name, setname] = useState<string>('')
    const [shortIntroduction, setshortIntroduction] = useState<string>('')
    const [date, setdate] = useState<string>('2000-01-01')
    const [phone, setphone] = useState<string>('')
    const [introduction, setintroduction] = useState<string>('')

  const nameChange: any = (e: Event): any => {
    setname((e.currentTarget as any).value);
  };
  const shortIntroductionChange: any = (e: Event): any => {
    setshortIntroduction((e.currentTarget as any).value);
  };
  const dateChange: any = (e: Event): any => {
    setdate((e.currentTarget as any).value);
  };
  const phoneChange: any = (e: Event): any => {
    setphone((e.currentTarget as any).value);
  };
  const onIntroductionChange: any = (e: Event): any => {
    setintroduction((e.currentTarget as any).value);
  };

  const onDrop = (files: any): any => {
    let formData = new FormData();
    const config: any = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);
    axios.post('/', formData, config).then((r: any) => {
      if (r.data.success) {
        console.log(r.data);
      } else {
        alert('업로드실패');
      }
    });
  };

  const handleSubmit: any = (e: Event) => {
    e.preventDefault();
    console.log(name, shortIntroduction, date, phone, introduction);
    axios
      .post('https://skhu-pwk.firebaseio.com/todo1.json', {
        name,
        shortIntroduction,
        date,
        phone,
        introduction,
      })
      .then((r) => {
        console.log(r);
        setname('');
        setshortIntroduction('');
        setdate('');
        setphone('');
        setintroduction('');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <h2>동아리 개설하기</h2>
        <p>
          <span>
            MOZIP에 동아리를 등록하려면 운영자의 승인이 있어야합니다. 아래의
            양식을 채워 제출하시면 확인 후 등록해드리겠습니다. 등록은 3~5일 정도
            소요 될 예정입니다.
          </span>
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} method="post" noValidate>
          <div className="파일업로드">
            <Dropzone onDrop={onDrop} multiple={false} maxSize={100000000}>
              {({ getRootProps, getInputProps }) => (
                <div
                  style={{
                    width: '300px',
                    height: '240px',
                    border: '1px solid lightgray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                </div>
              )}
            </Dropzone>
          </div>
          <div className="동아리명">
            <label htmlFor="firstName">동아리명 :</label>
            <input
              type="text"
              className=""
              placeholder="동아리이름을 입력하세요"
              name="동아리명"
              onChange={nameChange}
              value={name}
            />
          </div>
          <div className="한 줄 소개">
            <label htmlFor="firstName">한 줄 소개 :</label>
            <input
              type="text"
              className=""
              placeholder="동아리에 대한 짧은 소개를 입력하세요."
              name="한 줄 소개"
              onChange={shortIntroductionChange}
              value={shortIntroduction}
            />
          </div>
          <div className="창립일자">
            <label htmlFor="firstName">창립일자 :</label>
            <input
              type="date"
              className=""
              name="년"
              max="2001-01-01"
              min="1979-12-31"
              onChange={dateChange}
              value={date}
            />
          </div>
          <div className="대표 연락처">
            <label htmlFor="firstName">대표 연락처 :</label>
            <input
              type="text"
              placeholder="이메일/전화번호/카카오 아이디 모두 가능"
              onChange={phoneChange}
              value={phone}
            />
          </div>
          <div>
            <h3>상세 소개:</h3>
            <label htmlFor=""></label>
            <textarea
              name="상세소개"
              id=""
              cols={100}
              rows={20}
              onChange={onIntroductionChange}
              value={introduction}
            ></textarea>
          </div>
          <div className="태그선택">
            <label htmlFor=""></label>
            <select name="태그선택" id="태그선택">
              <option value="미선택">미선택</option>
            </select>
          </div>
          <button type="submit">제출</button>
        </form>
      </div>
    </div>
  );
};

export default Open;
