import { Logos } from "./styles";
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <Logos>
      <NavLink to='/'>
        <img src="https://firebasestorage.googleapis.com/v0/b/cwwm-5c648.appspot.com/o/logo%2Flogo2.png?alt=media&token=221deac2-73ea-4d7a-9425-9aeb3bfdf314" alt="" />
      </NavLink>
    </Logos>
  )
}

export default Logo