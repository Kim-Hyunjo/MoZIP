import React, { useState } from 'react';

const InterviewPostprocessing = () => {
    const [selfIntroduction, setselfIntroduction]:any = useState([{question:'우리 동아리에 지원하게 된 동기를 말씀해 주세요.',answer:'Tave가 킹왕짱이기 때문입니다.'},{question:'우리 동아리에 지원하게 된 동기를 말씀해 주세요.',answer:'Tave가 킹왕짱이기 때문입니다.'},{question:'우리 동아리에 지원하게 된 동기를 말씀해 주세요.',answer:'Tave가 킹왕짱이기 때문입니다.'},{question:'우리 동아리에 지원하게 된 동기를 말씀해 주세요.',answer:'Tave가 킹왕짱이기 때문입니다.'}])
    const [interviewDetail, setinterviewDetail] = useState([{question:'1.간단히 자기소개 부탁드립니다.', answer:"저는 저입니다"},])
    return (
        <div>
            <div>
                <h2>지원자 지원서 정보</h2>
                <p>지원자의 정보 및 자기소개서를 확인해보세요.</p>
            </div>
            <div>
                <h3>한채은</h3>
                 <span>점수 총점: 10점</span>
                 <div>
                    <h4>프로필 사진</h4>
                    <p>한채은
                        <br/>
                        테이브 대학교 3학년
                        <br/>
                        2001.07.07
                        <br/>
                        010-0000-0000
                        <br/>
                        tave._.wave@naver.com
                        <br/>
                        서울시 강남구
                    </p>
                 </div>
            </div>
            <div>
                <h3>자기소개서</h3>
                <div>
                    
                        {selfIntroduction.map((info:any)=>{
                            return(
                                <>
                                <ul>
                                <li>{info.question}</li>
                                <li>{info.answer}</li>
                                </ul>
                                </>
                            )
                        })}
                        
                </div>
            </div>
            <div>
                <h3>면접 상세</h3>
                <div>
                    {interviewDetail.map((info:any)=>{
                                return(
                                    <>
                                    <ul>
                                    <li>{info.question}</li>
                                    <li>{info.answer}</li>
                                    </ul>
                                    </>
                                )
                            })}
                </div>
            </div>
        </div>
    )
}

export default InterviewPostprocessing
