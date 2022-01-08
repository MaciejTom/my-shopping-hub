import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    tansition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  /* justify-self: flex-start; */
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    color: white;
    cursor: pointer;
  }
`;
export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const ShopAmount = styled.span``;

// export const Wrapper = styled.div`
//   background: var(--darkGrey);
//   padding: 0 20px;
// `;

// export const Content = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   max-width: var(--maxWidth);
//   padding: 20px 0;
//   margin: 0 auto;
// `;
// export const Nav = styled.nav`
//   display: none;
//   @media (min-width: 800px) {
//     display: block;
//   }
// `;
// export const ShopAmount = styled.span``;
// export const Button = styled.button`
//   @media (min-width: 800px) {
//     display: none;
//   }
// `;

// export const LogoImg = styled.img`
//   width: 120px;

//   @media (max-width: 500px) {
//     width: 80px;
//   }
// `;

// export const TMDBLogoImg = styled.img`
//  width:  140px;

// @media (max-width: 500px) {
//   width: 90px;
// }`;
