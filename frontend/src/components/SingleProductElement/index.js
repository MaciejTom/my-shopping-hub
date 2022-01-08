//Styles
import { Product, ProductInfo, ProductName, ProductImage, ProductDesc, ProductPrice, ProductLink } from './SingleProductElement.styles'

const SingleProductElement = (props) => {
    return (
        <Product>
            <ProductImage src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"/>
            <ProductInfo>
                <ProductName>PLEJSTEJSZYN</ProductName>
                <ProductDesc>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet ullam, natus perspiciatis vel, totam repellendus numquam nihil reprehenderit libero unde a excepturi consequatur minus? Perferendis, eius reprehenderit ad eveniet.
                </ProductDesc>
                <ProductPrice>
                    $499.99
                </ProductPrice>
                <ProductLink to={`/product/${1111}`}>
                    View
                </ProductLink>
            </ProductInfo>
        </Product>
    )
}

export default SingleProductElement
