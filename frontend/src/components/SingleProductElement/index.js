//Styles
import { Product, ProductInfo, ProductName, ProductImage, ProductDesc, ProductPrice, ProductLink } from './SingleProductElement.styles'

const SingleProductElement = ({imageUrl, name, price, description, _id}) => {
   
    return (
        <Product>
            <ProductImage src={imageUrl} alt={name}/>
            <ProductInfo>
                <ProductName>{name}</ProductName>
                <ProductDesc>
                   {description?.substring(0, 100)}...
                </ProductDesc>
                <ProductPrice>
                    ${price}
                </ProductPrice>
                <ProductLink to={`/product/${_id}`}>
                    View
                </ProductLink>
            </ProductInfo>
        </Product>
    )
}

export default SingleProductElement
