import React   from "react";

export default function Cart(props){
 
    return (
        <>
      <div className="row" >{props.product.map((val,index)=>{return(<div className="col-md-3" key={index}><div class="card" style={{"width": "18rem"}}>
  <img class="card-img-top" src={val[0].volumeInfo.imageLinks.thumbnail } alt=''/>
  <div class="card-body">
    <h5 class="card-title">{val[0].volumeInfo.title }</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onClick={()=>props.remove(index)}>Remove from cart</button>
  </div>
</div></div>)})}</div>
        </>
    )
}