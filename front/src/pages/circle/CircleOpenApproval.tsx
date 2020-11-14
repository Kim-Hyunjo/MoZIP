import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

const CircleOpenApproval = () => {
  return (
    <div>
      <div className="big_namecard">
        <div className="head_info">동아리가 승인되었습니다!</div>
        <div className="body_info">동아리를 등록해주셔서 감사합니다.<br/>
          <span>아래 공지사항을 필독해주시고</span> 바로 활동을 시작해보세요.<br/>
          등록한 동아리는 MyPage &#45;&#62; My 동아리에서 확인 가능합니다.<br/>
          동아리 모집 공고를 작성해서 부원 모집을 시작해보세요!<br/>
        </div>
      </div>

      <br />

      <div className="notice">
        <h2>공지사항</h2>
        <div className="noticeDetail">
          <div className="red">*원할한 활동을 위해 공지사항을 필독해주십시오.</div>
          본 내용은 <span>about 탭</span>에서 다시 확인할 수 있습니다.
        </div>
      </div>

      <br />

      <div>
        <div className="small_title">동아리 부원의 권한 단계</div>
        <div className="sortDetail">동아리 부원들의 권한 단계는 크게 3가지로 나뉩니다.</div>
        <table className="userSort">
          <tr>
            <td className ="userName">
              소유자<br></br>(회장)
            </td>
            <td className ="userDetail">
              소유자는 동아리의 총괄자이고, 1명만 등록 가능합니다. <br></br>
              회장이 1명 이상인 동아리의 경우 한 명만 소유자로 등록해주시고 <br></br>
              나머지는 관리자로 등록해주시길 바랍니다.
            </td>
          </tr>
          <tr>
            <td className ="userName">
              관리자<br></br>(운영진)
            </td>
            <td className ="userDetail">
              관리자는 동아리의 운영진들을 의미합니다. <br></br>
              (ex) 기술처, 총무, 팀장, 부회장 등) <br></br>
              부원 모집 과정에서 서류, 면접 등의 페이지들을 열람할 수 있습니다. 
            </td>
          </tr>
          <tr>
            <td className ="userName">
              일반 회원
            </td>
            <td className ="userDetail">
              일반 회원은 동아리에 등록된 회원들입니다. <br></br>
              부원 모집 과정에서 제공되는 페이지 열람 권한이 제한됩니다.
            </td>
          </tr>
        </table>
      </div>

      <br />

      <div>
        <div className="small_title">제한/제약 사항</div>
          <div className="restriction">
            <div>
              <span>1. </span>동아리의 소유자는 1명만 등록 가능합니다.
            </div>
            <div>
              <span>2. </span>1인당 3개의 동아리의 관리자로 있을 수 있습니다.
            </div>
            <div>
              <span>3. </span>관리자 명칭과 개수는 변경 가능하지만 소유자 명칭은
              변경이 불가합니다.
            </div>
            <div>
              <span>4. </span>일반 회원의 수는 제한되어 있지 않습니다.
            </div>
          </div>
      </div>

      <br />

      <div>
        <div className="small_title">부원 모집은 어떻게 하나요?</div>
        <table className="howToRecruit">
          <tr className ="num">
            <td>01</td>
            <td>02</td>
            <td>03</td>
            <td>04</td>
            <td>05</td>
          </tr>
          <tr className="howTitle">
            <td>모집 유형 선택</td>
            <td>모집 상세 작성</td>
            <td>지원서 작성</td>
            <td>서류 심사</td>
            <td>면접 조 생성<br></br>및 일정 관리</td>
          </tr>
          <tr className="howDetail">
            <td>
              서류 + 면접<br></br>
              서류<br></br>
              면접<br></br>
              3가지 중 선택
            </td>
            <td></td>
            <td>
              지원자를 위한 공지사항 +<br></br>자기소개서 문항 +<br></br>면접 시간 3가지로
              이루어짐
            </td>
            <td></td>
            <td>면접관 및 면접자 조 자동 배정</td>
          </tr>
          <div className="room"></div>
          <tr className ="num">
            <td>06</td>
            <td>07</td>
            <td>08</td>
            <td>09</td>
            <td>10</td>
          </tr>
          <tr className="howTitle">
            <td>서류 결과 발표</td>
            <td>면접 질문지 작성</td>
            <td>면접 진행</td>
            <td>합격 안내문 작성<br></br>및 최종 합격 발표</td>
            <td>회비 입금 및<br></br>부원 최종 등록</td>
          </tr>
          <tr className="howDetail">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              회비 입금을 모두 완료하면<br></br>Mo:ZIP에 최종 합격자들로<br></br>등록
              가능합니다.
            </td>
          </tr>
        </table>
      </div>

      <br />

      <div className="extraDetail">
          부원 모집 시작은 MyPage &#45;&#62; 내 동아리 &#45;&#62; 내 동아리 정보
          &#45;&#62; 모집 시작하기 버튼을 통해 가능합니다.
        <br></br>
          내 동아리 모집 현황은 MyPage &#45;&#62; My 동아리 &#45;&#62; <span className="blueUnder">내 동아리
          모집 현황 확인</span>에서 가능합니다.
      </div>

      <br />

      <div className="threeButtons">
        <Link to="/mypage">
          <button id="button9B">내 동아리 보러가기</button>
        </Link>
        <br></br>
        <Link to="/mypage">
          <button id="button9W">My Page로 가기</button>
        </Link>
        <br></br>
        <Link to="/mypage">
          <button id="button9W">모집 공고 작성하기</button>
        </Link>
      </div>
    </div>
  );
};

export default CircleOpenApproval;
