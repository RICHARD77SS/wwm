import ImageGallery from '../ShowImages';
import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, Image } from './styles'

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
              <img src="https://fv2-7.failiem.lv/thumb_show.php?i=wsdry2h5dx&view&v=1" alt="" />
            </Img>
            <Img>
              <img src="https://fv2-8.failiem.lv/thumb_show.php?i=xz2dw8e5nw&view&v=1" alt="" />
            </Img>
            <Img>
              <img src="https://fv2-4.failiem.lv/thumb_show.php?i=4uaknrfqc4&view&v=1" alt="" />
            </Img>
          </Box>
        </Flex>
        <More>
          <h2>Modelos</h2>
          <SliderContainer>
            <ImageGallery locationName='toldos' />
          </SliderContainer>
        </More>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Tipos de toldos</h2>
          <br />
          <p>Os toldos são estruturas bem versateis eles podem ser feitos fixos ende a estrutura é feira de tubos metalico e sua cobertura feita frequentemente de lona ou de policarbonato,
          </p>
          <p>Tem tambem os toldos retrateis que você pode recolhelos quando nao há nessesidade de utilizalo, pode ser feito com catraca  onde voce utiliza uma manivela para enrolalo, com mola onde ele se enrola quando solto, ou até mesmo toldo retratil articulado que tem um braço embutido e se abre com um efeito sanfona</p>
          <p>Os toldos retrateis podem tambem serem acionados por um motor se for de sua preferencia.</p>
          <br />
          <br />
          <br />
          <Image>
            <img src="https://firebasestorage.googleapis.com/v0/b/cwwm-5c648.appspot.com/o/toldos%2FSnapinsta.app_412297140_704896068283828_1316233266633509419_n_1080.jpg?alt=media&token=d205fcdb-23fd-4922-bc6c-e0d315779fd2" alt="" />
          </Image>
        </Block>
      </Content>
    </Container>
  )
}

export default Toldos;