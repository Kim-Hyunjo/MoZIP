import React, { useState } from 'react'

const FinalProcessing = () => {
    const temporalList:any = [{name:"한채은"},{name:"한채은"},{name:"한채은"},{name:"한채은"},]
    return (
        <div className="final">
            <div>
                <h2>최종 합격자 저장</h2>
                <h4>합격자들이 동아리 회비, MT비 등의 돈을 모두 입금 완료했을 시 최종 합격자들로 동아리 부원에 추가해보세요.<br></br>  
                은행에서 제공하는 입금 엑셀 파일을 업로드하면 자동으로 입금 인원이 분류됩니다. (입금 완료, 미입금, 입금 오류)<br></br>
                입금 여부는 수동적으로도 변경이 가능합니다. 직접 입금 완료/미입금/입금 오류 버튼을 눌러 변경할 수 있습니다. 
                </h4>
            </div>
            <div>
                
                <div className="middle_title">임시 합격자 목록</div>
                <div className="paidNum">총 33명중 23명</div>
                    <div className="right">
                        <label htmlFor="">
                            <select name="" id="">
                                <option value="입금완료순">입금완료순</option>
                            </select>
                        </label>
                        <button type="button">엑셀</button>
                    </div>

                <div>
                    <ul className="finalList">
                        {temporalList.map((info:any)=>{
                             return(
                                <li className="finalPerson">
                                    <input type="checkbox" />
                                    {info.name}
                                    <div className="twoButtons">
                                        <button id="button4">입금완료</button>
                                        <button id="button1">상세보기</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div>
            <button id="button_red" type ="submit">부원 최종 등록</button>
            </div>
        </div>
    )
}

export default FinalProcessing
