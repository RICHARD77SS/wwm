import ImageGallery from '../ShowImages';
import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, Image } from './styles'
const Letras3d = () => {


  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Letras3d</h1>
            <h2></h2>
            <p>Para que seu negocio chame a atenção desejada, nada melhor que um nome chamativo, ou ate mesmo um logo e para isso nos temos muitas opções de letras em 3d, que são feitas com materiais que ajudam a realçar ainda mais a beleza de seu negocio</p>
          </Block>

        </Flex>
        <More>
          <h2>Modelos</h2>
          <SliderContainer>

            <ImageGallery locationName='letras' />
          </SliderContainer>
        </More>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Letras 3D</h2>
          <br />
          <p>As Letras 3D Podem ser feitas de diversos materiais alguns deles são, Acm, chapas metalicas pintadas, pvc expandido e acrilico
          </p>
          <br />
          <Image>
            <img src="https://firebasestorage.googleapis.com/v0/b/cwwm-5c648.appspot.com/o/letras%2Fd2dd97e8-f67c-442f-8e5e-add1f340c96f.jpg?alt=media&token=bf42758d-c40f-4167-9030-247650ded568" alt="" />

          </Image>
        </Block>

      </Content>
    </Container>
  )
}

export default Letras3d;