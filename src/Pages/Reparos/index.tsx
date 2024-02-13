import { Container, Content, Block, Flex, Img, More, Image } from './styles'
const Reparos = () => {

  const slide = document.getElementById('slide')
  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Reparos</h1>
            <h2></h2>
            <p>Fazemos Reparos em diversos tipos de estruturas como por exemplo: Coberturas, Fachadas, Placas, Portões, Galpões, Outdors, Barracas, Toldos... </p>
          </Block>
        </Flex>
        <More>
            <Img>
              <img src="https://img.freepik.com/fotos-premium/o-trabalhador-em-mascara-protetora-solda-metal-com-uma-maquina-de-solda-profissao-soldador-trabalhando-no-jardim_145577-159.jpg?w=826" alt="" />
            </Img>

        </More>
        <br />
        <br />
        <br />
        <br />
        <Block>
          <h2>Fachadas</h2>
          <br />
          <p> As fachada sao as estruturas que mais tem que ter sua beleza preservada, mas eventualmente elas podem ser danificadas seja por terceiros, efeitos do tempo, falta de limpeza ou até devido a uma má instalaçâo.
          </p>
          <br />
        </Block>
        <Block>
          <h2>Estruturas metalicas</h2>
          <br />
          <p> Geralmente sâo feitos em estruturas com pequenos detalhes, pontos enferrujados ou parte quebradas, mas que aida podem ser utilizada em sua maior parte
          </p>
          <br />
        </Block>
        <Block>
          <h2>Coberturas e telhados</h2>
          <br />
          <p> A parte de reparos em coberturas pode ir desde tirar pequenos vasamentos ate fazer a troca de telhas quebradas ou amassada
          </p>
          <br />
        </Block>
        <Block>
          <h2>Calhas</h2>
          <br />
          <p> O reparo de calhas é bem frequente e requisitado quando a mesma ja nao desempenha o papel desejado, seja por conta de ferrugem, entupimentos, ou ate mal dimensionamento da calha.
          </p>
          <br />
        </Block>
        <br />
        <br />
        <br />
        <br />
      </Content>
    </Container>
  )
}

export default Reparos;