import {
  Container,
  Width,
  Box,
  Form,
  Username,
  Email,
  Password,
  Submit,
} from './ContentStyles';

export const Content = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Form>
            <h1> Cadastrar</h1>
            <p>Crie uma nova conta com seu nome de usuário, e-mail e senha</p>
            <Username>
              <label htmlFor="text1">Nome de usuário:</label>
              <input type="text" name="text" id="text1" />
            </Username>
            <Email>
              <label htmlFor="email1">E-mail:</label>
              <input type="email" name="email" id="email1" />
            </Email>
            <Password>
              <label htmlFor="password1">Senha</label>
              <input type="password" name="password" id="password1" />
            </Password>
            <Submit>
              <input
                type="submit"
                name="submit"
                id="submit1"
                value="Cadastrar"
              />
            </Submit>
          </Form>
        </Box>
      </Width>
    </Container>
  );
};
