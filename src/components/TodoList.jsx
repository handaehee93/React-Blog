import React from 'react'

export default function TodoList({todos, handleDelete}) {



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
            {/* 아래 처럼 props로 전달받은 함수에 인자로 어떤 값을 받아야 한다면 아래 처럼 입력을 해줘야 한다. 
            onClick={handleDelte(todo.id)} 라고 입력하면 작동하지 않는다.*/}
            <button onClick={() => (handleDelete(todo.id))}>Delete</button>
          </div>
          
        ))
      }
    </div>
  )
}
