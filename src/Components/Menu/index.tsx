import React from 'react'
import { MenuList } from "./styles";
import MenuItem from "../MenuItem";
import DropOption from '../DropOptions';



const Menu = () => {
  { }
  return (
    <MenuList>
      <MenuItem href='/'>
        <DropOption
          optionName={'Fachadas'}
          pageLink='/fachadaacm'
          options={[
            { pageName: 'ACM', pageLink: '/fachadaacm' },
            { pageName: 'Lona', pageLink: '/fachadalona' }
          ]} />
      </MenuItem>
      <MenuItem href='/'>
        <DropOption
          optionName={'Reparos'}
          pageLink='/reparos'
          options={[
          ]} />
      </MenuItem>

      <MenuItem href='/'>
        <DropOption
          optionName={'Letras'}
          pageLink='/letras3d'
        options={[
          { pageName: '3d', pageLink: '/letras3d' },

          ]} />
      </MenuItem>

      <MenuItem href='/'>
        <DropOption
          optionName={'Coberturas'}
          pageLink='/coberturas'
        options={[{pageName:'Coberturas',pageLink:'/coberturas'}]} />
      </MenuItem>

      <MenuItem href='/'>
        <DropOption
        optionName={'Estruturas'}
        pageLink='/galpao'
        options={[
          { pageName: 'Galpão', pageLink: '/galpao' },
          { pageName: 'Camara fria', pageLink: '/camarafria' },
          { pageName: 'Barraca', pageLink: '/barracas' },
          { pageName: 'Toldos', pageLink: '/toldos' }
          ]} />
      </MenuItem>
    </MenuList>
  )
}

export default Menu