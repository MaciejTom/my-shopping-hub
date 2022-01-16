import styled from "styled-components/macro";
import { Link } from "react-router-dom";

//Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  row-gap: 1rem;
  @media (max-width: 460px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;

export const Details = styled.div`
  /* padding: 20px; */
  display: flex;
  
  
  flex-direction: column;
  justify-content: center;
  row-gap: 2rem;
  padding-left: 40px;
  @media (max-width: 460px) {
    padding: 0;
    text-align: center;
  }
`;

export const ProductName = styled(Link)`
text-decoration: none;
color: black;
font-weight: 700;
font-size: 1.3rem;

`;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   @media (max-width: 660px) {
    flex-direction: row;
    column-gap: 2rem;
    padding: 1.5rem;
    
  }
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media (max-width: 400px) {
    margin: 5px 15px;
  }
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const MinusButton = styled(AiOutlineMinus)`
  align-self: center;
  cursor: pointer;
`;

export const PlusButton = styled(AiOutlinePlus)`
  align-self: center;
  cursor: pointer;
`;

export const DeleteButton = styled(MdDelete)`
  align-self: center;
  cursor: pointer;
`;
