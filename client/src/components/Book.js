import React from 'react'
import { Button } from "@mui/material";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../App.css'

const Book = (props) => {
  const history= useNavigate()

  const {_id, name, author, description, price, image, available } = props.book
  const deletehandler = async () => {
    await axios
      .delete(`http://localhost:5000/delete/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
      window.location.reload() 
  };

  return (
    <div className='card'>
      <img src={image} alt={name} />
      <h3>Name : {name}</h3>
      <article>By {author}</article>
      <h3>{available}</h3>
      <p>{description}</p>
      <h3>Price: {price}</h3>

        <Button onClick={deletehandler}>Delete</Button>

    </div>
  )
}

export default Book