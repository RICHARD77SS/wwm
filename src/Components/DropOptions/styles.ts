import styled from 'styled-components';


export const Wrapper = styled.div`  
  button{
    width: 100px;
    color:#fff;
    :hover {
       color:${Props => Props.theme.colors.title};
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
  justify-content: start;
  background:${Props => Props.theme.colors.sec};
  color:#fff;
  @media (max-width: 1058px){
    background: ${Props => Props.theme.colors.sec};
    width: 200px;
    height: 350px;
    left: 55%;
    top: -2.5rem;
    box-shadow: inset .5px .5px 10px .5px #000;
    color:#fff;
  }
  
`
