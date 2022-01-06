//Styles
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, ShopAmount } from "./Sidebar.styles";

const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
     <Icon>
       <CloseIcon onClick={() => toggleSidebar()}/>
     </Icon>
     <SidebarWrapper>
       <SidebarMenu>
         <SidebarLink to="/" onClick={() => toggleSidebar()}>
           HOME
         </SidebarLink>
         <SidebarLink to="/shop" onClick={() => toggleSidebar()}>
           SHOP
         </SidebarLink>
         <SidebarLink to="/cart" onClick={() => toggleSidebar()}>
           CART <ShopAmount>0</ShopAmount>
         </SidebarLink>
         </SidebarMenu>
     </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
