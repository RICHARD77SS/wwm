import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  background:${Props => Props.theme.colors.pri};
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:start;
`
export const Content = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding-top: 5rem;
`
export const Block = styled.div`
  width: 50%;
  height: auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  h1{
    color:${Props => Props.theme.colors.title};
  }
  p{
    color:${Props => Props.theme.colors.subtitle};
  }
  @media (max-width:667px){
    width: 80%;
  }
`
export const Image = styled.div`
  width:80%;
  height: 300px;
  display: flex;
  img{
    width:100%;
    height: 100%;
  }
`
export const Flex = styled.div`
  width: 80%;
  height: auto;
  display:flex;
  align-items: center;
  justify-content: space-around;
  gap:1rem;
  @media (max-width:667px){
    flex-direction:column;
  }
`
export const Img = styled.div`
  width: 400px;
  height: 400px;
  box-shadow: 5px 5px 10px 10px rgba(0,0,0,0.2);
  img{
    width: 100%;
    height:100%;

  }
`
export const More = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  padding-top: 4rem;
  flex-direction:column;
  align-items:center;
  justify-content:start;
`
