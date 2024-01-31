import React from 'react'
import { MenuList } from "./styles";
import MenuItem from "../MenuItem";
import DropOption from '../DropOptions';



const Menu = () => {
  { }
  return (
    <MenuList>

      <MenuItem href='/'>
        <DropOption optionName={'Fachadas'}
          options={[
            { pageName: 'ACM', pageLink: '/fachadaacm' },
            { pageName: 'Lona', pageLink: '/fachadalona' }
          ]} />
      </MenuItem>

      <MenuItem href='/'>
        <DropOption optionName={'Reparos'}
          options={[{ pageName: 'Portões', pageLink: '/fachadaacm' },]} />
      </MenuItem>

      <MenuItem href='/'>
        <DropOption optionName={'Letras'}
        options={[
          { pageName: 'ACM', pageLink: '/fachadaacm' },
          { pageName: 'Acrilico', pageLink: '/fachadalona' },
          { pageName: 'Pvc expandido', pageLink: '/fachadalona' }
          ]} />
      </MenuItem>

      <MenuItem href='/'>
        <DropOption optionName={'Coberturas'}
        options={[{pageName:'Coberturas',pageLink:'/coberturas'}]} />
      </MenuItem>

      <MenuItem href='/'>
        <DropOption optionName={'Estruturas'}
        options={[
          { pageName: 'Galpão', pageLink: '/fachadaacm' },
          { pageName: 'Camara fria', pageLink: '/fachadalona' },
          { pageName: 'Camara fria', pageLink: '/fachadalona' },
          { pageName: 'Camara fria', pageLink: '/fachadalona' }
          ]} />
      </MenuItem>
    </MenuList>
  )
}

export default Menu