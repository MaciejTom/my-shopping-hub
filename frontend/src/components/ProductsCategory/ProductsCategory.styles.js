import styled from "styled-components/macro";

export const SidebarContainer = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
`;

export const CategoryTitle = styled.h1`
  font-size: 1.5rem;
  color: #171717;
  margin-bottom: 1rem;
  margin-left: 8px;
`;

export const CategoryProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* gap: 2rem; */
  padding: 0 20px;
`;
