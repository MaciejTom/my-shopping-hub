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
  Button,
} from "./SingleProductScreen.styles";

//Components
import Spinner from "../Spinner";
import HandleAmount from "../HandleAmount";
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
import { useIsOnList } from "../../hooks/useIsOnList";
//Redux
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlistActions";

const SingleProductScreen = () => {

  const [flags, setFlags] = useState({
    like: false,
  });
  const [quantity, setQuantity] = useState(1);


  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;


  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch(); 

  //Check is product in cart
  useIsOnList(id, flags, setFlags);

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

  const addToCartHandler = () => {
    dispatch(addToCart(id, quantity));
    setTimeout(() => history.push("/cart"), 500);
  }; 

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

  return (
    <Wrapper>
      <ImgContainer>
        <Image src={product.imageUrl} />
      </ImgContainer>
      <InfoContainer>
        <TitleContainer>
          <Title>{product.name}</Title>
          <Heart
            size="30px"
            clicked={flags.like}
            onClick={() => addToWishlistHandler()}
          />
        </TitleContainer>
        <Desc>{product.description}</Desc>
        <Price>${product.price}</Price>

        <AddContainer>
          <HandleAmount
            plus={() =>
              handleQuantity(
                "plus",
                setQuantity,
                quantity,
                product.countInStock
              )
            }
            minus={() =>
              handleQuantity(
                "minus",
                setQuantity,
                quantity,
                product.countInStock
              )
            }
            amount={quantity}
          />
          <Button onClick={() => addToCartHandler()}>ADD TO CART</Button>
        </AddContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default SingleProductScreen;
