import React, { useState } from "react";

import videoImg from "../../img/controller-gaming.png";

//Styles
import {
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
  HeroImage,
  HeroImageDiv
} from "./Header.styles";

const Hero = () => {
  return (
    
      <HeroContent>
        <HeroItems>
          <HeroH1>Top Deals</HeroH1>
          <HeroP>The best electronic store</HeroP>
          <HeroBtn to="/laptops">Go to shop</HeroBtn>
        </HeroItems>
        <HeroImageDiv>
          
          <HeroImage src={videoImg} />
        </HeroImageDiv>
      </HeroContent>
    
  );
};

export default Hero;
