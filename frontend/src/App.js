import {useState} from 'react'
//Styles
import { GlobalStyles } from "./GlobalStyles";
//Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
//Pages
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Category from './pages/Category'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
   
    setIsOpen(prev => !prev)
  }

  return (
    <Router>
      <div className="App">
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
         
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/category" element={<Category/>}/>
      </Routes>
     <GlobalStyles />
    </div>
    </Router>
  );
}

export default App;
