import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import NavBar from './NavBar'
import styled from 'styled-components'


const filters = ['all', 'active', 'completed']
export default function Root() {
  const [filter, setFilter] = useState(filters[0])
  return (
    <AppContainer>
      <NavBar />
      <div>
        <Sidebar filters={filters} filter={filter} onFilterChange={filter => setFilter(filter)}/>
        <Outlet />
      </div>
    </AppContainer>
  )
}


const AppContainer = styled.div`
  width:100vw;
  height:100vh;
  > div {
    display:flex;
    height: 100%;
  }
`
