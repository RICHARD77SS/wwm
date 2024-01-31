import { ReactNode } from 'react';
import { Item } from './styles'

interface Props {
  href?: string;
  children?: ReactNode;
}

const MenuItem = ({ children, ...Props }: Props) => {
  return (
    <button {...Props}>
      {children}
    </button>
  )
}
export default MenuItem