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

  const { cartItems } = useSelector((state) => state.cart);

  const getListCount = (list) => {
    return list.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getListSubtotal = (list) => {
    return list.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <Summary>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      <SummaryItem>
        <SummaryItemText>Total items</SummaryItemText>
        <SummaryItemPrice>{getListCount(cartItems)}</SummaryItemPrice>
      </SummaryItem>
      
      <SummaryItem type="total">
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>${getListSubtotal(cartItems)}</SummaryItemPrice>
      </SummaryItem>
      <Button>CHECKOUT NOW</Button>
    </Summary>
  );
};

export default CartSummary;
