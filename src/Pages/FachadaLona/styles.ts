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
  justify-content:start;
  padding-top: 5rem;
`
export const Block = styled.div`
  width: 25%;
  height: auto;
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:start;
  padding-bottom:8rem;
  h1{
    color:${Props => Props.theme.colors.title};
  }
  p{
    color:${Props => Props.theme.colors.subtitle};
  }
  @media (max-width:425px){
    width: 90%;
  }
`
export const Flex = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  align-items: center;
  justify-content: space-around;
  gap:1rem;
  @media (max-width:425px){
    flex-direction:column;
  }
`
export const Box = styled.div`
  width: 50%;
  height: auto;
  display:flex;
  align-items:center;
  justify-content:start;
  gap: 16px;
  @media (max-width:425px){
    width: 90%;
  }
`
export const Img = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 30px 0 30px 0;
  z-index:2;
  box-shadow: 5px 5px 10px 10px rgba(0,0,0,0.2);

  img{
    width: 100%;
    height:100%;
    border-radius: 30px 0 30px 0;
    
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


export const SliderContainer = styled.div`
  max-width: 80%;
  height: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  overflow: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar{
    display: none;
}
`
