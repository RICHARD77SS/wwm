import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer, Image } from './styles'
const Letras3d = () => {

  const slide = document.getElementById('slide')
  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Letras3d</h1>
            <h2></h2>
            <p>Para que seu negocio chame a atenção desejada, nada melhor que um nome chamativo, ou ate mesmo um logo e para isso nos temos muitas opções de letras em 3d, que são feitas com materiais que ajudam a realçar ainda mais a beleza de seu negocio</p>
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
          <h2>Let</h2>
          <br />
          <p>.......
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

export default Letras3d;