//Components
import CartItem from "../CartItem";
import CartSummary from "../CartSummary";
//Styles
import { List, Info, Empty } from "./ProductList.style";

const ProductList = ({ list, cart }) => {
  return (
    <List>
      <Info list={list.length}>
        {list.length > 0 ? (
          list.map((item) => <CartItem key={item.product} {...item} cart={cart} />)
        ) : (
          <Empty>YOUR {cart ? "CART" : "WISHLIST"} IS EMPTY!</Empty>
        )}
      </Info>
      {cart && <CartSummary />}
    </List>
  );
};

export default ProductList;
