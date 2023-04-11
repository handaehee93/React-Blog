import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
// import useFetch from '../useFetch'
// import Create from './AddToDo'
import styled from 'styled-components'

// let nextid = 0
export default function Home() {
  // 가져온 데이터의 :를 사용하여 임의로 이름을 지어줄 수 있다.
  // const {data: todos, isLoading, error} = useFetch('http://localhost:8000/todos')

  return (
    <Container >
      
      {/* { error && <div>{ error }</div>} */}
      {/* { isLoading && <div> Loading... </div>} */}
      {/* {todos && <TodoList todos={todos} />} */}
      <TodoList />
      {/* {<Create />} */}
    </Container>
  )
}

  
const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
`



