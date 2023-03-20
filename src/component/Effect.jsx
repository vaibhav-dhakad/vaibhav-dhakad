import React ,{useState,useEffect} from 'react'


export default function Effect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        prompt('h')
      },[]);
  
  return (
    <div>
   <button onClick={()=>{
    setCount(count+1)

     }}>{count}</button>
      
    </div>
  )
}
