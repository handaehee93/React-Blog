
import NavBar from './components/NavBar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './components/Create';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}
      
      





export default App;
