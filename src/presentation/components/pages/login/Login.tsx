import { Link } from 'react-router-dom';

import {
  Container,
  Width,
  Box,
  Form,
  Email,
  Password,
  Submit,
} from './LoginStyles';

export const Content = () => {
  return (
    <Container>
      <Width>
        <Box>
          <form>
            <h1>Conectar</h1>
            <p>Entrar com e-mail e senha</p>
            <Email>
              <label htmlFor="email1">E-mail:</label>
              <input autoComplete="on" type="email" name="email" id="email1" />
            </Email>
            <Password>
              <label htmlFor="password1">Senha:</label>
              <input
                autoComplete="current-password"
                type="password"
                name="password"
                id="password1"
              />
            </Password>
            <h6>
              Ainda não possui uma conta?{' '}
              <Link to="/cadastrar">Registre-se</Link>
            </h6>
            <Submit>
              <input
                type="submit"
                name="submit"
                id="submit1"
                value="Conectar"
              />
            </Submit>
          </form>
        </Box>
      </Width>
    </Container>
  );
};
