import React, { useState } from 'react'

export default function BgChange() {
  const [color, setcolor] = useState('red');
const [value, setvalue] = useState("Click Me");
const changeBg = ()=>{
    setvalue('Learning')
    setcolor('grey')
}
const bgback=()=>{
  setcolor('green')
  setvalue('Evolving')
}
  return(
  
    <>
    <div style={{backgroundColor:color}}>
    <div className="d-grid gap-2">
  <button className="btn btn-primary mt-5 mx-5" type="button" onClick={changeBg} onDoubleClick={bgback}>{value}</button>
</div> 
</div>
    </>
  )
}
