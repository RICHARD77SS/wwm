import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer, Image } from './styles'
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
          <SliderContainer id='slide'>
            <ButtonContainer>
              <button title='button' onClick={() => { document.getElementById('slide')!.scrollLeft -= 200 }}>l</button>
              <button title='button' onClick={() => { document.getElementById('slide')!.scrollLeft += 200 }}>r</button>
            </ButtonContainer>
            <SliderImage>
              <img src="https://fv2-4.failiem.lv/thumb_show.php?i=d7phzae65k&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-1.failiem.lv/thumb_show.php?i=stjmrjd3s9&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-8.failiem.lv/thumb_show.php?i=q833zgn8a8&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-4.failiem.lv/thumb_show.php?i=tn7ch42sr2&view&v=1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/126059782_1282584335427789_2774713421372289858_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=XMHNqsK21OcAX-a_ms2&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfB5h5ysVVhVMssAqMxiZ24Bsny7cstys8bflbZHwaqfmQ&oe=65D49F53" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://fv2-3.failiem.lv/thumb_show.php?i=zrprnq4y5t&view&v=1" alt="" />
            </SliderImage>
          </SliderContainer>
        </More>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Letras 3D</h2>
          <br />
          <p>As letras3d Podem ser feitas de diversos materiais alguns deles são, Acm, chapas metalicas pintadas, pvc expandido e acrilico 
          </p>
          <br />
          <Image>
            <img src="https://lh3.googleusercontent.com/p/AF1QipMBshPKuCD8mN6TP_dNE8pVCtbIXOeZidFp-SQc=s680-w680-h510" alt="" />
            
          </Image>
        </Block>
        
      </Content>
    </Container>
  )
}

export default Letras3d;