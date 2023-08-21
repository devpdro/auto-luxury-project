import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { ICON } from 'presentation';
import * as yup from 'yup';

import { Container, Width, Box, Information, Text } from './ContactsStyles';

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

export const Contacts: React.FC = () => {
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
            <h3>Informações de contato</h3>
            <h2>Auto Luxury</h2>
            <p>
              <span>
                <ICON.HiOutlineLocationMarker />
              </span>
              Rua Frederico Moura - Cidade Nova - CEP: 14401150 - Franca/SP
            </p>
            <p>
              <span>
                <ICON.AiOutlineWhatsApp />
              </span>
              (19) 99971-5982
            </p>
            <p>
              <span>
                <ICON.BiTimeFive />
              </span>
              Segunda a Sexta-feira: 10h - 19h
            </p>
            <p>
              <span>
                <ICON.BiTimeFive />
              </span>
              Sábado e Domingo: Fechado
            </p>
          </Information>
          <Text>
            <h3>Formulário de Contato</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input {...field} placeholder="Nome" />
                  )}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input {...field} placeholder="E-mail" />
                  )}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <textarea {...field} placeholder="Mensagem" />
                  )}
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
