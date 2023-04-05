import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'

// 17강부터~~
// let nextid = 0
export default function Home() {
  const [todos, setTodos] =useState(null)
  const [isLoading, setIsLoading] = useState(true)

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
  
  // useEffect라는 Hook은 페이지가 렌더링 될 때 어떤 코드를 실행시키고 싶을 때 사용한다.useEffect는 인자로 콜백함수를 받는데 페이지가 렌더링 될 때 마다 useEffect안의 콜백함수가 실행이 되게 하는것이다.
  // 그런데 useEffect는 인자로 콜백함수 뿐 아니라 배열도 받을 수 있다. 여기서 이 배열은 의존성 배열(dependency arry)이라고 하는데 배열을 넣어주지 않고 콜백함수만 넣어주면 페이지가 렌더링 될 때마다 콜백함수가 실행이 되지만, 배열까지 넣어주면 배열 안에 있는 값이 바뀔 때만 콜백함수가 실행이 된다. 그런데 만약 빈 배열이라면 어떻게 될까? 배열이 비어 있다는 것은 배열 안에 있는 값이 변할 일도 없기 때문에 딱 처음 페이지가 마운트 될 때만 콜백함수가 실행이 되게 할 수 있다. 
  // useEffect는 fetch와 유용하게 사용될 수 있다. 현재는 하드 코딩되어 있는 todos라는 state를 map을 통해 뿌려 주고 있다. 하지만 실제로는 이렇게 하지 않고 서버에서 데이터를 받아와서 그걸 map으로 뿌려줄 것이다. 즉 useEffect안에서 fetch를 사용하면 todo app이 처음 실행 될 때 서버에서 데이터를 딱 가져와서 뿌려라 라고 할 수 있게 되는 것이다. json서버를 만들고 fetch를 통해 데이터를 가져와 보자.

  // 먼저 data폴더 안에 db.json을 만들고, json server를 설치한 다음 해당 서버가 db.json파일을 바라보게 하면 해당 파일이 하나의 서버가 된다. npx json-server --watch data/db.json --port 8000
  //그리고 이제 서버 주소로 fetch를 이용해서 get요청을 통해 데이터를 받아올텐데 이걸 useEffect안에서 빈 배열과 함께 사용하면 페이지가 마운팅 될때만 실행하게 되는 것이다.
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/todos')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setTodos(data)
        setIsLoading(!isLoading)
      })
    }, 2000 )
  },[])


  return (
    <div className='home'>
      { isLoading && <div> Loading... </div>}
      {todos && <TodoList todos={todos} handleDelete={handleDelete}/>}
    </div>
  )
}
