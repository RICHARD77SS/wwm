import { Closed, MenuList, MenuBg, Itens } from "./styles";
import React from "react";
import Menu from "../Menu";

const MenuBurg = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleMenu = () => { setOpenMenu(openMenu === true ? false : true) }

  return (
    <MenuBg>
      <button onClick={() => toggleMenu()}>aaa</button>
      {openMenu ?
        <Itens>
          <Closed onClick={() => toggleMenu()}></Closed>
          <MenuList>
            <Menu></Menu>
          </MenuList>
        </Itens>
        : null}
    </MenuBg>
  )
}

export default MenuBurg