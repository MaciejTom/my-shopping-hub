import styled from "styled-components/macro";

import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

export const Wrapper = styled.section`
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 400px) {
    padding: 0.6rem;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  column-gap: 1rem;
  @media (max-width: 450px) {
    flex-direction: column;
    row-gap: 0.5rem;
    padding: 0.6rem;
  }
`;

export const TopButton = styled.button`
  padding: 0.6rem;
  font-weight: 300;
  cursor: pointer;
  background: white;
  border: ${({ theme }) => theme.color} solid 1px;
  color: white;
  border-radius: 5px;
  color: ${({ theme }) => theme.color};
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;

export const Heart = styled(AiFillHeart)`
  color: #db0000;
`;

export const Cart = styled(FaShoppingCart)`
  color: ${({ theme }) => theme.color};
`;
