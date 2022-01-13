//Components
import SingleProductElement from "../SingleProductElement";
import Spinner from "../Spinner";
import {HeadingSubpage} from "../HeadingSubpage";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetchCategory } from "../../hooks/useFetchCategory";

// Actions
// import { getProducts as listProducts } from "../../redux/actions/productActions";
// Styles
import {
  SidebarContainer,
  CategoryProducts,
} from "./ProductsCategory.styles";

const ProductsCategory = ({ category, name }) => {
  const { data, loading, error } = useFetchCategory(category);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div>SOMETHING WENT WRONG :/</div>;
  }

  return (
    <>
     <HeadingSubpage name={name}/>
      <SidebarContainer>
        <CategoryProducts>
          {data.map((product) => (
            <SingleProductElement key={product._id} {...product} />
          ))}
        </CategoryProducts>
      </SidebarContainer>
    </>
  );
};

export default ProductsCategory;
