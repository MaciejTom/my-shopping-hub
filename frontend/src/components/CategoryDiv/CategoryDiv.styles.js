import styled from "styled-components/macro";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const Icon = styled.img`
  max-width: 150px;
  width: 100%;
  color: ${({ theme }) => theme.color};
  @media (max-width: 1110px) {
    max-width: 100px;
  }
`;
export const Category = styled.div`
  text-align: center;
  border: solid 3px ${({ theme }) => theme.color};
  padding: 3rem;
  border-radius: 50%;
  width: 350px;
  transition: 1s;
  height: 350px;
  box-shadow: rgba(52, 87, 155, 0.1) 0px 54px 55px,
    rgba(52, 87, 155, 0.12) 0px -12px 30px, rgba(52, 87, 155, 0.12) 0px 4px 6px,
    rgba(52, 87, 155, 0.17) 0px 12px 13px, rgba(52, 87, 155, 0.09) 0px -3px 5px;
    align-self: center;
  @media (max-width: 1110px) {
    width: 270px;
    height: 270px;
  }
  &:hover {
    box-shadow: rgba(52, 87, 155, 0.5) 0px 54px 55px,
    rgba(52, 87, 155, 0.5) 0px -12px 30px, rgba(52, 87, 155, 0.5) 0px 4px 6px,
    rgba(52, 87, 155, 0.5) 0px 12px 13px, rgba(52, 87, 155, 0.5) 0px -3px 5px;
  }
`;
export const CategoryName = styled.h2``;
export const CategoryButton = styled(BsFillArrowRightCircleFill)`
  color: ${({ theme }) => theme.color};
  cursor: pointer;
`;
