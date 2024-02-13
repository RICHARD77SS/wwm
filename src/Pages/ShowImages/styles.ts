
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  scrollbar-width: none;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar{
    display: none;
}
`
export const SliderContainer = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #000;
  overflow-y: hidden;
  overflow-x: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar{
    display: none;
}
`

export const SliderImage = styled.div`
  width: 450px;
  height: auto;
  display: flex;
  
`

export const ButtonContainer = styled.div`
  width: 85%;
  height: 50px;
  display: flex;
  align-items:center;
  justify-content:center;
  gap: 90%;
  position: absolute;
  transform: translatex(-3%);
  transform:translatey(8rem);
  button {
    background-color: ${Props => Props.theme.colors.sec};
    border-radius:50px;
    border:none;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);
    color: ${Props => Props.theme.colors.pri};
    :hover {
      opacity: 0.5;
    }
    width: 50px;
    height: 50px;
  }
`
