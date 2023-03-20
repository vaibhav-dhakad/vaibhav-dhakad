import React from 'react'
// import obj from './Sample'
export default function Prop(props) {
//    const [maker,origin] = props;
  return (
    <div>
<table class="table">
  <tbody>
    <tr>
            <td>{props.maker}</td>
      <td>{props.origin}</td>
      
    </tr>
    
  </tbody>
</table>
    </div>
  )
}
