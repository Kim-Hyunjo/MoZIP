import React from 'react';
import './resume.css';

const PostInterviewPersonal = () => {
    const info = [{
      name:'한채은',
      school:"테이브 대학교",
      grade:'3학년',
      date: '2001.07.07',
      phone:'010-0000-0000',
      city:'서울시 강남구'
    }]
    const selfIntoduction =[{question:'우리 동아리에 지원하게 된 동기를 말씀해 주세요.', answer:'TAVE가 킹왕짱이기 때문입니다.'},{question:'우리 동아리에 지원하게 된 동기를 말씀해 주세요.', answer:'TAVE가 킹왕짱이기 때문입니다.'},{question:'우리 동아리에 지원하게 된 동기를 말씀해 주세요.', answer:'TAVE가 킹왕짱이기 때문입니다.'},{question:'우리 동아리에 지원하게 된 동기를 말씀해 주세요.', answer:'TAVE가 킹왕짱이기 때문입니다.'}]
    
    return (
        <div className="record">
            <h2>지원자 지원서 정보</h2>
            <h4>지원자의 정보 및 자기소개서를 확인해보세요.</h4>
                <form action="">
                    <label htmlFor=""></label>
                      <div className="paperScore">점수 총점 : 90점</div>
                      <div className="gray_namecard">
                          <div>
                              <span>프로필 사진</span>
                              <div className="right_side">
                              <ul>

                                  <li className="name">{info[0].name}</li>
                                  <li>{info[0].school}{info[0].grade}</li>
                                  <li>{info[0].date}</li>
                                  <li>{info[0].phone}</li>
                                  <li>{info[0].city}</li>
                              </ul>
                              </div>
                          </div>
                      </div>
                      <div>
                      <div className="small_title">자기소개서</div>
                      <form action="">
                      <ul>
                          {selfIntoduction.map((info)=>{
                              return(
                                  <div className="small_gray_namecard">
                                    <li><div className="resumeQuestion">{info.question}</div>
                                        <div className="resumeAnswer">{info.answer}</div>
                                        <div className ="answerScore"><span>5점</span></div>
                                    </li>
                                  </div>
                              )
                          })}
                      </ul>
                      </form>
                      
                      <div className="small_title">면접 질문</div>
                      <div className="small_gray_namecard">
                        <div className="interviewQuestion">간단히 자기소개 부탁드립니다.</div>
                        <div className="interviewAnswer">저는 저입니다.</div>
                        <div className ="answerScore"><span>3점</span></div>
                      </div>
                      <div className="small_gray_namecard">
                        <div className="interviewQuestion">간단히 자기소개 부탁드립니다.</div>
                        <div className="interviewAnswer">저는 저입니다.</div>
                        <div className ="answerScore"><span>3점</span></div>
                      </div>
                      <div className="small_gray_namecard">
                        <div className="interviewQuestion">간단히 자기소개 부탁드립니다.</div>
                        <div className="interviewAnswer">저는 저입니다.</div>
                        <div className ="answerScore"><span>3점</span></div>
                      </div>
                      <div className="small_gray_namecard">
                        <div className="interviewQuestion">간단히 자기소개 부탁드립니다.</div>
                        <div className="interviewAnswer">저는 저입니다.</div>
                        <div className ="answerScore"><span>3점</span></div>
                      </div>
                    </div> 
              </form>
              <div className="post_twoButtons">
                  <button id="button1">수정하기</button>
                  <button id="button1_blue">돌아가기</button>
              </div>
        </div>
    )
}

export default PostInterviewPersonal
    