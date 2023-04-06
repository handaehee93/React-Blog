import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import useFetch from '../useFetch'


// let nextid = 0
export default function Home() {
  // 가져온 데이터의 :를 사용하여 임의로 이름을 지어줄 수 있다.
  const {data: todos, isLoading, error} = useFetch('http://localhost:8000/todos')

  return (
    <div className='home'>
      { error && <div>{ error }</div>}
      { isLoading && <div> Loading... </div>}
      {todos && <TodoList todos={todos} />}
    </div>
  )
}

  




