
import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import person1 from '../images2/member2@2x.png';
import person2 from '../images2/member3@2x.png';
import person3 from '../images2/member4@2x.png';
import person4 from '../images2/member5@2x.png';
import person5 from '../images2/member6@2x.png';

const Resume3 = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const manager = [
        { name: '최우영', select: '선택완료', timeSelect: '시간선택' },
        { name: '박웅기', select: '선택완료', timeSelect: '시간선택' },
        { name: '왕희도', select: '선택완료', timeSelect: '시간선택' },
        { name: '한채은', select: '선택완료', timeSelect: '시간선택' },
        { name: '김정우', select: '선택완료', timeSelect: '시간선택' },
        { name: '이하연', select: '선택완료', timeSelect: '시간선택' },
        { name: '김현조', select: '선택완료', timeSelect: '시간선택' },
        { name: '한예송', select: '선택완료', timeSelect: '시간선택' },
        { name: '홍길동', select: '선택완료', timeSelect: '시간선택' },
        { name: '이순신', select: '선택완료', timeSelect: '시간선택' },
        { name: '김철수', select: '선택완료', timeSelect: '시간선택' }]
    const division = [
        { group: '1조', date: '11월 28일', time: '오후 4~7시', total: '8' },
        { group: '2조', date: '11월 29일', time: '오후 4~7시', total: '8' },
        { group: '3조', date: '11월 30일', time: '오후 4~7시', total: '8' },
        { group: '4조', date: '12월 1일', time: '오후 4~7시', total: '8' },]
    return (
        <div className="resume">
            <div>
                <h2>면접관 조 관리</h2>
                <div className="small_title">면접관, 면접 시간, 면접 그룹, 면접 일시 등을 지정해보세요. 아래 정보를 입력해 자동으로 면접 조를 짜보세요.</div>

                <form action=""></form>
                <div className="setting">
                    <div className="title">면접 인원 관리</div>
                    <label htmlFor="">한 그룹 당 지원자 인원 : </label>
                    <input type="select" /> 명 <br></br>
                    <label htmlFor="">한 그룹 당 면접관 인원 : </label>
                    <input type="select" /> 명 <br></br>
                    <label htmlFor="">한 그룹 당 면접 시간 : 25분
                    </label>
                </div>
                <div className="setting">
                    <div className="title">면접 일시</div>
                    {/* <div className="interviewDate"><input type="checkbox" name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} /> 시 ~<input type="select"maxLength={2} /> 시</div>
                     <div className="interviewDate"><input type="checkbox" name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} /> 시 ~<input type="select"maxLength={2} /> 시</div>
                     <div className="interviewDate"><input type="checkbox" name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} /> 시 ~<input type="select"maxLength={2} /> 시</div> */}
                    <div className="interviewDate"><input type="checkbox" name="first" value="2020년 7월 18일 수요일" /><strong>2020년 7월 18일 수요일</strong>
                        <Select className="resume_choosetime" defaultValue="시">
                            <option aria-label="hour" value="16" />
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                        </Select> 시 ~
                    <Select className="resume_choosetime" defaultValue="시">
                            <option aria-label="hour" value="16" />
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                        </Select>  시</div>
                    <div className="interviewDate"><input type="checkbox" name="first" value="2020년 7월 18일 수요일" /><strong>2020년 7월 18일 수요일</strong>
                        <Select className="resume_choosetime" defaultValue="시">
                            <option aria-label="hour" value="16" />
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                        </Select>  시 ~
                    <Select className="resume_choosetime" defaultValue="시">
                            <option aria-label="hour" value="16" />
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                        </Select>  시</div>
                    <div className="interviewDate"><input type="checkbox" name="first" value="2020년 7월 18일 수요일" /><strong>2020년 7월 18일 수요일</strong>
                        <Select className="resume_choosetime" defaultValue="시">
                            <option aria-label="hour" value="16" />
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                        </Select>  시 ~
                    <Select className="resume_choosetime" defaultValue="시">
                            <option aria-label="hour" value="16" />
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                        </Select>  시</div>
                </div>
                <div className="width1000">
                    <div className="title">면접 가능한 운영진</div>
                    <div className="extraInform">
                        면접 가능한 운영진의 개인 일정에 따라 면접 가능한 시간을 설정해놓고 <br></br>
                        아래 "현재 상태로 면접 그룹 나누기" 버튼을 누르시면 자동으로 면접 조가 배정이 됩니다.
                    </div>
                    <div>
                        <ul className="adminList">
                            {manager.map((info) => {
                                return (
                                    <li className="tiny_gray_namecard">
                                        <div className="tiny_name">{info.name}</div>
                                        <div className="tiny_status">{info.select}</div>
                                        <Link to="/recruit/schedule/management/staff">
                                            <button id="buttonSelect">{info.timeSelect}</button></Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="twoButtons">
                        <button id="button1_blue">저장</button>
                        {/* <button id="button1">수정</button>  */}
                    </div>
                    <button onClick={() => setToggle(!toggle)} id="button10">면접 그룹 나누기</button>
                </div>


                <div>
                    {toggle ? (
                        <div>
                            <div className="title">면접 조 결과</div>
                            <ul>
                                <li className="tiny_gray_namecard">
                                    <div className="tiny_name">{division[0].group}</div>
                                    <div className="tiny_status">총 {division[0].total}명</div>
                                    <p>{division[0].date}<br></br>{division[0].time}</p>
                                </li>
                                <li className="tiny_gray_namecard">
                                    <div className="tiny_name">{division[1].group}</div>
                                    <div className="tiny_status">총 {division[1].total}명</div>
                                    <p>{division[1].date}<br></br>{division[1].time}</p>
                                </li>
                                <li className="tiny_gray_namecard">
                                    <div className="tiny_name">{division[2].group}</div>
                                    <div className="tiny_status">총 {division[2].total}명</div>
                                    <p>{division[2].date}<br></br>{division[2].time}</p>
                                </li>
                                <li className="tiny_gray_namecard">
                                    <div className="tiny_name">{division[3].group}</div>
                                    <div className="tiny_status">총 {division[3].total}명</div>
                                    <p>{division[3].date}<br></br>{division[3].time}</p>
                                </li>
                            </ul>
                            <div className="twoButtons">
                                <button id="button1_blue">임시저장</button>
                                <Link to="/recruit/schedule/management/detail"><button id="button1">자세히</button></Link>
                            </div>
                        </div>
                    ) : (
                            <div>

                            </div>
                        )}

                </div>
                {toggle ? (
                    <div className="result">
                        <div className="title">남은 인원: 5명</div>
                        <p>남은 인원은 '자세히'에 들어가 직접 시간을 지정해주세요.</p>
                        <div className="interview_leftover leftover_givespace">
                            <div className="tiny_gray_namecard display_horiz2">
                                <h4>김남음</h4>
                                <div className="clubImage100">
                                    <img
                                        src={person1}
                                        alt='profile image' />
                                </div>
                            </div>
                            <div className="tiny_gray_namecard display_horiz2">
                                <h4>박남음</h4>
                                <div className="clubImage100">
                                    <img
                                        src={person2}
                                        alt='profile image' />
                                </div>
                            </div>
                            <div className="tiny_gray_namecard display_horiz2">
                                <h4>이남음</h4>
                                <div className="clubImage100">
                                    <img
                                        src={person3}
                                        alt='profile image' />
                                </div>
                            </div>
                            <div className="tiny_gray_namecard display_horiz2">
                                <h4>오남음</h4>
                                <div className="clubImage100">
                                    <img
                                        src={person4}
                                        alt='profile image' />
                                </div>
                            </div>
                            <div className="tiny_gray_namecard display_horiz2">
                                <h4>권남음</h4>
                                <div className="clubImage100">
                                    <img
                                        src={person5}
                                        alt='profile image' />
                                </div>
                            </div>
                        </div>
                    </div>) : (<div></div>)}
                {toggle ? (<Link to="/recruit/resume"><button className="btn_submit_interview_group" id="button_red">면접 그룹 등록하기</button></Link>) : (<div></div>)}
            </div>
            {/* {toggle ? (<Link to="/recruit/resume"><button className="btn_submit_interview_group" id="button_red">면접 그룹 등록하기</button></Link>) : (<div></div>)} */}
        </div>
    )
}

export default Resume3
