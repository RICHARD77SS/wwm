import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer, Image } from './styles'
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
          <SliderContainer id='slide'>
            <ButtonContainer>
              <button title='button' onClick={() => { slide!.scrollLeft -= 200 }}>l</button>
              <button title='button' onClick={() => { slide!.scrollLeft += 200 }}>r</button>
            </ButtonContainer>
            <SliderImage>
              <img src="https://www.brastekcamarafria.com.br/wp-content/uploads/2017/08/C%C3%A2mara-Port%C3%A1til-Brastek-3.jpg" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://www.isocentro.com.br/wp-content/uploads/2019/03/produto-camara-fria-eps-03.jpg" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://images.tcdn.com.br/img/img_prod/687849/mini_camara_frigorifica_1000kg_para_congelados_inox_3_330_litros_klima_1683_1_20190309144352.jpg" alt="" />
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

export default CamaraFria;