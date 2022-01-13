import styled from "styled-components/macro";
//Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export const Wrapper = styled.div`
  padding: 5rem 2rem;
  display: flex;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 700px) {
    padding: 2rem 1rem;
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 90%;
  object-fit: contain;

  @media (max-width: 700px) {
    height: 40vh;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 0 0 40px;

  @media (max-width: 700px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 200;
  padding-right: 20px;
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: flex-start;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin-left: 20px;
  
  &:hover {
    background-color: #f8f4f4;
  }
`;

export const Minus = styled(AiOutlineMinus)`
  cursor: pointer;
`;

export const Plus = styled(AiOutlinePlus)`
  cursor: pointer;
`;
export const Heart = styled(AiFillHeart)`
  color: ${({ clicked }) => (clicked ? "#db0000" : "black")};
  cursor: pointer;
`;
