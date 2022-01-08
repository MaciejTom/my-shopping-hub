//Icons
import { FaBars } from "react-icons/fa";

//Styles
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ShopAmount,
} from "./Navbar.styles";

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">MY-SHOPPING-HUB</NavLogo>
          <MobileIcon>
            <FaBars onClick={() => toggleSidebar()} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">HOME</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/shop">SHOP</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/category">Category</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/cart">
                {" "}
                CART <ShopAmount>0</ShopAmount>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

// <Wrapper>
//   <Content>
//     <Link to="/">MY-SHOPPING-CENTER</Link>
//     <Nav>
//       <Link to="/">Shop</Link>

//       <Link to="/cart">
//         CART <ShopAmount>0</ShopAmount>
//       </Link>
//     </Nav>
//     <Button onClick={() => toggleSidedrawer()}>
//       <FaBars />
//     </Button>
//   </Content>
// </Wrapper>
