import React from 'react'
import Logo from "../Logo";
import Menu from "../Menu";
import { TopNav, Itens } from "./styles";
import MenuBurg from '../MenuBurg';
import DropOption from '../DropOptions';

interface Props {
  logo?: React.ReactElement
  menu?: React.ReactElement
  menuBurg?: React.ReactNode
}
const Nav = ({ logo, menu, menuBurg, ...Props }: Props) => {


  return (
    <TopNav {...Props}>
      {logo}
      <Itens>
        {menu}
      </Itens>
      {menuBurg}
    </TopNav>
  )
}

export default Nav
