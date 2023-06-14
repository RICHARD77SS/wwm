import styled from 'styled-components'

export const MenuList = styled.ul`
    width: auto;
    height: 50px;
    align-items: center;
    justify-content:center;
    z-index:20;
  @media (max-width:720px){
    width: 100%;
    height: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    background:${Props => Props.theme.colors.sec};
    z-index:20;
  }
`
export const MenuBg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    right: 0;

`
export const Itens = styled.div`
    position:fixed;
    top: 100px;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
`
export const Closed = styled.div`
  position:fixed;
  top: 0;
  bottom:0;
  left:0;
  right: 0;
  background:rgba(0,0,0,0.3);
  z-index:10;
`
