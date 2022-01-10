import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
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
  PlusButton
} from "./CartItem.styles";



//Helpers
import {handleQuantity} from '../../helpers'
//Actions 
import { addToCart } from '../../redux/actions/cartActions';

const CartItem = ({
  product,
  name,
  imageUrl,
  price,
  countInStock,
  qty,
}) => {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(qty)

  useEffect(() => {
    dispatch(addToCart(product, quantity))
  }, [quantity])

 const removeFromCart = () => {
   console.log(product)
  //  dispatch(removeFromCart(product))
 }
  return (
    <>
      <Product>
        <ProductDetail>
          <Image src={imageUrl} />
          <Details>
            <ProductName to={`/product/${product}`}>
              <b>Product:</b> {name}
            </ProductName>
            <ProductId>
              <b>ID:</b> {product}
            </ProductId>
            <ProductColor color="black" />
            {/* <ProductSize>
              <b>Size:</b> 37.5
            </ProductSize> */}
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <MinusButton size='20px' onClick={() => handleQuantity("minus", setQuantity, quantity, countInStock)} />  
            <ProductAmount>{quantity}</ProductAmount>

            <PlusButton size='20px' onClick={() => handleQuantity("plus", setQuantity, quantity, countInStock)} />
          </ProductAmountContainer>
          <ProductPrice>${price}</ProductPrice>
        </PriceDetail>
        <DeleteButton onClick={() => removeFromCart()}size='25px'/>
      </Product>
      <Hr />
    </>
  );
};

export default CartItem;
