import styled from "styled-components/macro";
//Icons
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
  padding-left 2.5rem;

  @media (max-width: 700px) {
    padding: 2,2rem;
  }
`;

export const Title = styled.h1`
  font-weight: 200;
  padding-right: 2.2rem;
`;

export const Desc = styled.p`
  margin: 1.2rem 0px;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AddContainer = styled.div`
  display: flex;
  padding-top: 1.2rem;
  justify-content: flex-start;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin-left: 1.2rem;

  &:hover {
    background-color: #f8f4f4;
  }
`;
export const Heart = styled(AiFillHeart)`
  color: ${({ clicked }) => (clicked ? "#db0000" : "black")};
  cursor: pointer;
`;
