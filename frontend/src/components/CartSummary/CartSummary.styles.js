import styled from "styled-components/macro";

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid ${({theme}) => theme.color};
  border-radius: 10px;
  padding: 20px;
  height: 100%;
  @media (max-width: 1050px) {
    width: 80%;
    flex-direction: column;
    align-self: center;
  }
  @media (max-width: 600px) {
    width: 100%;
    
  }
  
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  
    font-size: clamp(1rem,1.5vw,1.3rem);
    padding: 1rem 2rem;
    border: none;
    background: #34579b;
    color: #fff;
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s ease-out;
    text-transform: capitalize;
    font-weight: 400;
    -webkit-text-decoration: none;
    text-decoration: none;
    width: 100%;
    border-radius: 5px;
`;