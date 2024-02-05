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
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/74911465_965508780468681_3601091225974734848_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=1D_gm_w9eNcAX-CKCjZ&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfBh7A0ze4cfSWc98JHAQ61q2UGsM8fLqkAtfoJ3PQITkg&oe=65D4B606" alt="" />
            </Img>
            <Img>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/94143982_1112978422388382_3089093706536452096_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=SvScu04oA3kAX9mfyNS&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfD-7hL0QDmBR7mgTjIUbT3kxPCCazkvkvnKlUP9Ae0QPg&oe=65D4B392" alt="" />
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
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/278004158_1633147260371493_8262489685839345105_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=vmV_n9HqETQAX80SO3o&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfCXQ_a_z9GNCTMQtACMwsqj_FCIAA36dQmgNnmiFdvs_Q&oe=65C1C978" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/277975757_1633147273704825_6594651713916598594_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=K0QrA82gRngAX_6rmnc&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfA8B5cZoQD9IhvwW8V1Z-oWYkpiuy-DvbDhMyFshbQXUQ&oe=65C076BF" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/126084889_1282584178761138_9077837527050046607_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=cMfrbX0QMlsAX_yHJJH&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfAiUOa_YsMJlPMpf9yCQkVqNjI3mclb5k78xqTJZayYEw&oe=65E35F61" alt="" />
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
      
        <Block>
          <h2>Estilização</h2>
          <p>A lona por ser um material flexivel pode ser confexionada ja com imagens e textos, pode ser adicionado em sua fachada, cantoneiras e forros em materias diferente para uma melhor aparencia geral</p>
        </Block>
      </Content>
    </Container>
  )
}

export default FachadaLona;