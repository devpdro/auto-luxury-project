import {
  Container,
  Width,
  Box,
  Form,
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
            <h1>Conectar</h1>
            <p>Entrar com e-mail e senha</p>
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
                value="Conectar"
              />
            </Submit>
          </Form>
        </Box>
      </Width>
    </Container>
  );
};
