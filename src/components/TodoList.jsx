import React,{useState} from 'react'
import styled from 'styled-components'
import AddToDo from './AddToDo'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'

export default function TodoList() {

  const [todos, setTodos] = useState([])

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleUpdate = (updated) => {
    
    return setTodos(todos.map((t) => {
      return t.id === updated.id ? updated : t
    }))
  }

  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id))
  return (
    <Container >
      <AddToDo handleAdd={handleAdd}/>
      <ul>
        {
          todos.map((todo) => {
            return <Todo key={todo.id} todo= {todo} onUpdate={handleUpdate} onDelete={handleDelete} />
          })
        }
      </ul>
    </Container>
  )
}

        
        


const Container = styled.div`
/* background-color:blue; */
  display:flex;
  flex-direction:column;
  /* justify-content:center; */
  align-items:center;
  gap:1rem;
  width: 100&;
  height: 100%;
  /* margin-left:30rem; */
  /* width:100vw; */
  >ul {
  display:flex;
  flex-direction:column;
  /* align-items:center; */
  }
`
