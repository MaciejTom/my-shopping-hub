//Icons
import { FaBars } from "react-icons/fa";

//Redux
import {useSelector} from 'react-redux'
//Styles
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLinkLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ShopAmount,
  CartIcon
} from "./Navbar.styles";

import logo from '../../img/shopping.png'

const Navbar = ({ toggleSidebar }) => {

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }  
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLinkLogo to="/"><NavLogo src={logo} /></NavLinkLogo>
          <MobileIcon>
            <FaBars onClick={() => toggleSidebar()} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">HOME</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/laptops">LAPTOPS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/gaming">GAMING</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/phones">SMARTPHONES</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/cart">                
                <CartIcon size="27px"/><ShopAmount>{getCartCount()}</ShopAmount>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;


