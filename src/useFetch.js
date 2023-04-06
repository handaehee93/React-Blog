import { useState, useEffect } from 'react'

// 리액트에서 커스텀 훅을 사용할때 반드시 이름 앞에 use를 붙여야 한다.
// 커스텀 훅이기 때문에 어디서든 재사용 할 수 있으므로 fetch해오는 url을 하드코딩 하지 않고 인자로 받는다.
const useFetch = (url) => {
  // 커스텀 훅으로 만들면 어디서든 재사용할 수 있는 것이기 때문에 그동안 todos라는 이름으로 사용하던 state를 좀 더 포괄적으로 data로 바꿔 주었다.
  const [data, setData] =useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  // useEffect라는 Hook은 페이지가 렌더링 될 때 어떤 코드를 실행시키고 싶을 때 사용한다.useEffect는 인자로 콜백함수를 받는데 페이지가 렌더링 될 때 마다 useEffect안의 콜백함수가 실행이 되게 하는것이다.
  // 그런데 useEffect는 인자로 콜백함수 뿐 아니라 배열도 받을 수 있다. 여기서 이 배열은 의존성 배열(dependency arry)이라고 하는데 배열을 넣어주지 않고 콜백함수만 넣어주면 페이지가 렌더링 될 때마다 콜백함수가 실행이 되지만, 배열까지 넣어주면 배열 안에 있는 값이 바뀔 때만 콜백함수가 실행이 된다. 그런데 만약 빈 배열이라면 어떻게 될까? 배열이 비어 있다는 것은 배열 안에 있는 값이 변할 일도 없기 때문에 딱 처음 페이지가 마운트 될 때만 콜백함수가 실행이 되게 할 수 있다. 
  // useEffect는 fetch와 유용하게 사용될 수 있다. 현재는 하드 코딩되어 있는 todos라는 state를 map을 통해 뿌려 주고 있다. 하지만 실제로는 이렇게 하지 않고 서버에서 데이터를 받아와서 그걸 map으로 뿌려줄 것이다. 즉 useEffect안에서 fetch를 사용하면 todo app이 처음 실행 될 때 서버에서 데이터를 딱 가져와서 뿌려라 라고 할 수 있게 되는 것이다. json서버를 만들고 fetch를 통해 데이터를 가져와 보자.

  // 먼저 data폴더 안에 db.json을 만들고, json server를 설치한 다음 해당 서버가 db.json파일을 바라보게 하면 해당 파일이 하나의 서버가 된다. npx json-server --watch data/db.json --port 8000
  //그리고 이제 서버 주소로 fetch를 이용해서 get요청을 통해 데이터를 받아올텐데 이걸 useEffect안에서 빈 배열과 함께 사용하면 페이지가 마운팅 될때만 실행하게 되는 것이다.
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(res => {
        if(!res.ok) {
          throw Error('데이터를 불러오지 못하고 있습니다.')
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
        setIsLoading(false)
        setError(err.message)
        console.log(error)
      })
    }, 1000 )
  },[url])
return {data, isLoading, error}

}
export default useFetch