import styled from 'styled-components'

export const TopNav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: start;
  justify-content: center;
  background: ${Props => Props.theme.colors.pri};
  border-bottom: 5px solid #dcf763;
  button{
    width: 40px;
    height: 30px;
    margin: 10px;
    display: none;
  }
  h2{
    margin: 8px 10px;
  }
  @media (max-width: 1058px){
    button{
      display: block;
      background: #dcf763;
      border: none;
    }
  }
`
export const Itens = styled.div`
  width: 90%;
   @media (max-width: 1058px){
    ul{
      display: none;
    }
  }
`
