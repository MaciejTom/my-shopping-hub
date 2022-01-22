import {useState, useEffect} from 'react'
//Stripe
import StripeCheckout from "react-stripe-checkout";
//Image
import Image from '../../img/icon.JPG'
//axios
import axios from 'axios'
//Redux
import { clearCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const StripeComponent = ({children, listTotal}) => {

    const [stripeToken, setStripeToken] = useState(null)

    const KEY = "pk_test_51KKWrAHxRrS9vXKQRgicHAshwtpY5HMLPUUZZLHaLeuamfVxb248hjnhLAe8aSYvkLVnzlLrnViHLocQM79iMqhB000SfSvhqd"
   
    const dispatch = useDispatch();

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const response = await axios.post("http://localhost:5000/api/payment", {
                    tokenId: stripeToken.id,
                    amount: listTotal * 100,
                })
                dispatch(clearCart())
            } catch (error) {
                console.log(error)
            }
        }

        stripeToken && makeRequest();

    }, [stripeToken])

  const onToken = (token) => {
    setStripeToken(token)
  };

  return (
    <>
      <StripeCheckout
        name="My shopping hub"
        image={Image}        
        billingAddress
        shippingAddress
        amount={listTotal * 100}
        token={onToken}
        stripeKey={KEY}
      >
        {children}
      </StripeCheckout>
    </>
  );
};

export default StripeComponent;
