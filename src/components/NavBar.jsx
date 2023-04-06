import React from 'react'
import {BsPencilFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav className='navbar'>
      <Link to="/"><h1>To Do</h1></Link>
      <BsPencilFill className='icon'/>
      <div className='links'> 
        <Link to="/">Home</Link>
        <Link to="/create">Add To Do</Link>
      </div>
    </nav>
  )
}
