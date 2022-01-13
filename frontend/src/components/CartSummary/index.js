import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import { 
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./CartSummary.styles";

const CartSummary = ({cartCount, cartSubtotal}) => {
  return (
    <Summary>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      <SummaryItem>
        <SummaryItemText>Subtotal</SummaryItemText>
        <SummaryItemPrice>$ 80</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Subtotal items</SummaryItemText>
        <SummaryItemPrice>{cartCount}</SummaryItemPrice>
      </SummaryItem>
      
      <SummaryItem type="total">
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>${cartSubtotal}</SummaryItemPrice>
      </SummaryItem>
      <Button>CHECKOUT NOW</Button>
    </Summary>
  );
};

export default CartSummary;
