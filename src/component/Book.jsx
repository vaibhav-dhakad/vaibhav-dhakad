import React, { useState} from "react";
import Cards from "./Cards";

export default function Book(props) {
// const item  = ()=>{
// }
  const [search, setSearch] = useState();
  const [books, setbooks] = useState([]); 
  const [msg,setMsg] =useState()
  const searchBook = async () => { 
    setbooks([...books])
    if(search!==undefined){
    let url =
    `https://www.googleapis.com/books/v1/volumes?q=${search} &maxResults=12&filter=free-ebooks&key= AIzaSyBE-l6AattFJX0KQ7MhlF4g0502Df7gfV0 `
    const data = await fetch(url);
    const parsed_data =await data.json()
    setbooks([...parsed_data.items])
    
    
      setSearch('')
      setMsg()
  }
 
  else{
   
      setMsg("Enter a keyword to search")  }
  };
//   useEffect(() => {
//     searchBook()
//   }, []);

  return (
    <div style={{background:"lightBlue"}} >
      <div className="container my-2">
        <h2>Find Your Favourite Book</h2>
        <input
          type="text"
          name=""
          value={search}
          
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          id="search"
        />
        <p>{msg}</p>
        <button onClick={searchBook}>Search</button>
        <div className="row">
            
        {books.map((item,index)=>{ return(
            
              <div key={index} className="col-md-3 mx-1 my-3">
              <Cards update={props.update}cart={props.cart} state={props.state} books={books} id={index} title={item.volumeInfo.title} img={item.volumeInfo.imageLinks.thumbnail} />
</div>
        )})}
        </div>
      </div>
    </div>
  );
}
