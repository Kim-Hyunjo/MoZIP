import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ProcessForm = () => {
  return (
    <div>
      <h2>자기소개서 양식 작성</h2>
      <div>지원서 내 자기소개서 질문과 양식을 작성해주세요.</div>

      <div>
        <div>단답형 글자 수 제한 : 50자</div>
        <div>서술형 글자 수 제한 : 500자</div>

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

      <div>
        <button>
          <div>객관식</div>
          <div>질문 추가</div>
        </button>
        <button>
          <div>단답형</div>
          <div>질문 추가</div>
        </button>
        <button>
          <div>서술형</div>
          <div>질문 추가</div>
        </button>
      </div>

      <div>
        <div>추가한 질문</div>
        <div>
          <input type="checkbox" name="Python" value="대학생" />
          1.{' '}
          <span>
            서술형 TAVE에 지원한 동기를 작성해주세요. <span>*</span>
          </span>
          <button>수정</button>
        </div>
        <div>
          <input type="checkbox" name="Python" value="대학생" />
          2.{' '}
          <span>
            서술형 4차 산업 혁명에 관심을 가지게 된 계기를 알려주세요.{' '}
            <span>*</span>
          </span>
          <h2>나머지 틀 추가 작성해주세요.</h2>
          <button>수정</button>
        </div>
      </div>

      <div>
        <h2>개인 정보 열람 목록</h2>
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

      <div>
        <h2>면접 시간 설정</h2>
        <div>
          면접 가능 시간을 미리 설정하면 지원자가 지원서 작성 시 본인에게 가능한
          시간을 선택할 수 있습니다.
        </div>
        <div>날짜 입력</div>
        <div>
          <input
            type="date"
            className=""
            name="년"
            max="2001-01-01"
            min="1979-12-31"
            //   onChange={dateChange}
            //   value={date}
          />
          <button>입력</button>
          <div>{'시간 목록 띄우기'}</div>
        </div>
        <div>
          시간 입력 <span>* 면접 시작 시간을 입력해주세요.</span>
        </div>
        <input type="date" />
        <h2>폼 안맞는거 알 맞게 바꿔주세요. 일단 틀만 만들게요</h2>
        <div>
          <input type="text" />
          <input type="text" />
          {' ~ '}
          <input type="text" />
          <input type="text" />
          <button>입력</button>
        </div>
        <div>{'시간 목록 띄우기'}</div>
      </div>

      <div>
        <div>
          면접 진행 시간 <span>* 한 면접 당 배정 될 시간을 입력해주세요.</span>
        </div>
        <input type="text" />
      </div>

      <div>
        <div>
          면접 중간 쉬는 시간{' '}
          <span>* 면접 사이의 쉬는 시간을 입력해주세요.</span>
        </div>
        <input type="text" />
      </div>

      <button>임시저장</button>
      <button>제출하기</button>
    </div>
  );
};

export default ProcessForm;
