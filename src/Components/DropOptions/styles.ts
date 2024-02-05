import styled from 'styled-components';


export const Wrapper = styled.div`  
  button{
    width: 150px;
    :hover {
       color:${Props => Props.theme.colors.hover};
    }
  }

`
export const Droped = styled.div`
  width:250px;
  height: auto;
  position: absolute;
  padding:1rem;
  top: 6rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items:start;
  background:${Props => Props.theme.colors.pri};
  @media (max-width: 1058px){
    background: #dcf763;
    width: 400px;
    height: 350px;
    left: 55%;
    top: -2.5rem;
    box-shadow: inset .5px .5px 10px .5px #000;
  }
  
`
