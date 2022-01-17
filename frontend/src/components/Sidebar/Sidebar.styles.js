import styled from "styled-components/macro";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${({ theme: { color } }) => color};
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
  padding: 2.5rem;
`;
export const CloseIcon = styled(FaTimes)`
  color: white;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const Icon = styled.div``;
export const SidebarWrapper = styled.div`
  color: white;
`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  text-decoration: none;
  color: #fff;
  curost: pointer;
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarMenu = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;
`;
export const ShopAmount = styled.div`
  position: relative;
  background: white;
  border-radius: 50%;
  width: 21px;
  height: 21px;
  color: ${({ theme }) => theme.color};
  top: -15px;
  left: 0px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
`;
export const CartIcon = styled(FaShoppingCart)``;

