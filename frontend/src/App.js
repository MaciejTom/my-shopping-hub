import {useState} from 'react'
//Styles
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import {theme} from './utils/theme'
//Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//Components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
//Pages
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Gaming from './pages/Gaming'
import Phones from './pages/Phones'
import Laptops from './pages/Laptops'


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
   
    setIsOpen(prev => !prev)
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <div className="App">      
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>  
      <Switch>
     
        <Route exact path="/" component={Home}/>
        <Route exact path="/product/:id" component={Product}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/gaming" component={Gaming}/>
        <Route exact path="/laptops" component={Laptops}/>
        <Route exact path="/phones" component={Phones}/>
      </Switch>
     <GlobalStyles />
    </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
