// import React, { useState } from 'react'
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Switch,
//     NavLink,
// } from 'react-router-dom';
// import CircleMembersEditSubmaster from './CircleMembersEditSubmaster'
// import CircleMembersEditMaster from './CircleMembersEditmaster'
// import CircleMembersEditTech from './CircleMembersEditTech'
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import CircleMembersEditModalGuestList from './CircleMembersEditModalGuestList'


// function getModalStyle() {
//     const top = 50
//     const left = 50

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         paper: {
//             position: 'absolute',
//             width: 1200,
//             height: 800,
//             backgroundColor: theme.palette.background.paper,
//             border: '2px solid #000',
//             boxShadow: theme.shadows[5],
//             padding: theme.spacing(2, 4, 3),
//             display: 'flex'
//         },
//     }),
// );
// interface Role {
//     id: number,
//     name: string
//     status: string,
//     content: string
// }
// const CircleMembersEdit = () => {
//     const [master, setMaster] = useState<Role[]>([
//         {
//             id: 0, name: '최우영', status: '회장', content: '프로필 사진'
//         },
//     ]);
//     const [submaster, setSubMaster] = useState<Role[]>([
//         {
//             id: 0, name: '박웅기', status: '부회장', content: '프로필 사진'
//         },
//     ]);

//     const [tech, setTech] = useState<Role[]>([
//         { id: 0, name: '왕희도', status: '기술', content: '프로필 사진' },
//         { id: 1, name: '박웅기', status: '기술', content: '프로필 사진' },
//         { id: 2, name: '한채은', status: '기술', content: '프로필 사진' },
//         { id: 3, name: '한예송', status: '기술', content: '프로필 사진' },

//     ]);
//     const [guests, setGuest] = useState<any>([
//         { id: 2, name: '한채은', status: '회원', content: '프로필 사진' },
//         { id: 3, name: '왕희도', status: '회원', content: '프로필 사진' },
//         { id: 4, name: '박웅기', status: '회원', content: '프로필 사진' },
//         { id: 5, name: '한예송', status: '회원', content: '프로필 사진' },
//         { id: 6, name: '한예송', status: '회원', content: '프로필 사진' },
//     ])
//     const onRemove = () => {

//     }
//     const masterList = master.map((item) => {

//         return (
//             <div key={item.id}>
//                 <CircleMembersEditMaster
//                     propsRole={item} />

//             </div>
//         )

//     })

//     const submasterList = submaster.map((item) => {
//         return (

//             <div key={item.id}>
//                 <CircleMembersEditSubmaster
//                     propsRole={item} />

//             </div>

//         )
//     })
//     const techList = tech.map((item, index) => {
//         return (
//             <div key={item.id}>
//                 <CircleMembersEditTech
//                     propsRole={item}
//                     tech={tech}
//                     setTech={setTech}
//                     index={index}
//                 />

//             </div>

//         )


//     })
//     const [temporarySelect, settemporarySelect] = useState([])

//     const handelSelect:any = (e: React.MouseEvent)=>{
//         let tempor:any = []
//         guests.map((guest:any,index:any)=>{
//         if(guest.id !== index){
//         }else{
//             console.log('error')
//         }
//         })
//     }
//     const guestList = guests.map((item: any, index: any) => {

//         return (
//             <>
            
//             <div key={item.id}>

//                 <CircleMembersEditModalGuestList
//                     eachGuest={item}
//                     guests={guests}
//                     setTech={setTech}
//                     index={index}
                    
//                 />
//                 <button onClick={handelSelect}>+</button>
//             </div>
        
//         </>)
//     })
//     const classes = useStyles();
//     // getModalStyle is not a pure function, we roll the style only on the first render
//     const [modalStyle] = React.useState(getModalStyle);
//     const [open, setOpen] = React.useState(false);

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };
//     const handleAdd = (copyGuest: any) => {
//         setOpen(false);

//     }
//     const body = (
//         <div style={modalStyle} className={classes.paper}>
//             {guestList}
//             {/* <SimpleModal /> */}
//             <button id="button4" onClick={handleClose} >취소</button>
//             <button id="button4" type="submit" onClick={handleAdd}>추가</button>
//         </div>
//     );


//     return (
//         <div className="circleMembers">
//             <div><h2>운영진수정</h2>
//                 <h4>
//                     내 동아리의 운영진 명단을 수정해보세요.<br></br>
//                 동아리 부원 권한 단계는 소유자(회장), 관리자(운영진), 회원 총 3가지입니다. <br></br>
//                 Owner의 경우 명칭만 변경 가능하며, 1명으로 고정되어있습니다. 권한을 넘김으로써 회장을 변경할 수 있습니다.<br></br>
//                 Manager의 경우 명칭을 변경할 수 있으며 직책의 수를 변경할 수 있습니다. 직책 및 인원 추가를 통해 변경
//                 가능합니다.<br></br>
//                 구체적인 내용은 guide 페이지에서 확인하실 수 있습니다.
//                 </h4>
//             </div>
//             <div className="members_title">운영진</div>
//             <div>
//                 <ul className="membersKind">
//                     <li>회장</li>
//                     <li>부회장</li>
//                     <li>기술처</li>
//                     <li>회계</li>
//                     <li><button id="button_plus" type="button">+</button></li>
//                 </ul>
//             </div>
//             <div style={{ display: 'flex' }} >
//                 <div className="roleName">회장 (관리자)</div>
//                 {masterList}
//             </div>
//             <div style={{ display: 'flex' }}>
//                 <div className="roleName">부회장(관리자)</div>
//                 {submasterList}
//             </div>
//             <div style={{ display: 'flex' }}>
//                 <div className="roleName">기술(관리자)</div>
//                 <div>
//                     <button type="button" onClick={handleOpen} className="changeOwner">
//                         인원 추가
//             </button>
//                     <Modal
//                         open={open}
//                         onClose={handleClose}
//                         aria-labelledby="simple-modal-title"
//                         aria-describedby="simple-modal-description"
//                     >
//                         {body}
//                     </Modal>
//                 </div>
//                 {techList}
                
