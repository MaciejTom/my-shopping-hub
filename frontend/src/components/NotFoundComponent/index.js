//Styles
import { Wrapper, Content } from "./NotFoundComponent.styles";

import {Button} from './NotFoundComponent.styles'

const NotFoundComponent = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Page not found :(</h1>

    
         <Button to="/">Home</Button>
      
      </Content>
    </Wrapper>
  );
};

export default NotFoundComponent;
