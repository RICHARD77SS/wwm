import { Container, Content, Block, Box, Flex, Img, More, SliderContainer, SliderImage, ButtonContainer } from './styles'
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
          <SliderContainer id='slide'>
            <ButtonContainer>
              <button title='button' onClick={() => { document.getElementById('slide')!.scrollLeft -= 250 }}>l</button>
              <button title='button' onClick={() => { document.getElementById('slide')!.scrollLeft += 250 }}>r</button>
            </ButtonContainer>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/126059782_1282584335427789_2774713421372289858_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=XMHNqsK21OcAX-a_ms2&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfB5h5ysVVhVMssAqMxiZ24Bsny7cstys8bflbZHwaqfmQ&oe=65D49F53" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/125970537_1281683052184584_6160624361618872604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=mtEKRKIrALIAX8VhCVp&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfAW_8aO5goe5LVPmjqoPkuK_NMW78C3-iTeIHaSEy1G_g&oe=65D49DB4" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/118580178_1212226362463587_3081932209146523069_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=7wzf5nDG_t8AX_SLGT6&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfB08v67ICTRRvxCblJvDdO94vMVHuMeO2dDgf_u310Myw&oe=65D488CD" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/117086861_1193802400972650_2351058317396841517_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=eJiFDgZkqCUAX_4ohXk&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfAjFJHm5iMKN7ym3vwBqHZTwz6WHxYBQ0Z8Q0LnZVgd-g&oe=65D480B5" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/91914036_1097651200587771_40441197310771200_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=LVUCoK4fShIAX8BzsYP&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfC_lwnBB4o2E18QUuYnXOkLn3Vkf2s3YtIh6GqG_SB35w&oe=65D4A88A" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/73125471_965503003802592_3959192374910910464_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=8RQU9GTIGOgAX-bRfbN&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfC7ZKK7RZQ7zxzHJA55yfvXBo-EYjN7qgjyKRFMv4iZXQ&oe=65D4AFDC" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/126055566_1281682992184590_5819432600215321552_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=-hVHJoAXzeIAX9ME5ax&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfCQ-V5BqqB6njoTizGyJyYQkFk-IwajI31fv4Kg1EM0_A&oe=65D489AC" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/126057830_1282583922094497_5618946957414972370_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=FX6niWHzYOsAX9vZKqW&_nc_oc=AQlGv_2HmHBytF8RBYf3kcxx35F3x-ip5rJwtUCM4m1Gklujm3WnsO2rlQoYNI-zlr8&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfAi2f-Pbhi_qF7aNilwBBpDbZeT2DDLbjpvxhAvtwY6Wg&oe=65D4DE3A" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/125975137_1282584382094451_3362730023527517400_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=OyVRsZJ1mA8AX9SstE4&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfD-4fNdiyfF3PxIGan_v0eHvADpeXFQobXGrj_jhnbSqg&oe=65D4A103" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/127890988_1288980504788172_6070939659843240023_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=oBT5Ej-lf_EAX8pQYGn&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfBGy8LQRRoD23nUdpgqQPZtOnPih8gUuLauUVeH7SvHSA&oe=65D5001D" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/159840985_1361544754198413_9033710852265076147_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=nwBabV6rLTIAX9o2Mhy&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfC0g5FyPtHCyAuNHVdnXB-EUmSfJmmUk3S3CQ0KOGz4SQ&oe=65D51108" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/294013945_1707780922908126_958772792805759087_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=11BQxgpwnhMAX-lLEFI&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfCH6mE8d4uXgPQL2TpdJcUUhx7gGH3je46eib39IPLCMw&oe=65B19495" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/294058294_1707781136241438_3911643719587324707_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=5IpiNBh3O5oAX-T6H2m&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfDc52o6S0JtjvFu1AQwXL661v8cLU-oocD5ijKp_SED1Q&oe=65B21045" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/301531396_1737549803264571_4146312290397619909_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=So-_3lCY4jgAX9GTtjN&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfCoChAzegzKLprvdNvFQwSdQoafq17zle6tC8NsFYFW7w&oe=65C112D9" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/293927884_1707591316260420_5429961697277660090_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=aesJ-_eDQCYAX9qIyH4&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfBTh1MpcgVAHvp0rasPwdLNhjvTS7Lpvz9082orfNqKTw&oe=65C196C1" alt="" />
            </SliderImage>
            <SliderImage>
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/150192668_1344783705874518_1011494609186322100_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=3ViN6Eue2VMAX_qQFgA&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfDBvjwbJl3fvHMLGamcX_d0fcAXIqvfCD8Vh2NEPqvviA&oe=65E35AD8" alt="" />
            </SliderImage>
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