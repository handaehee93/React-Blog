import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

export default function Sidebar({filters, filter, onFilterChange}) {
  const SidebarData = [
    {
      title: 'Home',
      icon: <HomeIcon />,
      link: '/'
    },    
    {
      title: 'Add To Do',
      icon: <AddIcon />,
      link: '/add'
    },
    {
      title: 'Completed',
      icon: <DoneIcon />,
      link: '/completed'
    },
    {
      title: 'Active',
      icon: <HomeIcon />,
      link: '/home'
    }
  ]
  return (
    <Side>
      <ul>
        {
          SidebarData.map((val, key) => {
            return (
              <li key={key} onClick={() => {
                window.location.pathname = val.link
                onFilterChange(val)
              }}>
                <div className='icon'>
                  {val.icon}
                </div>
                {' '}
                <div className='title'>
                  {val.title}
                </div>
              </li>
            )
          })
        }
      </ul>
    </Side>
  )
}

const Side = styled.div`
  height:100%;
  width:250px;
  background-color:#23272f;
  > ul {
    list-style:none;
    height:auto;
    padding: 0;
    /* background-color:aqua; */
    > li {
      width:100%;
      height:80px;
      /* border:1px solid; */
      color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      > .icon {
        flex: 30%;
        display:grid;
        place-items:center;
      }
      > .title {
        flex: 70%;
      }
      &:hover {
        cursor:pointer;
        background-color:#293846
      }
    }
  }
`