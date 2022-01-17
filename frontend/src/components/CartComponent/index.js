import { useState } from "react";
//Redux
import { useSelector } from "react-redux";
//Component
import HeadingSubpage from "../HeadingSubpage";
import ProductList from "../ProductList";
//Hook
import {useGetCartCount} from '../../hooks/useGetCartCount'

import {
  Wrapper,
  Top,
  TopButton,
  Heart, 
  Cart
} from "./CartComponent.styles";

const CartComponent = () => {

  const [isBagDisplaying, setIsBagDisplaying] = useState(true);

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const getListCount = (list) => {
    return list.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <>
      <HeadingSubpage name={"YOUR BAG"} />
      <Wrapper>
        <Top>
          <TopButton onClick={() => setIsBagDisplaying(true)}>
            Shopping Bag ({useGetCartCount()})   <Cart size="25px" />
          </TopButton>
          <TopButton onClick={() => setIsBagDisplaying(false)}>
            Your Wishlist ({getListCount(wishlistItems)})   <Heart size="25px" />
          </TopButton>
        </Top>

        {isBagDisplaying ? (
          <ProductList list={cartItems} cart />
        ) : (
          <ProductList list={wishlistItems} />
        )}
      </Wrapper>

      

    
    </>
  );
};

export default CartComponent;
