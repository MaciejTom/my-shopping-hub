import {useState, useEffect} from 'react'
//Icons
import { FaBars } from "react-icons/fa";
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
//Image
import logo from '../../img/shopping.png'
//Hooks
import {useGetCartCount} from '../../hooks/useGetCartCount'

const Navbar = ({ toggleSidebar }) => {

  const shopTotalProducts = useGetCartCount();

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);   
    
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  
  return (
   
      <Nav offset={offset}>
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
                <CartIcon size="27px"/><ShopAmount>{shopTotalProducts}</ShopAmount>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    
  );
};

export default Navbar;


