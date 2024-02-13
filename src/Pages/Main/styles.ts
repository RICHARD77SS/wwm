import styled from 'styled-components'

export const Mains = styled.div`
  width: 100%;
  height: 800px;
  background: #f4f4f4;
  display: flex;
  align-items: flex-start;
  justify-content:space-around;


`
export const Side = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  background-image: url('https://img.freepik.com/fotos-gratis/fundo-de-formas-geometricas-abstratas-em-azul_24972-1838.jpg?w=826&t=st=1693776038~exp=1693776638~hmac=bb51e1244ec680091e87a9331790a88cb6d4a116e65e55ff1978963772c86d47') ;
  background-repeat: no-repeat;
  background-size: cover;
    h2 {
    color:#fddd00;
    text-shadow: 0px 5px 5px #000;
    font-size:50px;
  }


`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content:center;
  padding-left: 2rem;
  img{
    width: 50%;
    position:absolute
    
  }
  h2 {
    color:#fddd00;
    font-size:50px;
    z-index: 10;
     display: inline-block;
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3s steps(20, end) alternate; 
  @media (max-width: 1280px){
    img{
      width: 100%;
      height:550px;
    }
    align-items: center;;
  }
  @media (max-width:425px){
    h2{
      font-size: 2rem;
    }
  }

`
export const Image = styled.div`
  width: 100%;
  height:100%;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/cwwm-5c648.appspot.com/o/fachadaacm%2FSnapinsta.app_322979681_1509796269495804_4828298773229714130_n_1080.jpg?alt=media&token=da8404e4-4b39-4e50-9df7-9055fa9b170d') ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 25%;
    @media (max-width: 1280px){
    display: none;
  }
`