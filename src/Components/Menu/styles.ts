import styled from 'styled-components'

export const MenuList = styled.ul`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content:start;
  @media (max-width:1058px){
    width: 100%;
    margin-top: 2.5rem;
    height: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:start;
    color:#000;
    background:${Props => Props.theme.colors.sec};
  }
  button {
    color:#000;
    border:none;
    background:transparent;
    color:  ${Props => Props.theme.colors.sec};
    font-weight: 600;
    cursor:pointer;
    font-size: 1.5rem;
  }
`

export const Wrapper = styled.div`


`

