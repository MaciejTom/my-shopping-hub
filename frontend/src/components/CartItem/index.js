import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HandleAmount } from "../HandleAmount";

import {
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  PriceDetail,
  Hr,
  DeleteButton,
  MinusButton,
  PlusButton,
} from "./CartItem.styles";

//Helpers
import { handleQuantity } from "../../utils/helpers";
//Actions
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { removeFromWishlist } from "../../redux/actions/wishlistActions";

const CartItem = ({ product, name, imageUrl, price, countInStock, qty, cart }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(qty);

  useEffect(() => {
    dispatch(addToCart(product, quantity));
  }, [quantity]);

  const removeItemFromCart = () => {
    console.log(product);
    dispatch(removeFromCart(product));
  };
  const removeItemFromWishlist = () => {
    console.log(product);
    dispatch(removeFromWishlist(product));
  };
  return (
    <>
      <Product>
        <ProductDetail>
          <Image src={imageUrl} />
          <Details>
            <ProductName to={`/product/${product}`}>
              {name}
            </ProductName>
            {/* <ProductId>
              <b>ID:</b> {product}
            </ProductId> */}
          </Details>
        </ProductDetail>
        <PriceDetail>
          {cart && <HandleAmount plus={()=> handleQuantity("plus", setQuantity, quantity, countInStock)} minus={() => handleQuantity("minus", setQuantity, quantity, countInStock)} amount={quantity}/>}
          {/* <ProductAmountContainer>
            <MinusButton
              size="20px"
              onClick={() =>
                handleQuantity("minus", setQuantity, quantity, countInStock)
              }
            />
            <ProductAmount>{quantity}</ProductAmount>

            <PlusButton
              size="20px"
              onClick={() =>
                handleQuantity("plus", setQuantity, quantity, countInStock)
              }
            />
          </ProductAmountContainer> */}
          <ProductPrice>${price}</ProductPrice>
        </PriceDetail>
        {cart ? <DeleteButton onClick={() => removeItemFromCart()} size="25px" /> : <DeleteButton onClick={() => removeItemFromWishlist()} size="25px" />}
        
      </Product>
      <Hr />
    </>
  );
};

export default CartItem;
