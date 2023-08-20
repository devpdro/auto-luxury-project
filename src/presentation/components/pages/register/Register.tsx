import { useState, SyntheticEvent } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { auth } from 'main';

import {
  Container,
  Width,
  Box,
  Form,
  Username,
  Email,
  Password,
  Submit,
} from './RegisterStyles';

export const Content = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e: SyntheticEvent) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  return (
    <Container>
      <Width>
        <Box>
          <Form>
            <h1> Cadastrar</h1>
            <p>Crie uma nova conta com seu nome de usuário, e-mail e senha</p>
            <Username>
              <label htmlFor="text1">Nome de usuário:</label>
              <input autoComplete="on" type="text" name="text" id="text1" />
            </Username>
            <Email>
              <label htmlFor="email1">E-mail:</label>
              <input
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email1"
              />
            </Email>
            <Password>
              <label htmlFor="password1">Senha</label>
              <input
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password1"
              />
            </Password>
            <Submit>
              <input
                onClick={handleSignOut}
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
