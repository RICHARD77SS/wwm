import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer, Image } from './styles'


const Barracas = () => {

  const slide = document.getElementById('slide')
  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Galpões</h1>
            <h2></h2>
            <p>Fazemos Galpões dos mais diversos modelos e com diversos tipos de materiais,
            temos opções de galpões estaticos e galpões pre-moldados que podem ser desmontados e levados para outros lugares</p>
          </Block>
          <Box>
            <Img>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311158053_1773077206378497_3405184448410721187_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=pfjzbyQLqs0AX_ltTtg&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfBX3Ptw-1k08V0OA5ALdOOmKxnnQDivNoWJwDR68q8XIw&oe=65C0E383" alt="" />
            </Img>
            <Img>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311602168_1773073509712200_894402971247892798_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=To_9GDnIwhwAX_TZuf1&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfDUlV1ffWcL0OPZGylpmCPL5WxjeNELP_qVgMrZW7GegQ&oe=65C071DC" alt="" />
            </Img>
            <Img>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311585947_1773072556378962_8341581877642342432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=5YIBNDwHZ1cAX-NQv2-&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfA74mfLzo-mXjsj3wiAb75q-9nmJ2TevW-880OP1-M8zQ&oe=65C0B06C" alt="" />
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
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311158053_1773077206378497_3405184448410721187_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=pfjzbyQLqs0AX_ltTtg&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfBX3Ptw-1k08V0OA5ALdOOmKxnnQDivNoWJwDR68q8XIw&oe=65C0E383" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311602168_1773073509712200_894402971247892798_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=To_9GDnIwhwAX_TZuf1&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfDUlV1ffWcL0OPZGylpmCPL5WxjeNELP_qVgMrZW7GegQ&oe=65C071DC" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311585947_1773072556378962_8341581877642342432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=5YIBNDwHZ1cAX-NQv2-&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfA74mfLzo-mXjsj3wiAb75q-9nmJ2TevW-880OP1-M8zQ&oe=65C0B06C" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311585947_1773072556378962_8341581877642342432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=5YIBNDwHZ1cAX-NQv2-&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfA74mfLzo-mXjsj3wiAb75q-9nmJ2TevW-880OP1-M8zQ&oe=65C0B06C" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311585947_1773072556378962_8341581877642342432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=5YIBNDwHZ1cAX-NQv2-&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfA74mfLzo-mXjsj3wiAb75q-9nmJ2TevW-880OP1-M8zQ&oe=65C0B06C" alt="" />
            </SliderImage>
            
          </SliderContainer>
        </More>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Nossos galpões</h2>
          <br />
          <p>...
          </p>
          <br />
          <Image>
            <img src="https://i.postimg.cc/nz3L2r58/cp-page-0001.jpg" alt="" />
            
          </Image>
        </Block>
        
      </Content>
    </Container>
  )
}

export default Barracas;