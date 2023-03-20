import React,{useContext} from 'react'
import { Name } from '../App'
export default function CompC() {
  const cont = useContext(Name);
  return (
    <>
        <p>{cont}</p><p>I am C</p>
      </>
  )
}
