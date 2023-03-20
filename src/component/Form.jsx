import React, {useState} from 'react'

export default function Form() {
  let [name, setname] = useState('');
const [fullName, setfullName] = useState('');
const inpEvt = (e)=>{
console.log(e.target.value);
setname(e.target.value)}

const sbmt = (e)=>{
  setfullName(name);
  e.preventDefault();
}
  return (
    <div>
      <center><h1 >Hello {fullName }</h1></center>
     <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" >Name</label>
    <input type="text"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={inpEvt}/>
    <div id="emailHelp" className="form-text">We're glad to have you here .</div>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={sbmt}>Submit</button>
</form> 
    </div>
  )
}
