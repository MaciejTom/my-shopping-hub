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
import Footer from './components/Footer'
//Pages
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Gaming from './pages/Gaming'
import Phones from './pages/Phones'
import Laptops from './pages/Laptops'
import NotFoundComponent from './components/NotFoundComponent'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
   
    setIsOpen(prev => !prev)
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>    
      <Navbar toggleSidebar={toggleSidebar}/>
      
      <main className="App">  
      <Switch>     
        <Route exact path="/" component={Home}/>
        <Route exact path="/product/:id" component={Product}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/gaming" component={Gaming}/>
        <Route exact path="/laptops" component={Laptops}/>
        <Route exact path="/phones" component={Phones}/>
        <Route path="/*" component={NotFoundComponent}/>
      </Switch>
      </main>
      <Footer/>
     <GlobalStyles />
 
    </ThemeProvider>
    </Router>
  );
}

export default App;
