import React from 'react'

const Resume2 = () => {
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
        <div className="resume">
            <div>
                <h2>지원자 지원서 정보</h2>
                <div className = "small_title">지원자의 정보 및 자기소개서를 확인해보세요. </div>
            </div>

            <div className="personScore">점수 총점 : 10점</div>
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
                <div className="title">자기소개서</div>
                <form action="">
                <ul>

                    {selfIntoduction.map((info)=>{
                        return(
                            <div className="small_gray_namecard">
                            <li><div className="resumeQuestion">{info.question}</div>
                                <div className="resumeAnswer">{info.answer}</div>
                                <label htmlFor=""></label>
                                <input type="number" min={10} max ={100}/>
                                <button id="button4">저장</button>
                            </li>
                            </div>
                        )
                    })}
                 
                </ul>
                </form>
            </div>
        </div>
    )
}

export default Resume2
