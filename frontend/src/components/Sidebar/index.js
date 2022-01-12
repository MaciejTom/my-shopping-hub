//Styles
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  ShopAmount,
  CartIcon,
} from "./Sidebar.styles";
import { useGetCartCount } from "../../hooks/useGetCartCount";

const Sidebar = ({ toggleSidebar, isOpen }) => {
  const shopTotalProducts = useGetCartCount();

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={() => toggleSidebar()} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={() => toggleSidebar()}>
            HOME
          </SidebarLink>

          <SidebarLink to="/laptops" onClick={() => toggleSidebar()}>
            LAPTOPS
          </SidebarLink>
          <SidebarLink to="/gaming" onClick={() => toggleSidebar()}>
            GAMING
          </SidebarLink>
          <SidebarLink to="/phones" onClick={() => toggleSidebar()}>
            SMARTPHONES
          </SidebarLink>

          <SidebarLink to="/cart" onClick={() => toggleSidebar()}>
            <CartIcon size="27px" />
            <ShopAmount>{shopTotalProducts}</ShopAmount>
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
