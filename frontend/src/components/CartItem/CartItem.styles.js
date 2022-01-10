import styled from "styled-components/macro";
import {Link} from "react-router-dom"

//Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {MdDelete} from 'react-icons/md'

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled(Link)``;

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
  @media (max-width: 400px) {
    margin-bottom: 20px;
  }
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;


export const MinusButton = styled(AiOutlineMinus)`
align-self: center;
cursor: pointer;
`

export const PlusButton = styled(AiOutlinePlus)`
align-self: center;
cursor: pointer;
`

export const DeleteButton = styled(MdDelete)`
align-self: center;
cursor: pointer;
`