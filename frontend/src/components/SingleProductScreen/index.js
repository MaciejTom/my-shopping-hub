//Styles
import {
  Wrapper,
  ImgContainer,
  Image,
  Desc,
  InfoContainer,
  Title,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Button,
  Amount,
  Minus,
  Plus
  
} from "./SingleProductScreen.styles";

//Components
import Spinner from '../Spinner'

//React
import {useState, useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'

//Actions
import { getProductDetails } from '../../redux/actions/productActions'
import { addToCart } from '../../redux/actions/cartActions'

import {useParams, useNavigate} from 'react-router-dom';


const SingleProductScreen = () => {

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type == "plus" && quantity < product.countInStock) {
      setQuantity(prev => prev + 1)

    } else if (type == "minus" && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.getProductDetails);
  const {loading, error, product} = productDetails;

  const { id } = useParams();
  let navigate = useNavigate();
  

  

  useEffect(() => {
    
    if (product && id !== product._id) {
      dispatch(getProductDetails(id))
    }
  }, [dispatch, id, product])

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div>SOMETHING WENT WRONG :/</div>;
  }

  const addToCartHandler = () => {
    dispatch(addToCart(id, quantity))
    navigate("/cart");
  }
  
  return (
    <Wrapper>
      <ImgContainer>
        <Image src={product.imageUrl} />
      </ImgContainer>
      <InfoContainer>
        <Title>{product.name}</Title>
        <Desc>
          {product.description}
        </Desc>
        <Price>${product.price}</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="darkblue" />
            <FilterColor color="gray" />
          </Filter>
          {/* <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filter> */}
        </FilterContainer>
        <AddContainer>
            <AmountContainer>
              <Minus onClick={() => handleQuantity("minus")}/>
              <Amount>{quantity}</Amount>
              <Plus onClick={() => handleQuantity("plus")}/>
            </AmountContainer>
            <Button onClick={() => addToCartHandler()}>ADD TO CART</Button>
          </AddContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default SingleProductScreen;

