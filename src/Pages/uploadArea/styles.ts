import styled from 'styled-components';

export const UploadArea = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  display:flex;
  align-items:center;
  justify-content: center;
   button{
    width: 100px;
    height: 40px;
    margin: 1rem;
    border-radius: 5px;
    border:none;
    color:#fff;
  }
   button[title=upload]{
    width: 100px;
    height: 40px;
    margin: 1rem;
    border-radius: 5px;
    background:${Props => Props.theme.colors.sec};
    color:#fff;
  }
   button[title=select]{
    width: 100px;
    height: 40px;
    margin: 1rem;
    border-radius: 5px;
    color:#000;
    background:${Props => Props.theme.colors.pri};
    :hover {
      background:${Porps => Porps.theme.colors.sec};
      color:#fff;
    }
  }
   input{
    display: none;
  }
`