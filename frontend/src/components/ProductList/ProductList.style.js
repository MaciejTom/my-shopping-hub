import styled from "styled-components/macro";
import {Link} from 'react-router-dom'

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  flex: 3;
  padding-right: 50px;
  @media (max-width: 1050px) {
    padding: 0;
  }
`;
export const GoBackLink = styled(Link)`
color: ${({theme}) => theme.color};
`

export const Empty = styled.div``