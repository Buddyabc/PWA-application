
import Navbar1 from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from "../src/components/Home"
import About from "../src/components/About"
import User from "../src/components/User"


function App() {
 
  return (
       <Router>
         <Navbar1/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/user" element={<User/>}/>
         </Routes>

       </Router>
    
  );
}

export default App;
