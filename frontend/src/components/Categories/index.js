//Components
import CategoryDiv from "../CategoryDiv";
//Styles
import {Content} from './Categories.style'
//Logos
import phoneLogo from '../../img/mobile-phone.png'
import laptopLogo from '../../img/laptop.png'
import gamingLogo from '../../img/game-controller.png'

const Categories = () => {

  return (
    <>
      <Content id='categories'>
        <CategoryDiv name="Gaming" icon={gamingLogo} link={"/gaming"}/>
        <CategoryDiv name="Laptops" icon={laptopLogo} link={"/laptops"}/>
        <CategoryDiv name="Smartphones" icon={phoneLogo} link={"/phones"}/>
      </Content>
    </>
  );
};

export default Categories;
