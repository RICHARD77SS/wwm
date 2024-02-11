import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer, Image } from './styles'
const Galpao = () => {

  const slide = document.getElementById('slide')
  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Galpões</h1>
            <h2></h2>
            <p>Nossos galpões sao em sua maior parte feitos de uma estrutura metalica com revestimento em chapas metalicas ou em lona de alta resistencia, ele é feito em uma base concretada com vigas e colunas treliçadas dependendo do tamanho escolhido pelo cliente</p>
          </Block>
          <Box>
            <Img>
              <img src="https://fv9-4.failiem.lv/thumb_show.php?i=fcdcwkcxr2&view&v=1" alt="" />
            </Img>
            <Img>
              <img src="https://fv9-6.failiem.lv/thumb_show.php?i=6t34x97w2p&view&v=1" alt="" />
            </Img>
            <Img>
              <img src="https://fv9-4.failiem.lv/thumb_show.php?i=p589zrmu2b&view&v=1" alt="" />
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
              <img src="https://fv9-5.failiem.lv/thumb_show.php?i=xc5hnmfqyv&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv9-5.failiem.lv/thumb_show.php?i=dxqedgr75c&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv9-6.failiem.lv/thumb_show.php?i=2bdn7xdw9m&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv9-5.failiem.lv/thumb_show.php?i=85z25c8arp&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv9-6.failiem.lv/thumb_show.php?i=r8krxm9nvq&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv9-3.failiem.lv/thumb_show.php?i=gchcngbs95&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv9-5.failiem.lv/thumb_show.php?i=rd2bwbbu7u&view&v=1" alt="" />
            </SliderImage>
            
          </SliderContainer>
        </More>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Os galpões </h2>
          <br />
          <p>Os galpões podem ser usados tanto como sedes de uma empresa quanto para armazenar materiais, podem ser feitos em divesos locais e sao eficiente por terem uma aplo espaço sem pilares em seu interior.
          </p>

          <br />
          <Image>
            <img src="https://fv9-5.failiem.lv/thumb_show.php?i=85z25c8arp&view&v=1" alt="" />
            
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

export default Galpao;