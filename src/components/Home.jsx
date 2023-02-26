import React, { useState } from 'react'
import TodoList from './TodoList'


let nextid = 0
export default function Home() {
  const [todos, setTodos] =useState([
    {id:nextid++, title: '리액트 공부하기'},
    {id:nextid++, title: '반응형 공부하기'},
    {id:nextid++, title: 'git 공부하기'}
  ])

  // 부모 요소에 존재 하는 상태 값이 자식 컴포넌트의 어떤 작용으로 인해 변화 하길 원한다면 함수를 props로 내려줘야 한다.
  // 왜냐면 상태 값은 오직 'set상태값' 에 의해서만 변경이 가능하기 때문에, 상태 변경 함수를 props로 내려줘야 하기 때문이다.
  // 아래의 handleDelte는 기존 배열의 요소에서 입력받은 id와(todolist에서는 삭제 버튼이 눌린 요소의 id) 일치 하지 않는 것들만 새로운 배열로 만들어서 해당 배열을 상태값으로 업데이트 해준 것이다. 사용자가 삭제버튼을 클릭하면 삭제하고자 하는 todolist의 id가 전달이 될 것이고, 이건 삭제할 거니까 얘를 빼고 새로운 배열을 만들어 리턴하면 삭제한 것과 같기 때문이다.
  // 추가적으로  filter 메서드는 기존의 배열을 수정하는 것이 아니라 새로운 배열을 반환한다.
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => (
      todo.id !== id
    ))
    setTodos(newTodos)
  }


  return (
    <div className='home'>
      <TodoList todos={todos} handleDelete={handleDelete}/>
    </div>
  )
}
