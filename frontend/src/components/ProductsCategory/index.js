//Components
import SingleProductElement from "../SingleProductElement";
import Spinner from "../Spinner";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";
// Styles
import {
  SidebarContainer,
  CategoryTitle,
  CategoryProducts,
} from "./ProductsCategory.styles";

const ProductsCategory = ({ category }) => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  
  const { products, loading, error } = getProducts;

  
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    console.error(error)
    return <div>SOMETHING WENT WRONG :/</div>;
  }
  console.log(products)
  return (
    <SidebarContainer>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryProducts>
          {products.map(product => 
         
            <SingleProductElement key={product._id} {...product}/>
            )}
        
      </CategoryProducts>
    </SidebarContainer>
  );
};

export default ProductsCategory;
