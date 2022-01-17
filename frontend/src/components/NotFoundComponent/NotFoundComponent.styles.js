import styled from "styled-components";
//Router
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1.2rem;
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 20rem;
`;

export const Button = styled(Link)`
  font-size: 1rem;
  padding: 0.8rem 1rem;
  border: none;
  background: #34579b;
  color: #fff;
  text-decoration: none;
`;
