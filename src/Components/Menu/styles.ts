import styled from 'styled-components'

export const MenuList = styled.ul`
    width: 80%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content:center;
  @media (max-width:720px){
    width: 100%;
    margin-top: 2.5rem;
    height: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background:${Props=>Props.theme.colors.sec};
    
  }
`