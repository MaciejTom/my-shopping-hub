import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const HeroContent = styled.div`
 
  display: flex;
  max-height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 5vw 2rem;
  justify-content: space-between;
  align-items: center;
  row-gap: 4rem;
 
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 1rem 2rem;
    row-gap: 4rem;
  
  }
`;
export const HeroImage = styled.img`
  width: 100%;
  object-fit: contain;
  @media (max-width: 600px) {
    max-width: 400px;
  }
`;
export const HeroImageDiv = styled.div`
  max-width: 600px;
  display: flex;
  @media (max-width: 600px) {
    max-width: 260px;
    justify-content: center;
  }
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
 
  max-height: 100%;
  
  color: #fff;
  text-transform: uppercase;
  
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
      }
`;

export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.color};
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  color: #a5a5a5;
  font-size: clamp(1rem, 2.5vw, 2rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled(Link)`
  font-size: 1.4rem;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  padding: 1rem 2rem;
  border: none;
  background: ${({ theme }) => theme.color};
  color: #fff;
  transition: 0.2s ease-out;
  text-transform: capitalize;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
