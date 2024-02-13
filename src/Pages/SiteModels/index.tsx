
import { Models, Image, Wrapper, Block, Description } from "./styles";
import { NavLink } from "react-router-dom";

const SiteModels = () => {

  return (
    <Models>
      <h2>Serviços oferecidos</h2>
      <Wrapper>

        <Block>
          <Description>
            <h3>Coberturas e telhados</h3>
            <NavLink to='/Coberturas'>Saiba mais  </NavLink>
          </Description>
          <Image>
            <img src="https://firebasestorage.googleapis.com/v0/b/cwwm-5c648.appspot.com/o/coberturas%2Fdownload.jpg?alt=media&token=8c2784d4-fc7e-43ad-8300-bf17b6f1a82b" alt="" />
          </Image>
        </Block>
        <Block>
          <br />
          <Description>
            <h3>Fachadas</h3>
            <NavLink to='/FachadaACM'>Saiba mais</NavLink>
          </Description>
          <Image>
            <img src="https://firebasestorage.googleapis.com/v0/b/cwwm-5c648.appspot.com/o/fachadaacm%2FWhatsApp%20Image%202024-02-12%20at%209.55.05%20AM%20(1).jpeg?alt=media&token=70214153-32f8-483c-958f-03ac5ac335e1" alt="" />
          </Image>
        </Block>

        <Block>
          <Description>
            <h3>Reparos</h3>
            <NavLink to='/Reparos'>Saiba mais</NavLink>
          </Description>
          <Image>
            <img src="https://img.freepik.com/fotos-gratis/trabalho-de-soldagem-com-construcao-metalica-na-fabrica-de-metal-ocupada_613910-17130.jpg?w=740&t=st=1706572077~exp=1706572677~hmac=21debcb0091b6cd2f577e65de7c74d41166f05c85dc9ef5c77cce40da0d11657" alt="" />
          </Image>
        </Block>

        <Block>
          <Description>
            <h3>Letras</h3>
            <NavLink to='/Letras3d'>Saiba mais</NavLink>
          </Description>
          <Image>
            <img src="https://firebasestorage.googleapis.com/v0/b/cwwm-5c648.appspot.com/o/letras%2FWhatsApp%20Image%202024-02-12%20at%209.54.52%20AM%20(2).jpeg?alt=media&token=b0ece458-a890-4f03-98a8-be1949e08f93" alt="" />
          </Image>
        </Block>
        <Block>
          <Description>
            <h3>Galpão</h3>
            <NavLink to='/Galpao'>Saiba mais</NavLink>
          </Description>
          <Image>
            <img src="https://firebasestorage.googleapis.com/v0/b/cwwm-5c648.appspot.com/o/galpao%2F311585947_1773072556378962_8341581877642342432_n.jpg?alt=media&token=886fedb3-f45b-4437-b004-78d382411845" alt="" />
          </Image>
        </Block>
        <Block>
          <Description>
            <h3>Camara Fria</h3>
            <NavLink to='/CamaraFria'>Saiba mais</NavLink>
          </Description>
          <Image>
            <img src="https://firebasestorage.googleapis.com/v0/b/cwwm-5c648.appspot.com/o/camarafria%2FWEINBERGER_BLOG_ABRIL_SAIBA-QUAIS-OS-PRINCIPAIS-CUIDADOS-QUE-VOC%C3%8A-DEVE-TER-COM-A-C%C3%82MARA-FRIA-1024x652.jpg?alt=media&token=1a0a5b1c-6b0e-45d5-8b9e-57bdc744ac9e" alt="" />
          </Image>
        </Block>
        <Block>
          <Description>
            <h3>Barracas</h3>
            <NavLink to='/Barracas'>Saiba mais</NavLink>
          </Description>
          <Image>
            <img src="https://firebasestorage.googleapis.com/v0/b/cwwm-5c648.appspot.com/o/barracas%2Fezgif-frame-001.jpg?alt=media&token=dd091449-1684-499f-a634-db42cfd1383d" alt="" />
          </Image>
        </Block>
        <Block>
          <Description>
            <h3>Toldos</h3>
            <NavLink to='/Toldos'>Saiba mais</NavLink>
          </Description>
          <Image>
            <img src="https://firebasestorage.googleapis.com/v0/b/cwwm-5c648.appspot.com/o/toldos%2FSnapinsta.app_412297140_704896068283828_1316233266633509419_n_1080.jpg?alt=media&token=d205fcdb-23fd-4922-bc6c-e0d315779fd2" alt="" />
          </Image>
        </Block>
      </Wrapper>
    </Models>
  )
}

export default SiteModels