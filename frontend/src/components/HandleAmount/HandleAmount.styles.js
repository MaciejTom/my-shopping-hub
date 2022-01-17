import styled from "styled-components/macro";
//Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const MinusButton = styled(AiOutlineMinus)`
  align-self: center;
  cursor: pointer;
`;

export const PlusButton = styled(AiOutlinePlus)`
  align-self: center;
  cursor: pointer;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
 
  @media (max-width: 650px) {
      padding: 0;
  }
`;

export const Amount = styled.div` 
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
