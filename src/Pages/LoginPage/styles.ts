import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height:auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 20px solid ${Props => Props.theme.colors.pri};
  border-bottom: 20px solid ${Props => Props.theme.colors.pri};
  h2{
    color:#000;
  }

  `
export const Block = styled.div`
  width: 100%;
  height:auto;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: 20px solid ${Props => Props.theme.colors.pri}; 
  button {
    width: 120px;
    height:  50px;
    margin:1rem;
    border:none;
    background:${Props => Props.theme.colors.title};
    color:#fff;
    font-weight:600;
    font-size: 1rem;
    :hover {
      background:${Porps => Porps.theme.colors.sec};
    }
  }
  `
export const InputUpload = styled.div`
  width:100%;
  height: 200px;
  display:flex;
  align-items: center;
  justify-content:center;
`