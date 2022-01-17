import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  min-height: 15rem;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  flex: 3;
  padding-right: 50px;
  ${({ list }) =>
    list == 0 &&
    `align-items: center;
    justify-content: center;
    display: flex;`}

  @media (max-width: 1050px) {
    padding: 0;
  }
`;
export const Empty = styled.div`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  padding: 1rem 1rem 2rem;
`;
