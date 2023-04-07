import NavBar from './components/NavBar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import styled, {createGlobalStyle} from 'styled-components'


function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/create" element={<Create />} /> */}
          </Routes>
      </div>
    </Router>
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
    height: 70vh;
    width: 70vw;
    margin: 0 auto;
  }

`
const Below = styled.div`
max-width:100vw;
  display:flex;
`