//             </div>

//             <button id="button4" type="submit">완료</button>
//         </div>
//     )
// }

// export default CircleMembersEdit;
// import React,{useState} from 'react'
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Switch,
//     NavLink,
//   } from 'react-router-dom';
// import CircleMembersEditSubmaster from './CircleMembersEditSubmaster'
// import CircleMembersEditmaster from './CircleMembersEditmaster'
// import CircleMembersEditTech from './CircleMembersEditTech'
// import CircleMembersEditModal from './CircleMembersEditModal'
//   interface Role {
//       id: number,
//       name: string
//       status: string,
//       content:string
//   }
// const CircleMembersEdit = () => {
//     const [master, setMaster] = useState<Role[]>([
//         {
//             id: 0, name:'최우영', status:'회장',content:'프로필 사진'
//         },
//     ]);
//     const [submaster, setSubMaster] = useState<Role[]>([
//         {
//             id: 0, name:'박웅기', status:'부회장',content:'프로필 사진'
//         },
//     ]);

//     const [tech, setTech] = useState<Role[]>([
//         {id: 0, name:'왕희도', status:'기술',content:'프로필 사진'},
//         {id: 1, name:'왕희도', status:'기술',content:'프로필 사진'
//         },
//     ]);
//         const masterList = master.map((item) =>{
//             return(
//                 <CircleMembersEditmaster
//                 propsRole={item}/>
//             )
//         })
    
//         const submasterList = submaster.map((item) =>{
//             return(
//                 <CircleMembersEditSubmaster
//                 propsRole={item}/>
//             )
//         })
//         const techList = tech.map((item) =>{
//             return(
//                 <CircleMembersEditTech
//                 propsRole={item}/>
//             )
//         })
        

//     return (
//         <div className="circleMembers">
//             <div><h2>운영진수정</h2>
//                 <h4>
//                 내 동아리의 운영진 명단을 수정해보세요.<br></br>
//                 동아리 부원 권한 단계는 소유자(회장), 관리자(운영진), 회원 총 3가지입니다. <br></br>
//                 Owner의 경우 명칭만 변경 가능하며, 1명으로 고정되어있습니다. 권한을 넘김으로써 회장을 변경할 수 있습니다.<br></br>            
//                 Manager의 경우 명칭을 변경할 수 있으며 직책의 수를 변경할 수 있습니다. 직책 및 인원 추가를 통해 변경 
//                 가능합니다.<br></br>
//                 구체적인 내용은 guide 페이지에서 확인하실 수 있습니다.
//                 </h4>
//             </div>
//             <div className="members_title">운영진</div>
//             <div>
//                 <ul className="membersKind">
//                     <li>회장</li>
//                     <li>부회장</li>
//                     <li>기술처</li>
//                     <li>회계</li>
//                     <li><button  id = "button_plus" type="button">+</button></li>
//                 </ul>
//             </div>
//             <div style={{display:'flex'}}>
//                 {masterList}
//             </div>
//             <div style={{display:'flex'}}>
//             {submasterList}

//             </div>
//             <div style={{display:'flex'}}>
//                  {techList}
                
//             </div>
            
//             <button id="button4" type="submit">완료</button>
//         </div>
//     )
// }

// export default CircleMembersEdit

import React from 'react'
 import {
     BrowserRouter as Router,
     Route,
     Link,
     Switch,
     NavLink,
   } from 'react-router-dom';

  const CircleMembersEdit = () => {
     return (
         <div>
             <div><h2>운영진수정</h2></div>
             <div>
                 <p>
                 내 동아리의 운영진 명단을 수정해보세요.

                  동아리 부원 권한 단계는 소유자(회장), 관리자(운영진), 회원 총 3가지입니다. 
                 Owner의 경우 명칭만 변경 가능하며, 1명으로 고정되어있습니다. 권한을 넘김으로써 회장을 변경할 수 있습니다.            
                 Manager의 경우 명칭을 변경할 수 있으며 직책의 수를 변경할 수 있습니다. 직책 및 인원 추가를 통해 변경 
                 가능합니다.
                 구체적인 내용은 guide 페이지에서 확인하실 수 있습니다.
                 </p>
             </div>
             <div><h3>운영진</h3></div>
             <div>
                 <ul>
                     <li>회장</li>
                     <li>부회장</li>
                     <li>기술처</li>
                     <li>회계</li>
                     <button type="button">+</button>
                 </ul>
             </div>
             <div>
                 <h3>회장 (owner)</h3>
                 <a href="#">권한 넘기기</a>
                 <div><h3>최우영</h3><strong>회장</strong><span>프로필 사진</span></div>
             </div>
             <div>
                  <h3>부회장 (관리자)</h3>
                 <a href="#">인원 추가</a>
                 <div><h3>최우영</h3><strong>회장</strong><span>프로필 사진</span></div>
                 <button type="button">x</button>
             </div>
             <div>
                  <h3> 기술처 (관리자)</h3>
                 <a href="#">권한 추가</a>
                 <div><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span><button type="button">x</button></div>
                 <div><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span><button type="button">x</button></div>
                 <div><h3>최우영</h3><strong>기술</strong><span>프로필 사진</span><button type="button">x</button></div>
             </div>
             <button type="submit">완료</button>
         </div>
     )
 }

  export default CircleMembersEdit