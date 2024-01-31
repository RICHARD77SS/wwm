
import React from 'react';
import { Wrapper, Droped } from './styles'
import { NavLink } from 'react-router-dom';
import Button from '../Button';


interface props {
  optionName?: string
  options?: Array<object>
}
const DropOption = ({ optionName, options, ...Props }: props) => {
  const [dropedOpen, setDropedOpen] = React.useState(false);

  return (
    <Wrapper {...Props}>
      <button
        onMouseEnter={() => setDropedOpen(true)}
        onMouseLeave={() => setDropedOpen(false)}
      >{optionName}</button>
      {dropedOpen ?
        <>
          <Droped onMouseEnter={() => setDropedOpen(true)}
            onMouseLeave={() => setDropedOpen(false)} className='droped'>
            {options?.map((option: any, index: number) => {
              { console.log(options) }
              return (
                <NavLink key={index} className='navlink' to={option.pageLink}>
                  <button>{option.pageName}</button>
                </NavLink>
              )
            })}
          </Droped>
        </> : null}
    </Wrapper>
  )
}

export default DropOption;