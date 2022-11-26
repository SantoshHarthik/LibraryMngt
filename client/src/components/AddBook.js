import React,{useState} from 'react'
import { FormLabel, TextField ,FormControlLabel,Checkbox} from '@mui/material'
import { Button } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../App.css'

const url='http://localhost:5000/books'



const stylediv={
  marginTop:'7rem'
}


const AddBook = () => {
  const history= useNavigate()
  const navigate= useNavigate()
  const [input,setInput]= useState({
    name:'',
    author:'',
    description:'',
    price:'',
    image:'',
  })

  const [checked,setChecked]=useState(false)

  const postform= async()=>{
    await axios.post(url,{
      name:String(input.name),
      author:String(input.author),
      description:String(input.description),
      price:Number(input.price),
      image:String(input.image),
      available:Boolean(input.available)
    }).then(res=> res.data)
  }

  const handleevent=(e)=>{
    setInput((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
        // console.log(e.target.name, "Value", e.target.value);
  }

  const submitform=(e)=>{
    e.preventDefault()
    // console.log(input,checked);
    postform().then(()=> history('/books'))
    navigate('/books')
  }

  return (
    <div>
      <div style={stylediv}></div>
      <form onSubmit={submitform}>
        <div className='addbook'> ADD BOOK</div>
        <FormLabel>Name</FormLabel>
        <TextField required margin='normal' value={input.name} onChange={handleevent} variant='outlined' name='name' fullWidth/><br/>
        <FormLabel>Author</FormLabel>
        <TextField required margin='normal' value={input.author} onChange={handleevent} variant='outlined' name='author' fullWidth/><br/>
        <FormLabel>Description</FormLabel>
        <TextField required margin='normal' value={input.description} onChange={handleevent} variant='outlined' name='description' fullWidth/><br/>
        <FormLabel>Price</FormLabel>
        <TextField required type='number' margin='normal'variant='outlined' value={input.price} onChange={handleevent} name='price' fullWidth/><br/>
        <FormLabel>Image</FormLabel>
        <TextField required name='image' variant='outlined'value={input.image} onChange={handleevent} margin='normal' fullWidth/><br/><br/>

        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
        <Button type='submit' variant='contained' fullWidth>Add</Button>
      </form>
    </div>
  )
}

export default AddBook