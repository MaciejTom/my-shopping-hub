import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import CartSummary from "../CartSummary";
import { HeadingSubpage } from "../HeadingSubpage";
import ProductList from "../ProductList";

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

  console.log(cartItems);
  const array = ['asdasdasd', 'qqqqqq']
  

  const getListCount = (list) => {
    return list.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getListSubtotal = (list) => {
    return list.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <>
      <HeadingSubpage name={"YOUR BAG"} />
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
          {/* {cartItems.length > 0 ? <div>WIĘKSZE</div> : <div>MNIEJSZE</div> } */}
        </Top>
        <ProductList />
        <ProductList list={array} cart />
        {/* {isBagDisplaying ? (
          <ProductList list={cartItems} cart />
        ) : (
          <ProductList list={wishlistItems} />
        )} */}
      </Wrapper>
    </>
  );
};

export default CartComponent;
