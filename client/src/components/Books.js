import React,{useEffect,useState} from 'react'

import axios from 'axios'
import Book from './Book'
import '../App.css'


const url='http://localhost:5000/books'

const fetchbooks= async()=>{
  return await axios.get(url).then((res)=> res.data)
}

const stylediv={
  marginTop:'7rem'
}

const Books = () => {
  const [books,setBooks]=useState()
  useEffect(()=>{
    fetchbooks().then((data)=> setBooks(data))
  },[])
  console.log(books);
  return (
    <div>
      <div style={stylediv}>
      </div>
    <ul>
      {books &&
        books.map((book, i) => (
          <li key={i}>
            <Book book={book} />
          </li>
        ))}
    </ul>
  </div>
  )
}

export default Books