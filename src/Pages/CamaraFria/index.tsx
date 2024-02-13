import ImageGallery from '../ShowImages';
import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, Image } from './styles'
const CamaraFria = () => {

  const slide = document.getElementById('slide')
  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>CamaraFria</h1>
            <h2></h2>
            <p>Fazemos CamaraFria dos mais diversos modelos e com os mais diversos tipos de materiais veja a baixo algums dos modelos </p>
          </Block>
          <Box>
            <Img>
              <img src="https://www.gfrio.com.br/imagens/index/camara-fria.jpg" alt="" />
            </Img>
            <Img>
              <img src="https://www.solucoesindustriais.com.br/lista/imagens/camara-fria/camara-fria-01.jpg" alt="" />
            </Img>
            <Img>
              <img src="https://www.ludifrio.com.br/images/artigos/camara-fria-de-resfriados.jpg" alt="" />
            </Img>
          </Box>
        </Flex>
        <More>
          <h2>Modelos</h2>
          <SliderContainer>
            <ImageGallery locationName='camarafria' />
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
            <img src="https://www.weinberger.com.br/blog/wp-content/uploads/2018/05/WEINBERGER_BLOG_ABRIL_SAIBA-QUAIS-OS-PRINCIPAIS-CUIDADOS-QUE-VOC%C3%8A-DEVE-TER-COM-A-C%C3%82MARA-FRIA-1024x652.jpg" alt="" />

          </Image>
        </Block>
        <br />
        <br />
        <br />
        <br />
      </Content>
    </Container>
  )
}

export default CamaraFria;