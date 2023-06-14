import React from 'react'
import Logo from "../Logo";
import Menu from "../Menu";
import { TopNav, Itens } from "./styles";
import MenuBurg from '../MenuBurg';


const Navbar = () => {


  return (
    <TopNav>
      <Logo></Logo>
      <Itens>
        <Menu></Menu>
      </Itens>
      <MenuBurg></MenuBurg>
    </TopNav>
  )
}

export default Navbar
