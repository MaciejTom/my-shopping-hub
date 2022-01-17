import { useState, useEffect } from "react";
//Redux
import { useDispatch } from "react-redux";
//Components
import HandleAmount from "../HandleAmount";
//Styles
import {
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductPrice,
  PriceDetail,
  Hr,
  DeleteButton,
} from "./CartItem.styles";
//Helpers
import { handleQuantity } from "../../utils/helpers";
//Actions
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { removeFromWishlist } from "../../redux/actions/wishlistActions";

const CartItem = ({
  product,
  name,
  imageUrl,
  price,
  countInStock,
  qty,
  cart,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(qty);

  useEffect(() => {
    dispatch(addToCart(product, quantity));
  }, [quantity]);

  const removeItemFromCart = () => {
    dispatch(removeFromCart(product));
  };
  const removeItemFromWishlist = () => {
    dispatch(removeFromWishlist(product));
  };

  return (
    <>
      <Product>
        <ProductDetail>
          <Image src={imageUrl} alt={name}/>
          <Details>
            <ProductName to={`/product/${product}`}>{name}</ProductName>
          </Details>
        </ProductDetail>
        <PriceDetail>
          {cart && (
            <HandleAmount
              plus={() =>
                handleQuantity("plus", setQuantity, quantity, countInStock)
              }
              minus={() =>
                handleQuantity("minus", setQuantity, quantity, countInStock)
              }
              amount={quantity}
            />
          )}
          <ProductPrice>${price}</ProductPrice>
        </PriceDetail>
        {cart ? (
          <DeleteButton onClick={() => removeItemFromCart()} size="25px" />
        ) : (
          <DeleteButton onClick={() => removeItemFromWishlist()} size="25px" />
        )}
      </Product>
      <Hr />
    </>
  );
};

export default CartItem;
