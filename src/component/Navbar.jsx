import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './cart.png'
export default function Navbar(props) {
  return (
    <div>
    
<nav className="navbar" style={{"backgroundColor": "#e3f2fd"}}>
<ul className="nav nav-pills">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Link</a>
  </li>
  <li className="nav-item">
    <Link to='/cart'>
  <button type="button" className="btn btn-primary position-relative"style={{backgroundColor:"lightBlue"}}>
  <img src={Cart} alt="" style={{backgroundColor:"lightBlue","height":"30px"}}/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
    {props.cart}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
</Link>
      </li>
 
</ul>
</nav>
    </div>
  )
}
