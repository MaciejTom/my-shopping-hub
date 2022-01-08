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
  Amount
  
} from "./SingleProductScreen.styles";

import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const SingleProductScreen = ({ category }) => {
  return (
    <Wrapper>
      <ImgContainer>
        <Image src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" />
      </ImgContainer>
      <InfoContainer>
        <Title>Denim Jumpsuit</Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
          iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
          tristique tortor pretium ut. Curabitur elit justo, consequat id
          condimentum ac, volutpat ornare.
        </Desc>
        <Price>$ 20</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="darkblue" />
            <FilterColor color="gray" />
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
            <AmountContainer>
              <AiOutlineMinus />
              <Amount>1</Amount>
              <AiOutlinePlus />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default SingleProductScreen;

