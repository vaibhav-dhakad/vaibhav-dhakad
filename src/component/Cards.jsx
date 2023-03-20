import React from "react";

export default function Cards(props) {
//   console.log(books);

// const carting = ()=>{
//   setcart(cart+1)
// }
const alot=(id)=>{
  return(
  props.state[0]=props.books[id]) 
  }
  return (
    <div >
    <div className="card" style={{'width': '20rem','height':'25rem'}} >
  <img src={props.img} style={{"height":"190px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Desc</p>
    <button className="btn btn-danger" onClick={()=>{props.cart();alot(props.id)  
    }}>Add to Cart</button>
  </div>    
</div>
          </div>
  );
}
