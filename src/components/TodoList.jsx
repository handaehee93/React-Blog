import React from 'react'

export default function TodoList({todos}) {
  return (
    <div className='todo_list'>
      {/* 배열을 받아서 뿌리는 {}안의 부분은 재사용 가능성이 충분하므로 항상 하나의 컴포넌트로 만들어 주는 것이 좋다.*/}
      {
        todos.map((todo) => (
          <div key={todo.id} className='todolist'>
            <input type='checkbox' />
            <div className='content'>
            {todo.title}
            </div>
          </div>
          
        ))
      }
    </div>
  )
}
