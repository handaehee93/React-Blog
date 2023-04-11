import React, {useState} from 'react'
import styled from 'styled-components'
import {v4 as uuidv4} from 'uuid'

export default function AddToDo ({handleAdd}) {
  const [text, setText] = useState('')

  
  const handleChange = (e) =>  setText(e.target.value)

  const handleSubmit = (e) => {
    //이걸 넣어주면 submit이 되었을 때 페이지가 새로고침 되지 않는다.
    e.preventDefault()
    if(text.trim().length === 0) {
      return 
    }
    handleAdd({id:uuidv4(), text:text, status:'ongoing'})
     // 버튼 으로 새로운 todolist를 추가 한다음 input에 기존에 입력했던 문자열을 초기화 해주는 것
    setText('')
  }
  


  return (
    <Container onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Add todo' 
        value={text} 
        onChange={handleChange}
        size={100}
        // height={300}
      />
      <button>Add</button>
    </Container>
  )
}

const Container = styled.form`
  margin-top: 1rem;

  width:100%;
  /* height:100px; */
  /* border:1px solid; */
  display:flex;
  justify-content:center;
  align-items:center;
  > input {
    height:100px;
    border-radius:1rem;
    text-align:center;
    font-size:1rem;
  }
  > button {
    margin-left:1rem;
    width:100px;
    height:100px;
    border-radius:1rem;
    text-align:center;
    font-size:1rem;
  }
`



