
import './App.css';
import Home from '../src/component/home.jsx';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import About from './component/about';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
    
     </Router>
    </div>
  );
}

export default App;
