import styled from "styled-components/macro";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 400px) {
    padding: 10px;
  }
`;
export const Container = styled.div`
  background: linear-gradient(
    270deg,
    rgba(52, 87, 155, 0) 0%,
    rgba(52, 87, 155, 1) 100%
  );
`;
export const PageTitle = styled.h1`
  font-size: 1.7rem;
  color: #171717;
  padding: 2rem 0;
  text-transform: uppercase;
  padding-left: 30px;
  color: white;
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

export const TopTexts = styled.div`
  @media (max-width: 400px) {
    display: none;
  }
`;
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;




