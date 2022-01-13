import {Container, Title, Desc, InputContainer, Input, Button } from "./Newsletter.styles"
import {IoMdSend} from 'react-icons/io'


const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <IoMdSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;