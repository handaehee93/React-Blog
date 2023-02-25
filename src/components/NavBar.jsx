import React from 'react'
import {BsPencilFill} from 'react-icons/bs'
export default function NavBar() {
  return (
    <nav className='navbar'>
      <h1>To Do</h1>
      <BsPencilFill className='icon'/>
      <div className='links'> 
        <a href="/">Home</a>
        <a href="/create">Add To Do</a>
      </div>
    </nav>
  )
}
