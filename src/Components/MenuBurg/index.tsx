import { Closed, MenuList, MenuBg, Itens } from "./styles";
import React from "react";
import Menu from "../Menu";

interface Props {
  children?: React.ReactNode
}

const MenuBurg = ({ children, ...Props }:Props) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleMenu = () => { setOpenMenu(openMenu === true ? false : true) }

  return (
    <MenuBg {...Props}>
      <button onClick={() => toggleMenu()}>Menu</button>
      {openMenu ?
        <Itens>
          <Closed onClick={() => toggleMenu()}></Closed>
          <MenuList>
            {children}
          </MenuList>
        </Itens>
        : null}
    </MenuBg>
  )
}

export default MenuBurg