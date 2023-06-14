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
`

export const Flex = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:1rem;
  
`
export const Block = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:start;
`

export const Box = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:start;
`
export const Img = styled.div`
  width: 200px;
  height: 250px;
  img{
    width: 100%;
    height:100%;
  }
`

