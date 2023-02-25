import React, { useState } from 'react'
import TodoList from './TodoList'


let nextid = 0
export default function Home() {
  const [todos, setTodos] =useState([
    {id:nextid++, title: '리액트 공부하기'},
    {id:nextid++, title: '반응형 공부하기'}
  ])
  return (
    <div className='home'>
      <TodoList todos={todos}/>
    </div>
  )
}
