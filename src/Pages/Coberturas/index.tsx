import ImageGallery from '../ShowImages'
import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, Image } from './styles'
const Coberturas = () => {

  const slide = document.getElementById('slide')
  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Coberturas</h1>
            <h2></h2>
            <p>A estrutura de nossas cobertura é feita em sua maioria em tububos galvanizados ou vigas de aço atraves do processo de soldagem dos materiais, a cobertura em si vai de acordo com a nessecidade do cliente, podendo ser feita de diversos materiais, como telhas de zinco, telhas sanduiche ou em policarbonato  </p>
          </Block>
          <Box>
            <Img>
              <img src="https://fv9-4.failiem.lv/thumb_show.php?i=h3rve7rjnh&view&v=1" alt="" />
            </Img>
            <Img>
              <img src="https://fv9-7.failiem.lv/thumb_show.php?i=bsedrcfccp&view&v=1" alt="" />
            </Img>
            <Img>
              <img src="https://fv9-2.failiem.lv/thumb_show.php?i=hc66qq6e8z&view&v=1" alt="" />
            </Img>
          </Box>
        </Flex>
        <More>
          <h2>Modelos</h2>
          <SliderContainer>
            <ImageGallery locationName='coberturas' />
          </SliderContainer>
        </More>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Zinco</h2>
          <br />
          <p>O a telha zincada é feita atraves de uma chapa metalica com uma camada anticorrosiva que pode ser moldada em diversos formatos, tambem pode ser pintada para uma pelhor aparencia, a telha de zinco nao oferece um bom isolamento termico nem acustico por ser feita em um material metalico ela transmite o som e a temperado so ambiente externo sendo assim mais indicada para galpões e locais com isolamento termico apropriado
          </p>
          <br />
          <Image>
            <img src="https://i.postimg.cc/nz3L2r58/cp-page-0001.jpg" alt="" />

          </Image>
        </Block>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Sanduiche</h2>
          <br />
          <p>A telha sanduiche é uma telha feita com duas chapas de zinco e um nucleo de isopor, sedo uma otima opçao para conter o calor e ter uma melhor eficiecia em isolação termo acustica, podendo ser aplicada em diversos locais</p>
          <br />
          <Image>
            <img src="https://jaferroeaco.com.br/wp-content/uploads/2022/01/Telhas-Termoacusticas-sem-revestimento2.jpg" alt="" />

          </Image>
        </Block>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Policarbonato</h2>
          <br />
          <p>O policarbonato é um material transparente ou fosco sendo ele reto e esta disponivel em diversas cores, é um material resistente a raios uv e a quebras por ser flexivel</p>
          <br />
          <Image>
            <img src="https://i.postimg.cc/59S99QvW/D-NQ-NP-767884-MLB53559730028-022023-O.webp" alt="" />

          </Image>
        </Block>
      </Content>
    </Container>
  )
}

export default Coberturas;