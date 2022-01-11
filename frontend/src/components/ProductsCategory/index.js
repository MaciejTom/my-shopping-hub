//Components
import SingleProductElement from "../SingleProductElement";
import Spinner from "../Spinner";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useFetchCategory} from '../../hooks/useFetchCategory'

// Actions
// import { getProducts as listProducts } from "../../redux/actions/productActions";
// Styles
import {
  SidebarContainer,
  CategoryTitle,
  CategoryProducts,
} from "./ProductsCategory.styles";



const ProductsCategory = ({ category, name }) => {
  //   const dispatch = useDispatch();
  // const [cate, setCate] = useState([])
  // const getProducts = useSelector((state) => state.getProducts);

  // const getProductsByCategory = useSelector((state) => state.getProducstByCategory);

  // const { products, loading, error } = getProducts;

  // const { products2, loading2, error2 } = getProductsByCategory;

 

  const { data, loading, error } = useFetchCategory(category);

  console.log(data)

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div>SOMETHING WENT WRONG :/</div>;
  }

  return (
    <SidebarContainer>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryProducts>
        {data.map((product) => (
          <SingleProductElement key={product._id} {...product} />
        ))}
      </CategoryProducts>
    </SidebarContainer>
  );
};

export default ProductsCategory;
