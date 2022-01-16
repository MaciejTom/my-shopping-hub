import {
  AmountContainer,
  MinusButton,
  Amount,
  PlusButton,
} from "./HandleAmount.styles";

export const HandleAmount = ({ plus, minus, amount }) => {
  return (
    <AmountContainer>
      <MinusButton onClick={() => minus()} />
       <Amount>{amount}</Amount> 
       <PlusButton onClick={() => plus()} />
    </AmountContainer>
  );
};
