import { Container, Content, Block, Box, Flex, Img } from './styles'

const Blog = () => {
  return (
    <Container>
      <Content>
        <Flex>
          <Block>
            <h1>Blog</h1>
            <h2></h2>
            <p></p>
          </Block>
          <Box>
            <Img>
              <img src="https://img.freepik.com/fotos-gratis/um-carrinho-de-compras-com-caixas-e-um-fundo-azul_1340-37324.jpg?w=740&t=st=1686698264~exp=1686698864~hmac=21c7a4eb46dad5711af5ff6d34bf31b90476fb7eda3cb67cb36060c695600ebf" alt="" />
            </Img>
            <Img>
              <img src="https://img.freepik.com/psd-gratuitas/visor-de-produto-de-podio-com-luz-de-neon-roxa_125755-717.jpg?w=740&t=st=1686698321~exp=1686698921~hmac=dd14d7bc9504e2c2ab55c766dacddccf28f951ced02458e60fa67060bf7358ff" alt="" />
            </Img>
            <Img>
              <img src="https://img.freepik.com/fotos-gratis/estojo-de-vaidade-com-arranjo-de-produtos_23-2149879969.jpg?w=900&t=st=1686698407~exp=1686699007~hmac=162aaaa598bd7b44aaaaaadbc49b20efa27eb3fc58e7120cd164c437d6917f49" alt="" />
            </Img>
          </Box>
        </Flex>
      </Content>
    </Container>
  )
}

export default Blog;