//Styles
import { 
  Content,
  Title,
  Items,
  ItemText,
  ItemPrice,
  Button,
  Continue
} from "./CartSummary.styles";
//Redux
import { useSelector } from "react-redux";
//Hooks
import {useGetCartCount} from '../../hooks/useGetCartCount'

const CartSummary = () => {

  const { cartItems } = useSelector((state) => state.cart);
  
//Get total amount of products
  const shopTotalProducts = useGetCartCount();

  const getListSubtotal = (list) => {
    return list.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <Content>
      <Title>ORDER SUMMARY</Title>
      <Items>
        <ItemText>Total items</ItemText>
        <ItemPrice>{shopTotalProducts}</ItemPrice>
      </Items>
      
      <Items type="total">
        <ItemText>Total</ItemText>
        <ItemPrice>${getListSubtotal(cartItems)}</ItemPrice>
      </Items>
      <Button as="button">CHECKOUT NOW</Button>
      <Continue smooth to="/#categories" >CONTINUE SHOPPING</Continue>
    </Content>
  );
};

export default CartSummary;
