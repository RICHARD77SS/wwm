import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer, Image } from './styles'


const Barracas = () => {

  const slide = document.getElementById('slide')
  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Barracas</h1>
            <h2></h2>
            <p>As barracas sao jeralmente usadas em um ponto fixo para comercializar coisas, nos somos especializados em barracas de acm, que trazem uma beleza unica e com letras3D e adesivos se tornam unicas</p>
          </Block>
          <Box>
            <Img>
              <img src="https://fv2-5.failiem.lv/thumb_show.php?i=bqfhpmek7j&view&v=1" alt="" />
            </Img>
            <Img>
              <img src="https://fv2-4.failiem.lv/thumb_show.php?i=ecr83xhzqr&view&v=1" alt="" />
            </Img>
            <Img>
              <img src="https://fv2-1.failiem.lv/thumb_show.php?i=hm2qv2me3a&view&v=1" alt="" />
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
              <img src="https://fv2-1.failiem.lv/thumb_show.php?i=hm2qv2me3a&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-5.failiem.lv/thumb_show.php?i=mexsjmzrma&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-6.failiem.lv/thumb_show.php?i=du25ewqmn5&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-4.failiem.lv/thumb_show.php?i=ecr83xhzqr&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-5.failiem.lv/thumb_show.php?i=bqfhpmek7j&view&v=1" alt="" />
            </SliderImage>
            
          </SliderContainer>
        </More>
        <br />
        <br />
        <br />
        <br />
        <Block>

        </Block>
        
      </Content>
    </Container>
  )
}

export default Barracas;