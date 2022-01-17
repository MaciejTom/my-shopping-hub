import { useSelector } from "react-redux";
import { useEffect } from "react";

export const useIsOnList = (id, flags, setFlags) => {    
    
  const { wishlistItems } = useSelector((state) => state.wishlist);
  
  const { cartItems } = useSelector((state) => state.cart);

    const isOnList = () => {

        if (cartItems.find((item) => item.product == id)) {
            setFlags(prev => ({
               ...prev,
                   cart: !flags.cart,
            
                 }))
          }
        if (wishlistItems.find((item) => item.product == id)) {
            setFlags(prev => ({
               ...prev,
                   like: !flags.like,            
                 }))
          }        
    }   

  useEffect(() => {
    isOnList();  
  }, [])

};
