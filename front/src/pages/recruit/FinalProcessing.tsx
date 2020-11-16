import React, { useState } from 'react'

const FinalProcessing = () => {
    const temporalList:any = [{name:"한채은"},{name:"한채은"},{name:"한채은"},{name:"한채은"},]
    return (
        <div>
            <div>
                <h2>최종 합격자 저장</h2>
                                <p>합격자들이 동아리 회비, MT비 등의 돈을 모두 입금 완료했을 시 최종 합격자들로 동아리 부원에 추가해보세요.  
                은행에서 제공하는 입금 엑셀 파일을 업로드하면 자동으로 입금 인원이 분류됩니다. (입금 완료, 미입금, 입금 오류)
                입금 여부는 수동적으로도 변경이 가능합니다. 직접 입금 완료/미입금/입금 오류 버튼을 눌러 변경할 수 있습니다. 
                </p>
            </div>
            <div>
                <div>
                    <span>임시 합격자 목록</span>
                    <em>총 33명중 23명</em>
                    <label htmlFor="">
                        <select name="" id="">
                            <option value="입금완료순">입금완료순</option>
                        </select>
                    </label>
                    <h2><button type="button">엑셀</button></h2>
                </div>

                <div>
                    <ul>
                        {temporalList.map((info:any)=>{
                             return(
                                <li>
                                    <input type="checkbox" />
                                    <h3>{info.name}</h3>
                                    <button>입금완료</button>
                                    <button>상세보기</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div>
            <button type ="submit">부원 최종 등록</button>
            </div>
        </div>
    )
}

export default FinalProcessing
