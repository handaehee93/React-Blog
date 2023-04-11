import React from 'react'
import { FaTrashAlt} from 'react-icons/fa';
import styled from 'styled-components';

export default function Todo ({todo, onUpdate, onDelete}) {

  const handleChange = (e) => {
    console.log(e)
    return onUpdate({...todo, status: e.target.checked ? "completed" : 'ongoing'})
  }
  const handleDelete = () => onDelete(todo)
  return (
    <List>
      <input type='checkbox' id='checkbox' checked={todo.status === 'completed'} onChange={handleChange} />
      <label htmlFor="checkbox">{todo.text}</label>
      <button onClick={handleDelete}> <FaTrashAlt /></button>
    </List>
  )
}

const List = styled.li`
  margin-top: 2rem;
  display:flex;
  justify-content:flex-start;
  margin-right: 5rem;
  gap:1rem;
  /* width: 100vw; */
  > input {
    /* margin-left:5rem; */
    /* width:100px; */
  }
  > label {
    width: 300px;
    text-align:center;
  }
  > button {
    /* width: 10%; */
  }
`