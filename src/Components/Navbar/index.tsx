import Logo from "../Logo"
import Menu from "../Menu"
import MenuBurg from "../MenuBurg"
import Nav from "../Nav"


const Navbar = () => {


  return (
    <Nav logo={<Logo></Logo>} menu={<Menu></Menu>} menuBurg={<MenuBurg><Menu></Menu></MenuBurg>} />
  )
}

export default Navbar
