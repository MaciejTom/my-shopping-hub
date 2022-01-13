import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../CartItem";
import CartSummary from "../CartSummary";
import {HeadingSubpage} from "../HeadingSubpage";

import {
  Wrapper,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
 
} from "./CartComponent.styles";

const CartComponent = () => {
  const [isBagDisplaying, setIsBagDisplaying] = useState(true);

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const getListCount = (list) => {
    return list.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getListSubtotal = (list) => {
    return list.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <> 
      
      <HeadingSubpage name={"YOUR BAG"}/>
      <Wrapper>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText onClick={() => setIsBagDisplaying(true)}>
              Shopping Bag({getListCount(cartItems)})
            </TopText>
            <TopText onClick={() => setIsBagDisplaying(false)}>
              Your Wishlist ({getListCount(wishlistItems)})
            </TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          {isBagDisplaying ? (
            <>
              <Info>
                {cartItems.length ? (
                  cartItems.map((item) => <CartItem key={item._id} {...item} />)
                ) : (
                  <div>
                    EMPTY CART <Link to="/category">GO BACK</Link>
                  </div>
                )}
              </Info>
              <CartSummary
                cartCount={getListCount(cartItems)}
                cartSubtotal={getListSubtotal(cartItems)}
              />
            </>
          ) : (
            <div>asd</div>
          )}
        </Bottom>
      </Wrapper>
    </>
  );
};

export default CartComponent;
