import React, { useState } from "react";
import Book from "./component/Book";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App(props) {
  const [cart, setcart] = useState(0);
  const state= {};
const [product, setproduct] = useState([]);
  const carting = () => {
    setcart(cart + 1);
    setproduct([...product,state])
     };
   const remove=(id)=>{
setproduct((item)=>item.filter((val,index)=>{return index!==id}))
setcart(cart-1)
   }
  return (<Router>
    <div>
      <Navbar cart={cart}></Navbar>
      
        <Routes>
          <Route exact path='/' element={<Book state={state} product={product} cart={carting}></Book>} />
          <Route exact path='/cart' element={<Cart remove={remove} product={product}></Cart>} />
        </Routes>
    </div>
      </Router>
  );
}
