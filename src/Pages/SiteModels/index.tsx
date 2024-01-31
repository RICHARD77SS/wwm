import { Link } from "react-router-dom";
import { Models, Image, Wrapper, Block, Description } from "./styles";

const SiteModels = () => {
  return (
    <Models>
      <h2>Serviços oferecidos</h2>
      <Wrapper>

        <Block>
          <Image>
            <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/311184951_1773074119712139_2575656228680963747_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=P3IYy22BZ3UAX_e22bm&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfB746HyMoIzl5-rDWF-KYVkFzkre7XpgClCcwhwVdy-fA&oe=65BD6261" alt="" />
          </Image>
          <Description>
            <h3>Coberturas e telhados</h3>
            <button>Saiba mais  </button>
          </Description>
        </Block>

        <Block>
          <Image>
            <img src="https://lh3.googleusercontent.com/p/AF1QipPvIN8e6t8RkAtNgH-RhUEQ4RRrk07_BXK3ulZP=s680-w680-h510" alt="" />
          </Image>
          <Description>
            <h3>Fachadas</h3>
            <button>Saiba mais</button>
          </Description>
        </Block>

        <Block>
          <Image>
            <img src="https://img.freepik.com/fotos-gratis/trabalho-de-soldagem-com-construcao-metalica-na-fabrica-de-metal-ocupada_613910-17130.jpg?w=740&t=st=1706572077~exp=1706572677~hmac=21debcb0091b6cd2f577e65de7c74d41166f05c85dc9ef5c77cce40da0d11657" alt="" />
          </Image>
          <Description>
            <h3>Reparos</h3>
            <button>Saiba mais</button>
          </Description>
        </Block>

        <Block>
          <Image>
            <img src="https://iili.io/JcPB2kX.jpg" alt="" />
          </Image>
          <Description>
            <h3>Letras</h3>
            <button>Saiba mais</button>
          </Description>
        </Block>
        <Block>
          <Image>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cosmos.com.mx%2Fimages%2Fproductos%2F_CAMARAS-DE-REFRIGERACION-3l8f.jpeg&f=1&nofb=1&ipt=cd3adc166d7d2f40bb4ec042348495460fbabd3eedd718a37b03be62f4bae608&ipo=images" alt="" />
          </Image>
          <Description>
            <h3>Estruturas</h3>
            <button>Saiba mais</button>
          </Description>
        </Block>

      </Wrapper>
    </Models>
  )
}

export default SiteModels