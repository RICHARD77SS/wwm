import styled from 'styled-components';


export const Wrapper = styled.div`  
  button{
    width: 150px;
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
  background:#000;
 
  
  @media (max-width: 769px){
    background: #dcf763;
    width: 400px;
    height: 350px;
    left: 60%;
    top: -1rem;
    box-shadow: inset .5px .5px 10px .5px #000;
    border-radius: none;
  }
  
`
