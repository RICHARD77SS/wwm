import { Buttonst } from './styles'


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <Buttonst>
      {children}
    </Buttonst>
  )
}

export default Button