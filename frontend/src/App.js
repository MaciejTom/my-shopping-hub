import {useState} from 'react'
//Styles
import { GlobalStyles } from "./GlobalStyles";
//Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
      <Switch>
     
        <Route exact path="/" component={Home}/>
        <Route exact path="/product/:id" component={Product}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/category" component={Category}/>
      </Switch>
     <GlobalStyles />
    </div>
    </Router>
  );
}

export default App;
