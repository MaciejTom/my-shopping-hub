import styled from "styled-components/macro";

import { Link } from "react-router-dom";

export const Product = styled.div`
 max-width: 300px;
 width: 100%;
 padding: 1rem;
 background: #fff;
 box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
 margin: 8px auto;
 display: flex;
 flex-direction: column;
 justify-content; space-between;
 

`;
export const ProductImage = styled.img`
height: 170px;
border-radius: 8px;`;

export const ProductInfo = styled.div`
  margin-bottom: 8px;
  color: black;
`;
export const ProductPrice = styled.p`
  font-weight: bold;
`;

export const ProductName = styled.p`
  font-size: 1rem;
  overflow: hidden;
`;

export const ProductDesc = styled.p`
  font-size: 0.8rem;
  
`;



export const ProductLink = styled(Link)`
 display: block;
 width: 100%;
 text-decoration: none;
 text-align: center;
 color: #171717;
 background: #f4f4f4;
 padding: 8px 16px;
 border: 1px solid #171717;
 font-size: 1rem; 

 &:hover {
     background: black;
     color: white;
 }
`;
