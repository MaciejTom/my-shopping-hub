import styled from "styled-components/macro";

export const SidebarContainer = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
 
`;

export const CategoryProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  padding: 0 20px;
`;
