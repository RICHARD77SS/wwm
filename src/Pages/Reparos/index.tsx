import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer, Image } from './styles'
const Reparos = () => {

  const slide = document.getElementById('slide')
  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Reparos</h1>
            <h2></h2>
            <p>Fazemos Reparos em coberturas, fachadas, placas, portões, galpões, outdors, barracas, toldos... </p>
          </Block>
          <Box>
            <Img>
              <img src="" alt="" />
            </Img>
            <Img>
              <img src="" alt="" />
            </Img>
            <Img>
              <img src="" alt="" />
            </Img>
          </Box>
        </Flex>
        <More>
          <h2>Modelos</h2>
          <SliderContainer id='slide'>
            <ButtonContainer>
              <button title='button' onClick={() => { slide!.scrollLeft -= 200 }}>l</button>
              <button title='button' onClick={() => { slide!.scrollLeft += 200 }}>r</button>
            </ButtonContainer>
            <SliderImage>
              <img src="" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="" alt="" />
            </SliderImage>
            
          </SliderContainer>
        </More>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Camara fria</h2>
          <br />
          <p>Nossas camaras frias sao feitas sob medida, um de nossos tecnicos ira fazer uma visita ao local, caso seja nessesario e entao apos entender a sua nessesidade ira fazer a cotação, a camara consiste em um cubo feito em material metalico com nucleo termoisolante e um motor que servira para fazer a refrigeração
          </p>
          <br />
          <Image>
            <img src="https://i.postimg.cc/nz3L2r58/cp-page-0001.jpg" alt="" />
            
          </Image>
        </Block>
        
      </Content>
    </Container>
  )
}

export default Reparos;