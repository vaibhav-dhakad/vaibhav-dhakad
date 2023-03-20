import React from 'react'

export default function Main() {
    let p = async() => {
        console.log("Getting info");
        await fetch('https://dummyjson.com/products/1').then(res => res.json())
            .then(data => {
                console.log(data)
                let list = document.getElementById('list');
                let li = `<tr><th>Name</th><th>Email</th></tr>`;
    
    
                li = `<tr>
    <td>${data.title} </td> :     
    <td>${data.description}</td>  
    </tr><br>`;
    
                list.innerHTML += li
            });
        console.log("Adapted Successfully");
    
    }
    let q = async() => {
        console.log("Writing info");
    
        await fetch('https://dummyjson.com/products/add', {
                method: "post",
                headers: { 'Content-type': 'application/json;charsetUTF=8' },
                body: JSON.stringify({
                    title: "Vaibhav"
                })
            }).then(res => res.json())
            .then(data => {
                console.log(data)
                let list = document.getElementById('list');
    
                let str = "";
                for (const key in data) {
                    if (Object.hasOwnProperty.call(data, key)) {
                        str += data[key];
                    }
                }
                list.innerHTML = str
            });
    
        console.log("Adapted Successfully");
    
    }
    
    let fetchBtn = document.getElementById("fetchBtn");
    fetchBtn.addEventListener('click', p);
    let popBtn = document.getElementById("popBtn");
    popBtn.addEventListener('click', q);
  return (
    <div>
      <div className="container">
        <h1>Ajax tutorial</h1>

        <div className=" mx-5" style={{width: "auto"}}>
            <button type="button" id="fetchBtn" className="btn btn-primary ">Make a get request</button>

            <button type="button" id="popBtn" className="btn btn-secondary ">Make a post request</button>
        </div>
        <div id="list"></div>

    </div> 
    </div>
  )
}
