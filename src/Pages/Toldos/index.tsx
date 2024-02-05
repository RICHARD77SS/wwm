import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer, Image } from './styles'

const Toldos = () => {

  const slide = document.getElementById('slide')
  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Toldos</h1>
            <h2></h2>
            <p>Fazemos Toldos dos mais diversos modelos e com diversos tipos de materiais, o toldo tem como premissa protejer da chuva e do sol, e pode ser feito com uma estrutura metalica revestido de uma lona ou outros materiais como policarbonato.
            </p>
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
          <h2>Tipos de toldos</h2>
          <br />
          <p>...
          </p>
          <br />
          <Image>
            <img src="" alt="" />
          </Image>
        </Block>
      </Content>
    </Container>
  )
}

export default Toldos;