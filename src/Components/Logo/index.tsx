import { Logos } from "./styles";
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <Logos>
      <NavLink to='/'>
        <h2>WWM</h2>
        <p>WWM</p>
      </NavLink>
    </Logos>
  )
}

export default Logo