import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container, Width, Box, Information, Text } from './ContentStyles';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  message: yup.string().required('Campo obrigatório'),
});

export const Content: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container>
      <Width>
        <Box>
          <Information>
            <h1>Informações de contato</h1>
            <h4>Auto Luxury</h4>
            <p>Rua 7, 1771 - Zona Central</p>
            <p>CEP: 13500-200 - RIO CLARO/SP</p>
            <p>(19) 99805-4440</p>
          </Information>
          <Text>
            <h1>Entre em contato</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Nome:</label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => <input {...field} />}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div>
                <label>Email:</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <input {...field} />}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div>
                <label>Mensagem:</label>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => <textarea {...field} />}
                />
                {errors.message && <p>{errors.message.message}</p>}
              </div>
              <button type="submit">Enviar</button>
            </form>
          </Text>
        </Box>
      </Width>
    </Container>
  );
};
