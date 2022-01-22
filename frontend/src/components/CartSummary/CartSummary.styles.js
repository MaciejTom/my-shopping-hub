import styled from "styled-components/macro";
import { NavHashLink } from "react-router-hash-link";

export const Content = styled.div`
  flex: 1;

  border-radius: 10px;
  padding: 2em;
  height: 100%;
  box-shadow: 0px 1px 6px 1px #e3e3e3;

  @media (max-width: 1050px) {
    width: 80%;
    flex-direction: column;
    align-self: center;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Items = styled.div`
  margin: 2rem 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  ${(props) =>
    props.type &&
    ` font-weight: 500;  
     font-size: 24px;
    padding: 1em;
    border-top: 1px solid ${props.theme.color};`}
`;

export const ItemText = styled.span``;

export const ItemPrice = styled.span``;

export const Continue = styled(NavHashLink)`
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  padding: 0.7rem 1rem;
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
  margin-bottom: 5px;
  display: block;
  text-align: center;
`;
export const Button = styled(Continue)`
  cursor: pointer;
`;
