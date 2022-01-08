//Components 
import SingleProductElement from '../SingleProductElement'

//Styles
import {SidebarContainer, CategoryTitle, CategoryProducts} from './ProductsCategory.styles'

const ProductsCategory = ({category}) => {
    return (
        <SidebarContainer>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryProducts>
                <SingleProductElement/>
                <SingleProductElement/>
                <SingleProductElement/>
                <SingleProductElement/>
                <SingleProductElement/>
                <SingleProductElement/>
                <SingleProductElement/>
                <SingleProductElement/>
                <SingleProductElement/>
                <SingleProductElement/>
            </CategoryProducts>
            
        </SidebarContainer>
    )
}


export default ProductsCategory
