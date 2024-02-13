import ImageGallery from '../ShowImages';
import { Container, Content, Block, Box, Flex, Img, More, SliderContainer } from './styles'


const FachadaLona = () => {

  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Fachadas em Lona</h1>
            <h2>A lona</h2>
            <p>A lona diferente do ACM é um material flexivel semelhante a um pano de pvc e conta com uma alta durabilidade e media resistencia é mais em conta de comparado ao ACM porem ainda sim traz um otimo aspecto visual para sua fachada  </p>
          </Block>
          <Box>
            <Img>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/74911465_965508780468681_3601091225974734848_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=1D_gm_w9eNcAX-CKCjZ&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfBh7A0ze4cfSWc98JHAQ61q2UGsM8fLqkAtfoJ3PQITkg&oe=65D4B606" alt="" />
            </Img>
            <Img>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/94143982_1112978422388382_3089093706536452096_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=SvScu04oA3kAX9mfyNS&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfD-7hL0QDmBR7mgTjIUbT3kxPCCazkvkvnKlUP9Ae0QPg&oe=65D4B392" alt="" />
            </Img>
          </Box>
        </Flex>
        <More>
          <h2>Modelos</h2>
          <SliderContainer>
            <ImageGallery locationName='fachadalona' />
          </SliderContainer>
        </More>
        <br />
        <br />
      
        <Block>
          <h2>Estilização</h2>
          <p>A lona por ser um material flexivel pode ser confexionada ja com imagens e textos, pode ser adicionado em sua fachada, cantoneiras e forros em materias diferente para uma melhor aparencia geral</p>
        </Block>
      </Content>
    </Container>
  )
}

export default FachadaLona;