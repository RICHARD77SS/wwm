import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer } from './styles'


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
              <img src="https://lh3.googleusercontent.com/p/AF1QipPvIN8e6t8RkAtNgH-RhUEQ4RRrk07_BXK3ulZP=s680-w680-h510" alt="" />
            </Img>
            <Img>
              <img src="https://lh3.googleusercontent.com/p/AF1QipMBshPKuCD8mN6TP_dNE8pVCtbIXOeZidFp-SQc=s680-w680-h510" alt="" />
            </Img>
            <Img>
              <img src="https://img.freepik.com/vetores-gratis/conceito-de-e-commerce-isometrica-3d-loja-on-line_1441-2128.jpg?w=740&t=st=1688310815~exp=1688311415~hmac=51ada81988a22d06e098d11e70187605035ebf9e330b9f0dc0188488d870b919" alt="" />
            </Img>
          </Box>
        </Flex>
        <More>
          <h2>Modelos</h2>
          <SliderContainer id='slide'>
            <ButtonContainer>
              <button title='button' onClick={() => { document.getElementById('slide')!.scrollLeft -= 200 }}>l</button>
              <button title='button' onClick={() => { document.getElementById('slide')!.scrollLeft += 200 }}>r</button>
            </ButtonContainer>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/74911465_965508780468681_3601091225974734848_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=1D_gm_w9eNcAX-CKCjZ&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfBh7A0ze4cfSWc98JHAQ61q2UGsM8fLqkAtfoJ3PQITkg&oe=65D4B606" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/94143982_1112978422388382_3089093706536452096_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=SvScu04oA3kAX9mfyNS&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfD-7hL0QDmBR7mgTjIUbT3kxPCCazkvkvnKlUP9Ae0QPg&oe=65D4B392" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://img.freepik.com/vetores-gratis/conceito-de-e-commerce-isometrica-3d-loja-on-line_1441-2128.jpg?w=740&t=st=1688310815~exp=1688311415~hmac=51ada81988a22d06e098d11e70187605035ebf9e330b9f0dc0188488d870b919" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://lh3.googleusercontent.com/p/AF1QipMBshPKuCD8mN6TP_dNE8pVCtbIXOeZidFp-SQc=s680-w680-h510" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://img.freepik.com/vetores-gratis/conceito-de-e-commerce-isometrica-3d-loja-on-line_1441-2128.jpg?w=740&t=st=1688310815~exp=1688311415~hmac=51ada81988a22d06e098d11e70187605035ebf9e330b9f0dc0188488d870b919" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://lh3.googleusercontent.com/p/AF1QipMBshPKuCD8mN6TP_dNE8pVCtbIXOeZidFp-SQc=s680-w680-h510" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://img.freepik.com/vetores-gratis/conceito-de-e-commerce-isometrica-3d-loja-on-line_1441-2128.jpg?w=740&t=st=1688310815~exp=1688311415~hmac=51ada81988a22d06e098d11e70187605035ebf9e330b9f0dc0188488d870b919" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://lh3.googleusercontent.com/p/AF1QipMBshPKuCD8mN6TP_dNE8pVCtbIXOeZidFp-SQc=s680-w680-h510" alt="" />
            </SliderImage>
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