import React, {useState} from 'react'
import {BsPencilFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import AddToDo from './AddToDo'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
    // 모달 open 이벤트 핸들러
    const openModalHandler = () => {
      setIsOpen(!isOpen);
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    };
  
    // 모달 close 이벤트 핸들러
    const closeModalHandler = () => {
      setIsOpen(!isOpen);
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  
    // 이벤트 버블링 방지
    const stopEvent = (event) => { event.stopPropagation() };

  return (
    <Container className='navbar'>
      <Link to="/" className='title'><h1>To Do</h1></Link>
      <BsPencilFill className='icon'/>
    </Container>
  )
}


const Container = styled.nav`
  padding: 20px;
  display: flex;
  /* justify-content: space-between; */
  /* 현재 메인축이 row 아래 코드는 반대축 기준, 얼라들은 반대많이 함 */
  align-items: center;
  max-width: 100%;
  background-color:#23272f;
  /* margin: 0 auto; */
  /* border-bottom: 1px solid #4a4545; */
  > .title {
    text-decoration:none;

  }
  > .title h1 {
    color:#55b4d0;

  }
  > .icon {
    color: #55b4d0;
    /* color: black; */
    margin-left: 1rem;
  }
  > .add {
    margin-left: auto;
  }
`



// 모달 뒷배경
const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

// 모달 창
const ModalView = styled.form`
  border-radius: 5px;
  background-color: white;
  width: 700px;
  height: 430px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.1);

  > .closebtn {
    text-align: center;
    margin-bottom: 50px;
    font-size: 30px;
    &:hover {
      color: gray;
    }
  }

  > .title {
    text-align: center;
    font-size: 30px;
  }

  > .input {
    margin: 0 auto
  }
`;