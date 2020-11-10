// use.tsx는임시이름

import React, { useEffect, useState } from 'react'
import axios from "axios";
const Use = () => {
    const [todo, setTodo1] = useState<string[]>([]);

  
    async function getTodo1 (){
     await axios.get("https://skhu-pwk.firebaseio.com/todo1.json").then((r) => {
       setTodo1(r.data);
       console.log(r.data);
       
     })
     console.error("solve_problem");
     console.log(todo);
   };
 
   useEffect(() => {
     getTodo1();
   }, []);
 
   return (
     
      <div> <p>왕희도 Test</p>
      <p>{todo.map((todo) => {
        return <div>{todo}</div>;
      })}</p>
    </div>
   );
 };

export default Use
