import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import CartItem from '../CartItem'
import CartSummary from '../CartSummary'

import {
  Wrapper,
  Title,  
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
} from "./CartComponent.styles";

const CartComponent = () => {

const dispatch = useDispatch();

const {cartItems} = useSelector(state => state.cart);

const getCartCount = () => {
  return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
}

const getCartSubtotal = () => {
  return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
}

return (
    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
          <TopText>Shopping Bag(2)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
      </Top>
      <Bottom>
        <Info>
          {cartItems.length ? cartItems.map(item => <CartItem key={item._id} {...item} />) : <div>EMPTY CART <Link to="/category">GO BACK</Link></div>}
          
        </Info>
        <CartSummary getCartCount={getCartCount} getCartSubtotal={getCartSubtotal}/>
      </Bottom>
    </Wrapper>
  );
};

export default CartComponent;
