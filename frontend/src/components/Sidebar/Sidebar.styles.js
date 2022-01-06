import styled from "styled-components/macro";
import { FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`

position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: green;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => isOpen ? '100%' : '0%'};
top: ${({isOpen}) => isOpen ? '0%' : '-100%'};
`
export const CloseIcon = styled(FaTimes)`
position: absolute;
top: 1.2rem;
right: 1.2rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
export const Icon = styled.div`

`
export const SidebarWrapper = styled.div`
color: white;
`
export const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2 ease-in-out;
text-decoration: none;
color: #fff;
curost: pointer;
&:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
}
`
export const SidebarMenu = styled.ul`
padding: 0;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media (max-width: 460px) {
    grid-template-rows: repeat(6, 60px);
}
`
export const ShopAmount = styled.div`

`
// export const CloseIcon = styled(FaTimes)`
// color: blue;

// `


// export const Nav = styled.nav`
// display: flex;
// flex-direction: column;

// `
// export const ShopAmount = styled.span``;