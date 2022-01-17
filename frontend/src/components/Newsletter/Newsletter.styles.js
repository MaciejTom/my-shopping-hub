import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
    0deg,
    rgba(52, 87, 155, 0) 0%,
    rgba(52, 87, 155, 0.1741071428571429) 50%,
    rgba(52, 87, 155, 0) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5vw 2rem max(10vw, 100px);
`;
export const Title = styled.h2`
  font-size: clamp(2.5rem, 10vw, 4rem);
  margin-bottom: 1.2rem;
`;

export const Desc = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  font-weight: 300;
  color: #a5a5a5;
  margin: 0;
  margin-bottom: 1.2rem;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  @media (max-width: 380px) {
    width: 80%;
  }
`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 1.2rem;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: ${({ theme }) => theme.color};
  color: white;
`;

export const EmailInfoOk = styled.span`
  color: green;
  border: #008000 solid 1px;
  border-top: 0;
  background: #ccffcc;
  padding: 0.4rem 0.8rem;
  width: 50%;
  font-size: 0.8rem;
`;
export const EmailInfoError = styled.span`
  color: red;
  border: red solid 1px;
  border-top: 0;
  background: #ffd4d4;
  padding: 0.4rem 0.8rem;
  width: 50%;
  font-size: 0.8rem;
`;
