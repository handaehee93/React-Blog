import React from 'react'
import {BsPencilFill} from 'react-icons/bs'
export default function NavBar() {
  return (
    <nav className='navbar'>
      <a href="/"><h1>To Do</h1></a>
      <BsPencilFill className='icon'/>
      <div className='links'> 
        <a href="/">Home</a>
        <a href="/create">Add To Do</a>
      </div>
    </nav>
  )
}
