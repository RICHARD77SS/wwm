
import { Models, Image, Wrapper, Block, Description } from "./styles";
import { NavLink } from "react-router-dom";
import UplodArea from './../uploadArea/index';
import ImageGallery from "../ShowImages";





const SiteModels = () => {

  return (
    <Models>
      <h2>Serviços oferecidos</h2>
      <Wrapper>

        <Block>
          <Description>
            <h3>Coberturas e telhados</h3>
            <NavLink to=''>Saiba mais  </NavLink>
          </Description>
        </Block>
        <ImageGallery locationName='coberturas' />
        <Block>
          <UplodArea locationName="coberturas" />
          <br />

          <Description>
            <h3>Fachadas</h3>
            <NavLink to=''>Saiba mais</NavLink>
          </Description>
          <Image>
            <img src="https://lh3.googleusercontent.com/p/AF1QipPvIN8e6t8RkAtNgH-RhUEQ4RRrk07_BXK3ulZP=s680-w680-h510" alt="" />
          </Image>
        </Block>

        <Block>
          <Description>
            <h3>Reparos</h3>
            <NavLink to=''>Saiba mais</NavLink>
          </Description>
          <Image>
            <img src="https://img.freepik.com/fotos-gratis/trabalho-de-soldagem-com-construcao-metalica-na-fabrica-de-metal-ocupada_613910-17130.jpg?w=740&t=st=1706572077~exp=1706572677~hmac=21debcb0091b6cd2f577e65de7c74d41166f05c85dc9ef5c77cce40da0d11657" alt="" />
          </Image>
        </Block>

        <Block>
          <Description>
            <h3>Letras</h3>
            <NavLink to=''>Saiba mais</NavLink>
          </Description>
          <Image>
            <img src="https://iili.io/JcPB2kX.jpg" alt="" />
          </Image>
        </Block>
        <Block>
          <Description>
            <h3>Estruturas</h3>
            <NavLink to=''>Saiba mais</NavLink>
          </Description>
          <Image>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cosmos.com.mx%2Fimages%2Fproductos%2F_CAMARAS-DE-REFRIGERACION-3l8f.jpeg&f=1&nofb=1&ipt=cd3adc166d7d2f40bb4ec042348495460fbabd3eedd718a37b03be62f4bae608&ipo=images" alt="" />
          </Image>
        </Block>

      </Wrapper>
    </Models>
  )
}

export default SiteModels