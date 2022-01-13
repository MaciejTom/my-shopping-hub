import { useState, useEffect } from "react";

//Styles
import {
  Product,
  ProductInfo,
  ProductName,
  ProductImage,
  ProductDesc,
  ProductPrice,
  ActionsDiv,
  Search,
  Heart,
  Cart,
  ProductLink,
  ProductText
} from "./SingleProductElement.styles";

//Redux
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlistActions";

import { useIsOnList } from "../../hooks/useIsOnList";

import { useDispatch, useSelector } from "react-redux";

const SingleProductElement = ({ imageUrl, name, price, description, _id }) => {
  const dispatch = useDispatch();

  const { wishlistItems } = useSelector((state) => state.wishlist);

  const [flags, setFlags] = useState({
    like: false,
    cart: false,
  });

  useIsOnList(_id, flags, setFlags);

  const addToCartHandler = () => {
    if (flags.cart) {
      dispatch(removeFromCart(_id));
    } else {
      dispatch(addToCart(_id, 1));
    }
    setFlags((prev) => ({
      ...prev,
      cart: !flags.cart,
    }));
  };

  const addToWishlistHandler = () => {
    if (flags.like) {
      dispatch(removeFromWishlist(_id));
    } else {
      dispatch(addToWishlist(_id, 1));
    }
    setFlags((prev) => ({
      ...prev,
      like: !flags.like,
    }));
  };

  return (
    <Product>
      <ProductImage src={imageUrl} alt={name} />
      <ProductInfo>
        <ProductText>
          <ProductName>{name}</ProductName>

          <ProductDesc>{description?.substring(0, 100)}...</ProductDesc>
          <ProductPrice>${price}</ProductPrice>
        </ProductText>
        <ActionsDiv>
          <Heart
            size="30px"
            clicked={flags.like}
            onClick={() => addToWishlistHandler()}
          />
          <ProductLink to={`/product/${_id}`}>
            <Search size="30px" to={`/product/${_id}`} />
          </ProductLink>

          <Cart
            size="30px"
            clicked={flags.cart}
            onClick={() => addToCartHandler()}
          />
        </ActionsDiv>
      </ProductInfo>
    </Product>
  );
};

export default SingleProductElement;
