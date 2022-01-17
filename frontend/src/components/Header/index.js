//Images
import videoImg from "../../img/controller-gaming.png";

//Styles
import {
  Content,
  HeroItems,
  Header,
  Subtitle,
  Button,
  HeroImage,
  HeroImageDiv,
} from "./Header.styles";

const Hero = () => {
  return (
    <Content>
      <HeroItems>
        <Header>Top Deals</Header>
        <Subtitle>The best electronic store</Subtitle>
        <Button to="/laptops">Go to shop</Button>
      </HeroItems>
      <HeroImageDiv>
        <HeroImage src={videoImg} />
      </HeroImageDiv>
    </Content>
  );
};

export default Hero;
