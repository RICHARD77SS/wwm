import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer, Image } from './styles'
const Coberturas = () => {

  const slide = document.getElementById('slide')
  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Coberturas</h1>
            <h2></h2>
            <p>A estrutura de nossas cobertura é feita em sua maioria em tububos galvanizados ou vigas de aço atraves do processo de soldagem dos materiais, a cobertura em si vai de acordo com a nessecidade do cliente, podendo ser feita de diversos materiais, como telhas de zinco, telhas sanduiche ou em policarbonato  </p>
          </Block>
          <Box>
            <Img>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311589060_1773075966378621_4158242642494254744_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=QSnepW87vMkAX-HnuM2&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfC1Y-KsCRMalAV-Ml5XUBF2BJeYjoB2CxkePvN1nZzEfg&oe=65BDF29A" alt="" />
            </Img>
            <Img>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311240572_1773075426378675_1074009078425450106_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=45pyQM6mCwUAX_ACKCO&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfBR9AFX3nHSRKHJJ_AU9OVHgf60dcjX1TA4f_U9KAH9cw&oe=65BCB585" alt="" />
            </Img>
            <Img>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311184951_1773074119712139_2575656228680963747_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=P3IYy22BZ3UAX_e22bm&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfB746HyMoIzl5-rDWF-KYVkFzkre7XpgClCcwhwVdy-fA&oe=65BD6261" alt="" />
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
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311184951_1773074119712139_2575656228680963747_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=P3IYy22BZ3UAX_e22bm&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfB746HyMoIzl5-rDWF-KYVkFzkre7XpgClCcwhwVdy-fA&oe=65BD6261" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311240572_1773075426378675_1074009078425450106_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=45pyQM6mCwUAX_ACKCO&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfBR9AFX3nHSRKHJJ_AU9OVHgf60dcjX1TA4f_U9KAH9cw&oe=65BCB585" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311589060_1773075966378621_4158242642494254744_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=QSnepW87vMkAX-HnuM2&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfC1Y-KsCRMalAV-Ml5XUBF2BJeYjoB2CxkePvN1nZzEfg&oe=65BDF29A" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311568710_1773075999711951_3790920273592422583_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=1MZ7p_BjnQcAX_125wL&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfClrOb8Ry0te1nPYu15lLnPfCjIO9ERLcg7iIpbK_4LDg&oe=65BC6089" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311144532_1773075689711982_3313666973909309202_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=9e4NxtE0NmEAX9cj8sg&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfA6tG3tTLcxFpWhUveKouKmHSisYUGV1_e88LT7ldHzJw&oe=65BC97F5" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311240550_1773077159711835_5218532853077124367_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=AGARafI19rsAX-LSUW2&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfC1Nq4SzH3Rfy76qggDgyBy_7S-FsLwIOKXwusdOtSxYA&oe=65BD5D73" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311476942_1773075383045346_5832493349937342850_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=vMUTPPukp00AX9pUfwM&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfBEI5S-k8JarOvbcYoaL4TbzQ_XmvfZNZLnQG8Ij1Oa2g&oe=65BCE8E5" alt="" />
            </SliderImage>
          </SliderContainer>
        </More>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Zinco</h2>
          <br />
          <p>O a telha zincada é feita atraves de uma chapa metalica com uma camada anticorrosiva que pode ser moldada em diversos formatos, tambem pode ser pintada para uma pelhor aparencia, a telha de zinco nao oferece um bom isolamento termico nem acustico por ser feita em um material metalico ela transmite o som e a temperado so ambiente externo sendo assim mais indicada para galpões e locais com isolamento termico apropriado
          </p>
          <br />
          <Image>
            <img src="https://i.postimg.cc/nz3L2r58/cp-page-0001.jpg" alt="" />
            
          </Image>
        </Block>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Sanduiche</h2>
          <br />
          <p>A telha sanduiche é uma telha feita com duas chapas de zinco e um nucleo de isopor, sedo uma otima opçao para conter o calor e ter uma melhor eficiecia em isolação termo acustica, podendo ser aplicada em diversos locais</p>
          <br />
          <Image>
            <img src="https://jaferroeaco.com.br/wp-content/uploads/2022/01/Telhas-Termoacusticas-sem-revestimento2.jpg" alt="" />
            
          </Image>
        </Block>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Policarbonato</h2>
          <br />
          <p>O policarbonato é um material transparente ou fosco sendo ele reto e esta disponivel em diversas cores, é um material resistente a raios uv e a quebras por ser flexivel</p>
          <br />
          <Image>
            <img src="https://i.postimg.cc/59S99QvW/D-NQ-NP-767884-MLB53559730028-022023-O.webp" alt="" />
            
          </Image>
        </Block>
      </Content>
    </Container>
  )
}

export default Coberturas;