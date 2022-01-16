import {useState} from "react"

import axios from 'axios'

import {
  Container,
  Title,
  Desc,
  Form,
  Input,
  Button,
  EmailInfoError,
  EmailInfoOk
} from "./Newsletter.styles";
import { IoMdSend } from "react-icons/io";

import { useForm } from "react-hook-form";

const Newsletter = () => {

  const [successMessage, setSuccessMessage] = useState("");
  
  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors
  } = useForm();

  const onSubmit = (data) => {
    
   console.log(data.email)
   postData(data)
  }
  

  const postData = async (data) => {

    const respond = await axios.post('/api/emails/add',  data.email);
    console.log(respond)

     setSuccessMessage(respond.data.message)

  }
  // const handleError = () => {
  //   setIsError(true)
  // }
  // const errorDissapear = () => {
  //   console.log("DISA")
  //   setIsError(false)
  // }
//  console.log(errors)

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <Form onSubmit={handleSubmit(onSubmit)}  >
        <Input 
          placeholder="Your email"
          {...register("email", {
            required: "Please enter email address",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Please enter a valid email address",
            },
          })}
          onChange={(e) => {
            clearErrors("email");
            setSuccessMessage("");

          }}
        />
        <Button>
       
          <IoMdSend />
        </Button>
        
      </Form>
       {errors.email && <EmailInfoError>{errors.email?.message}</EmailInfoError>}
          {successMessage && <EmailInfoOk>{successMessage}</EmailInfoOk>} 
    </Container>
  );
};

export default Newsletter;
