import NavBar from './components/NavBar';
import Home from './components/Home';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import styled, {createGlobalStyle} from 'styled-components'
import Sidebar from './components/Sidebar';
import { Switch } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import Completed from './components/Completed';
import AddToDo from './components/AddToDo';

const router = createBrowserRouter([
  {
    path: '/', // '/'는 메인 페이지를 의미한다.
    element: <Root/>,
    children: [
      {index:true, element:<Home />},
      {path: '/completed', element: <Completed />},
      {path: '/add', element: <AddToDo />}
    ]
  },
	{
		path: '/videos',
		element: <p>videos</p>
  }
]);

const filters = ['all', 'active', 'completed']
function App() {
  return (
      <>
      <GlobalStyle />
        <RouterProvider router={router}/>
      {/* <AppContainer >
        <GlobalStyle />
        <Router>
          <NavBar />  
          <Sidebar /> 
          <Switch>
            <Route path='/' element={<Home />}/>
          </Switch>
        </Router>
      </AppContainer> */}
      </>

  );
}

export default App;


      


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  body {
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
  }

`
const AppContainer = styled.div`
  width:100vw;
  height:100vh;
`














      
