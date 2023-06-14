import { ReactNode } from 'react';
import { Item } from './styles'

interface Props {
  href?: string;
  children?: ReactNode;
}

const MenuItem = ({ children, href, ...Props }: Props) => {
  return (
    <Item {...Props}>
      <a href={href}>{children}</a>
    </Item>
  )
}
export default MenuItem