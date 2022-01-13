//Styles
import {
  Wrapper,
  ImgContainer,
  Image,
  Desc,
  InfoContainer,
  Title,
  Price,
  TitleContainer,
  Heart,
  AddContainer,
  AmountContainer,
  Button,
  Amount,
  Minus,
  Plus,
} from "./SingleProductScreen.styles";

//Components
import Spinner from "../Spinner";

//React
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

//Router
import { useParams, useHistory } from "react-router-dom";

//Helpers
import { handleQuantity } from "../../utils/helpers";

//Hooks
import {useIsOnList} from '../../hooks/useIsOnList'

//Redux
import { addToWishlist, removeFromWishlist } from "../../redux/actions/wishlistActions";

const SingleProductScreen = () => {

  const { id } = useParams();

  const history = useHistory();
  
  const [flags, setFlags] = useState({
    like: false
  });

  useIsOnList(id, flags, setFlags)


  const addToWishlistHandler = () => {
    if (flags.like) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist(id, 1));
    }
    setFlags((prev) => ({
      ...prev,
      like: !flags.like,
    }));
  };

  

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

 

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div>SOMETHING WENT WRONG :/</div>;
  }

  const addToCartHandler = () => {
    dispatch(addToCart(id, quantity));
    history.push("/cart");
  };

  return (
    <Wrapper>
      <ImgContainer>
        <Image src={product.imageUrl} />
      </ImgContainer>
      <InfoContainer>
         <TitleContainer>
         <Title>{product.name}</Title>
        <Heart size="30px" clicked={flags.like} onClick={() => addToWishlistHandler()}/>
        </TitleContainer>
        <Desc>{product.description}</Desc>
        <Price>${product.price}</Price>
        
        <AddContainer>
          <AmountContainer>
            <Minus
              onClick={() =>
                handleQuantity(
                  "minus",
                  setQuantity,
                  quantity,
                  product.countInStock
                )
              }
            />
            <Amount>{quantity}</Amount>
            <Plus
              onClick={() =>
                handleQuantity(
                  "plus",
                  setQuantity,
                  quantity,
                  product.countInStock
                )
              }
            />
          </AmountContainer>
          <Button onClick={() => addToCartHandler()}>ADD TO CART</Button>
        </AddContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default SingleProductScreen;
