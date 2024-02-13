import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #000;
  h2 {
    color: ${Props => Props.theme.colors.pri};
    font-size:3rem;
  }
  img{
    width: 200px;
    height: 200px;
  }
  @media (max-width:425px){
    flex-direction: column;
  }
`
export const Box = styled.div`
  width: 40%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  a{
    color:#fff;
  }
`