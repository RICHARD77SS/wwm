import styled from 'styled-components'

export const Models = styled.div`
  width:100%;
  height: auto;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  gap:10px;
  background: ${Props => Props.theme.colors.sec};
  padding-bottom: 4rem;
  h2 {
    padding-top: 3rem;
    padding-bottom: 2rem;
    color: #000;
  }
`
export const Image = styled.div`
  width: 400px;
  height: auto;
  display:flex;
  align-items:center;
  justify-content:start;
  flex-direction:column;
  gap:1rem;
  h2{
    color:${Props => Props.theme.colors.title};
  }
  a{
    color:${Props => Props.theme.colors.pri};
  }
  p{
    opacity: 0;
    transition: opacity 1s;
  }
  :hover {
    p{
      opacity:1;
    }
  }
  img{
    width: 100%;
    height: 100%;
  }
`
export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
export const Block = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-bottom: 15px solid ${Props=>Props.theme.colors.pri};
`
export const Description = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:  8rem 0 0rem 0; 
  h3{
    font-size: 2rem;
    color: ${Props=>Props.theme.colors.pri};
  }
  a{
    padding: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    color:${Props => Props.theme.colors.pri}; 
     :hover {
       color:${Props => Props.theme.colors.title};
     }
  }
`  