import {
  Category,
  Icon,
  CategoryName,
  CategoryButton,
} from "./CategoryDiv.styles";

import {Link} from "react-router-dom";

const CategoryDiv = ({ name, icon, link}) => {
  return (
    <Category>
      <Icon src={icon} />
      <CategoryName>{name}</CategoryName>

      <Link to={link}><CategoryButton size="30px"/></Link>
    </Category>
  );
};

export default CategoryDiv;
