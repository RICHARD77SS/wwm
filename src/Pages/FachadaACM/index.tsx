import ImageGallery from '../ShowImages';
import { Container, Content, Block, Box, Flex, Img, More, SliderContainer} from './styles'

const Dropshipping = () => {

  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Fachadas em ACM</h1>
            <h3>O ACM</h3>
            <p>ACM é um revestimento feito de aluminio pintado com nucleo em plastico comumente utilisado em fachadas e barracas, com uma aparecia plana e uniforme tendo uma alta resistencia ele permite diversas combinaçoes para revestimentos e estruturas para a aparencia do seu negocio.</p>
          </Block>
          <Box>
            <Img>
              <img src="https://lh3.googleusercontent.com/p/AF1QipPvIN8e6t8RkAtNgH-RhUEQ4RRrk07_BXK3ulZP=s680-w680-h510" alt="" />
            </Img>
            <Img>
              <img src="https://lh3.googleusercontent.com/p/AF1QipMBshPKuCD8mN6TP_dNE8pVCtbIXOeZidFp-SQc=s680-w680-h510" alt="" />
            </Img>
            <Img>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/126059782_1282584335427789_2774713421372289858_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=XMHNqsK21OcAX-a_ms2&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfB5h5ysVVhVMssAqMxiZ24Bsny7cstys8bflbZHwaqfmQ&oe=65D49F53" alt="" />
            </Img>
          </Box>
        </Flex>
        <More>
          <h2>Modelos</h2>
          <SliderContainer>
            <ImageGallery locationName='fachadaacm' />
          </SliderContainer>
        </More>
        <br />
        <br />
        <Block>
          <h2>A fachada e complementos</h2>
          <br />
          <p>A fachada consiste em uma estrutura metalica feita em tupos de metal falvanizado resistente a corrosão e fixada com uma cola de alta resistencia para melhor acabamento</p>
          <p>Ja a estilizacão Para personalizar sua fachada, pode ser feita atraves de letras em alto relevo com materiais diversos, adesivos personalizados e diversos tipos de iluminação para fins decorativo afim de atrair mais foco a seu estabelecimento</p>
        </Block>
      </Content>
    </Container>
  )
}

export default Dropshipping;