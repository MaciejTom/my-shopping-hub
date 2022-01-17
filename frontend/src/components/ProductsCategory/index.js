//Components
import SingleProductElement from "../SingleProductElement";
import Spinner from "../Spinner";
import HeadingSubpage from "../HeadingSubpage";
//Hooks
import { useFetchCategory } from "../../hooks/useFetchCategory";
//Styles
import {
  SidebarContainer,
  CategoryProducts,
  Error
} from "./ProductsCategory.styles";

const ProductsCategory = ({ category, name }) => {

  const { data, loading, error } = useFetchCategory(category);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Error>SOMETHING WENT WRONG :/</Error>;
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
