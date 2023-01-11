
import { useEffect,useState } from 'react'
import React from 'react'
import axios from 'axios'
import '../App.css'
import './book.css'

export default function Home() {
    const [booksdata,setData]=useState([])
    const [List, setList]=useState(booksdata)
    const [Found, setFound]=useState("Choose Your Read")
    let display = "none";
    useEffect(()=>{
        const FetchData=async()=>{
            const res=await
            axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Z0Ok3LKA9Ltg2xIuEkATOexdABR2nI7C')

                // console.log(res.data.results.books)
                setData(res.data.results.books)
                // console.log(booksdata)
            }
            FetchData()
    }, [])
    const data = Object.values(booksdata);
    const search_parameters = Object.keys(Object.assign({},...data))
    
    function search(){
    
      return booksdata.filter(
        (item)=>
        search_parameters.some((parameter)=>
        item[parameter].toString().toLowerCase().includes(List))
      )
    }
    
    // console.log(booksdata.length)  
    if (search().length === 0) {
      display = "block";
    }      

  return (
    <div >
      <div id='centralDiv'>
        <h2 id='categories'>Available Categories</h2>
        <div id="filterCategory">
          <div className="category" id="c1">Combined Print and E-Book Fiction and Non-Fiction</div>
          <div className="category" id="c2">Hardcover Fiction and Non-Fiction</div>
          <div className="category" id="c3">PaperBack Trade Fiction and Non-Fiction</div>
          <div className="category" id="c4">Advice, How-To & Miscellaneous</div>
          <div className="category" id="c5">Children’s Middle Grade Hardcover</div>
          <div className="category" id="c6">Children's Picture Book and Series</div>
          <div className="category" id="c7">Handcover and Audio Fiction</div>
        </div>
      </div>
      <div id='main'>
        <h1>{Found}</h1>
        <input className='searchdiv' type='search' id="search-box" onChange={(e)=>setList(e.target.value)} placeholder='Choose your Read' />
        <div style={{display : display, padding:'15vh'}}><h3> Book Not Found </h3></div>
        <div className='container'>
        
          {search(booksdata).map((books)=>{
            if(booksdata.length>0)
            {
              return (
              <div>
                <div className='book'>
                  <img src={books.book_image} alt="" />
                  <h3>{books.title}</h3>
                  <h4>by {books.author}</h4>
                </div>
              </div>)
            }
            else if(booksdata.length===0)
            {
              return (<div id='notFound'>Not Found</div>)
            }
          })}
        </div>
      </div>
      {/* <div id='footer'>
        Made with ♥ by Priyanshi Rana
      </div> */}
    </div>
  )
}
