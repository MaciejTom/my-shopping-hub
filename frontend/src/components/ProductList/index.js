import {useState} from "react";

import CartItem from "../CartItem";
import CartSummary from "../CartSummary";
import { List, Info, Empty, GoBackLink } from "./ProductList.style";

const ProductList = ({ list, cart }) => {
  
    console.log(list)

// console.log(list?.length > 0)
//   list.length > 0 ? console.log("SĄ WIEKSZE") : console.log("SĄ MNIEJSZE")

  return (
    <List>
      <Info>
      {list.length > 0 ? (
        list.map((item) => <div>{item}</div>)
      ) : (
        <div>PUSTY KOSZYK</div>
      )}
           {/* {list?.length > 0 ? <div>WIĘKSZE</div> : <div>MNIEJSZE</div> } */}
           {/* {!list?.length > 0 && <div>MNIEJSZE</div>} */}
        {/* {list.length > 0 ? (
          list.map((item) => <CartItem key={item._id} {...item} cart={cart} />)
        ) : (
          <div>NIEMA</div>
        )} */}
      </Info>
      {cart && <CartSummary />}
    </List>
  );
};

export default ProductList;
