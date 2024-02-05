import { ReactNode } from 'react';
import { Item } from './styles'

interface Props {
  href?: string;
  children?: ReactNode;
}

const MenuItem = ({ children, ...Props }: Props) => {
  return (
    <Item{...Props}>
      {children}
    </Item>
  )
}
export default MenuItem