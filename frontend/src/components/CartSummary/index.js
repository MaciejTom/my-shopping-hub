//Styles
import {
  Content,
  Title,
  Items,
  ItemText,
  ItemPrice,
  Button,
  Continue,
} from "./CartSummary.styles";
//Redux
import { useSelector } from "react-redux";
//Hooks
import { useGetCartCount } from "../../hooks/useGetCartCount";
//Components
import StripeComponent from "../StripeComponent";

const CartSummary = () => {
  const { cartItems } = useSelector((state) => state.cart);

  //Get total amount of products
  const shopTotalProducts = useGetCartCount();
  const shippingPrice = 9;

  const getListSubtotal = (list) => {
    return list.reduce((price, item) => item.price * item.qty + price, 0);
  };
  const totalPrice = getListSubtotal(cartItems) + shippingPrice;

  return (
    <Content>
      <Title>ORDER SUMMARY</Title>
      <Items>
        <ItemText>Total items</ItemText>
        <ItemPrice>{shopTotalProducts}</ItemPrice>
      </Items>
      <Items>
        <ItemText>Estimated Shipping</ItemText>
        <ItemPrice>${shippingPrice}</ItemPrice>
      </Items>
      <Items>
        <ItemText>Subtotal</ItemText>
        <ItemPrice>${getListSubtotal(cartItems)}</ItemPrice>
      </Items>

      <Items type="total">
        <ItemText>Total</ItemText>
        <ItemPrice>${totalPrice}</ItemPrice>
      </Items>
      <StripeComponent listTotal={totalPrice}>
        <Button as="button">CHECKOUT NOW</Button>
      </StripeComponent>
      <Continue smooth to="/#categories">
        CONTINUE SHOPPING
      </Continue>
    </Content>
  );
};

export default CartSummary;
