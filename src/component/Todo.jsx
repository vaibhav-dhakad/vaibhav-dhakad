
import React, { useState } from "react";

export default function Todo() {
  const [task, settask] = useState();
const [assign, setassign] = useState([]);
  let Onchange = (e) => {
    settask(e.target.value);
    
    console.log(task);
  };
let add = ()=>{
       setassign( [...assign,task])
       settask("")  
}
function deleted(id) {
    setassign((item)=>item.filter((arr,index)=>{
      return index!==id }))
  } 
return (
    <div>
      <h1>ADD TASK</h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={task}
          onChange={Onchange}
        ></textarea>
        <label htmlFor="floatingTextarea">title</label>
      </div>
     <button className="btn btn-dark" onClick={add}>Add</button>
<ol>{assign.map((value, index)=>{
     return <li key={index}>{value} 
     <button onClick={()=>deleted(index)}>delete</button></li>})}</ol>
    </div>
  );
}
