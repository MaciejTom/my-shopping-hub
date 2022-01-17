import styled from "styled-components/macro";
//Icons
import { BiSearch } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";

export const Product = styled.div`
 max-width: 300px;
 width: 100%;
 padding: 1.5rem 1.5rem;
 background: #fff;
 margin: 8px auto;
 display: flex;
 flex-direction: column;
 justify-content; space-between;
 border-radius: 10px;
 
 transition: 1s;
 &:hover {  
box-shadow: inset 1px 1px 43px -31px rgba(66, 68, 90, 1);
 }`;

export const ProductText = styled.div`
  @media (min-width: 650px) {
    min-height: 150px;
  }
`;
export const ProductImage = styled.img`
  max-height: 250px;
  object-fit: contain;
  height: 100%;
`;

export const ProductInfo = styled.div`
  margin-bottom: 8px;
  color: black;
`;
export const ProductPrice = styled.p`
  font-weight: bold;
`;

export const ProductName = styled.h2`
  font-size: 1rem;
  overflow: hidden;
  font-weight: 700;
  padding-top: 1rem;
`;

export const ProductDesc = styled.p`
  font-size: 0.8rem;
`;
export const ActionsDiv = styled.div`
  display: flex;
  justify-content: space-around;

  & > * {
    cursor: pointer;
  }
`;

export const ProductLink = styled(Link)`
 color: black;
 }`;

export const Search = styled(BiSearch)``;

export const Heart = styled(AiFillHeart)`
  color: ${({ clicked }) => (clicked ? "#db0000" : "black")};
`;

export const Cart = styled(FaShoppingCart)`
  color: ${({ clicked, theme }) => (clicked ? theme.color : "black")};
`;
