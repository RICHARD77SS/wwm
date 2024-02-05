import styled from 'styled-components'

export const TopNav = styled.nav`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Props => Props.theme.colors.pri};
  border-bottom: 5px solid #dcf763;
  padding: 0 10%;
  button{
    width: 40px;
    height: 30px;
    margin: 10px;

  }
  h2{
    margin: 8px 10px;
  }
  @media (max-width: 1058px){
    button{
      display: block;
      border: none;
      width: auto;
      color:#000;
      font-size: 1rem;
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
