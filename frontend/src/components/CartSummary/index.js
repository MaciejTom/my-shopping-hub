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

const CartSummary = ({getCartCount, getCartSubtotal}) => {
  return (
    <Summary>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      <SummaryItem>
        <SummaryItemText>Subtotal</SummaryItemText>
        <SummaryItemPrice>$ 80</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Subtotal items</SummaryItemText>
        <SummaryItemPrice>{getCartCount()}</SummaryItemPrice>
      </SummaryItem>
      
      <SummaryItem type="total">
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>${getCartSubtotal()}</SummaryItemPrice>
      </SummaryItem>
      <Button>CHECKOUT NOW</Button>
    </Summary>
  );
};

export default CartSummary;
