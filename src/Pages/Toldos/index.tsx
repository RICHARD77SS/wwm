import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer, Image } from './styles'

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
          <SliderContainer id='slide'>
            <ButtonContainer>
              <button title='button' onClick={() => { slide!.scrollLeft -= 200 }}>l</button>
              <button title='button' onClick={() => { slide!.scrollLeft += 200 }}>r</button>
            </ButtonContainer>
            <SliderImage>
              <img src="https://fv2-7.failiem.lv/thumb_show.php?i=wsdry2h5dx&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-8.failiem.lv/thumb_show.php?i=xz2dw8e5nw&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-4.failiem.lv/thumb_show.php?i=4uaknrfqc4&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-5.failiem.lv/thumb_show.php?i=ustt52tr7g&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-7.failiem.lv/thumb_show.php?i=mneeq9hkzd&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-4.failiem.lv/thumb_show.php?i=fnfh4ehapp&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-5.failiem.lv/thumb_show.php?i=3wc2qcjpdf&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-3.failiem.lv/thumb_show.php?i=4m7nfd3sfk&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-4.failiem.lv/thumb_show.php?i=cmfuuffcvs&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-7.failiem.lv/thumb_show.php?i=cyyw2q95r4&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-3.failiem.lv/thumb_show.php?i=a2ktfxqazf&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-6.failiem.lv/thumb_show.php?i=4w5s2zqnt6&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-3.failiem.lv/thumb_show.php?i=kbs6q5cayq&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-4.failiem.lv/thumb_show.php?i=7crqv2btan&view&v=1" alt="" />
            </SliderImage>

            
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
            <img src="https://fv2-8.failiem.lv/thumb_show.php?i=xz2dw8e5nw&view&v=1" alt="" />
          </Image>
        </Block>
      </Content>
    </Container>
  )
}

export default Toldos;