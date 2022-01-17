import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 1s;
  ${({ offset }) => offset > 50 && "box-shadow: 0px 5px 27px -12px #747474;"}

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
  padding: 0 1.5rem;
  max-width: 1300px;
`;

export const NavLinkLogo = styled(Link)`
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;
export const NavLogo = styled.img`
  max-width: 400px;
  width: 100%;
  max-width: clamp(400px, 1.5vw, 250px);
  @media (max-width: 970px) {
    max-width: 300px;
  }
  @media (max-width: 420px) {
    max-width: 220px;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color};
    cursor: pointer;

    @media (max-width: 420px) {
      svg {
        max-width: 20px;
      }
    }
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -1.4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;

  &:last-of-type a {
    color: ${({ theme }) => theme.color};
  }
`;
export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 900;
  color: black;
  border-bottom: 3px solid transparent;
  &:active {
    border-bottom: 3px solid ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.color};
  }
`;
export const ShopAmount = styled.span`
  position: relative;
  color: white;
  background: ${({ theme }) => theme.color};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: white;
  top: -15px;
  left: 5px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartIcon = styled(FaShoppingCart)`
  left: 5px;
  position: relative;
`;
