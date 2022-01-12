//Redux
import {useSelector} from 'react-redux'

export const useGetCartCount = () => {


    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }  