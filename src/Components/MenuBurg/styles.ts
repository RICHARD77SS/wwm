import styled from 'styled-components'

export const MenuList = styled.ul`
    width: auto;
    height: 50px;
    align-items: center;
    justify-content:center;
    z-index:20;
  @media (max-width:1058px){
    width: 100%;
    height: 350px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: end;
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
    button{
      width: 100px;
      height: 50px;
      font-size: 1rem;
      background-color:transparent;
      @media(min-width: 1058px){
        display:none;
      }
    }

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
