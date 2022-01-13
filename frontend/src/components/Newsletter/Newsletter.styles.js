import styled from "styled-components";

export const Container = styled.div`
 
  background: linear-gradient(0deg, rgba(52,87,155,0) 0%, rgba(52,87,155,0.1741071428571429) 50%, rgba(52,87,155,0) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5vw 2rem max(10vw, 100px);
`;
export const Title = styled.h2`
  font-size: clamp(2.5rem, 10vw, 4rem);
  margin-bottom: 20px;
  
`;

export const Desc = styled.div`
  font-size: clamp(1rem,2.5vw,2rem);
  font-weight: 300;
  color: #a5a5a5;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const InputContainer = styled.div`
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
  padding-left: 20px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: ${({ theme }) => theme.color};
  color: white;
`;
