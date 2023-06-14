import styled from 'styled-components'

export const Models = styled.div`
  width:100%;
  height: 800px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  gap:10px;
  background: ${Props => Props.theme.colors.sec};

`
export const Model = styled.div`
  width: 100%;
  height: 100px;
  background: ${Props => Props.theme.colors.pri};
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  gap:16px;
  p{
    width: 80%;
    display:none;
  }
  :hover {
    height: 400px;
    p{
      display:inline-block;
    }
  }
`