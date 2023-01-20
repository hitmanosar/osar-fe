
import './App.css';
import Home from '../src/component/home.jsx';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import About from './component/about';
import Product from './component/product';
import All_list from './component/all';
import Hair from './component/hair';
import Skin from './component/skin';
import Body from './component/body';
import Collagen from './component/collagen';
import Daily from './component/daily';
import Contents from './component/contents';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/all" element={<All_list/>}/>
        <Route path="/hair" element={<Hair/>}/>
        <Route path="/skin" element={<Skin/>}/>
        <Route path="/body" element={<Body/>}/>
        <Route path="/collagen" element={<Collagen/>}/>
        <Route path="/daily" element={<Daily/>}/>
        <Route path="/content" element={<Contents/>}/>
        
        
        
      </Routes>
    
     </Router>
    </div>
  );
}

export default App;
