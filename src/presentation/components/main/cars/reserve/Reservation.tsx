import React, { useState } from 'react';

import { carData } from 'main';
import { getCarImage } from 'presentation/assets';
import { ICON } from 'presentation/assets';

import { Search, Filters } from '../components/Search';
import {
  Container,
  Width,
  Box,
  Options,
  Details,
  Text,
  Button,
  Launcher,
  Progress,
  Conclusion,
  Reserve,
  Form,
  ButtonSubmit,
} from './ReservationStyles';

interface Car {
  make: string;
  year: number;
  color: string;
  price: number;
}

export const Reservation: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(carData);
  const [showNotification, setShowNotification] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [reservedIndex, setReservedIndex] = useState<number | null>(null);

  const handleSearch = (filters: Filters) => {
    const filtered = carData.filter((car) => {
      return (
        car.make.toLowerCase().includes(filters.make.toLowerCase()) &&
        (filters.year === '' || car.year === Number(filters.year)) &&
        car.color.toLowerCase().includes(filters.color.toLowerCase())
      );
    });

    setFilteredCars(filtered);
  };

  const openLoading = (index: number) => {
    setIsProcessing(true);
    setShowNotification(true);

    setTimeout(() => {
      setIsCompleted(true);
      setTimeout(() => {
        setShowNotification(false);
        setIsCompleted(false);

        if (reservedIndex === index) {
          setReservedIndex(null);
        } else {
          setReservedIndex(index);
        }

        setIsProcessing(false);
      }, 2000);
    }, 3000);
  };

  return (
    <Container>
      <Width>
        <Box>
          <Search onSearch={handleSearch} />
          <Options>
            {filteredCars.map((car, index) => (
              <Details key={index}>
                <img
                  key={index}
                  src={getCarImage(`${car.make}-${car.color}`)}
                  alt={`Car ${index}`}
                />
                <h1>{car.make}</h1>
                <h5>R$ {car.price}/dia</h5>
                <Text>
                  <h6>
                    <span>
                      <ICON.LiaCarSolid />
                    </span>
                    {car.make}
                  </h6>
                  <h6>
                    <span>
                      <ICON.IoColorPaletteOutline />
                    </span>
                    {car.color}
                  </h6>
                  <h6>
                    <span>
                      <ICON.BsCalendar2Date />
                    </span>
                    {car.year}
                  </h6>
                </Text>
                <Button
                  onClick={() => openLoading(index)}
                  className={reservedIndex === index ? 'cancel' : ''}
                  disabled={isProcessing}
                >
                  {reservedIndex === index
                    ? `Cancelar reserva`
                    : `Reservar ${car.make}`}
                </Button>
              </Details>
            ))}
          </Options>
        </Box>
      </Width>
      {showNotification && <Launcher>{isProcessing && <div></div>}</Launcher>}
      {showNotification && isProcessing && (
        <Progress className={isCompleted ? 'slideExit' : ''}>
          <div>
            <h2>Por favor, aguarde...</h2>
          </div>
          {reservedIndex === null ? (
            <p style={{ textAlign: 'center', color: '#fff' }}>
              Verificando disponibilidade do carro...
            </p>
          ) : (
            <p style={{ textAlign: 'center', color: '#fff' }}>
              Cancelando a reserva do carro...
            </p>
          )}
        </Progress>
      )}
      {showNotification && isCompleted && (
        <Conclusion>
          <div>
            <h2>Sucesso!</h2>
            <p>
              {reservedIndex === null
                ? 'Carro reservado, efetue o pagamento.'
                : 'Reserva cancelada.'}
            </p>
          </div>
        </Conclusion>
      )}
      {reservedIndex !== null && (
        <Reserve>
          <div>
            Carro reservado: {filteredCars[reservedIndex].make} {''}
            {filteredCars[reservedIndex].color}{' '}
            <Form action="/create-checkout-session" method="POST">
              <ButtonSubmit type="submit">Realizar o pagamento</ButtonSubmit>
              <p>
                A confirmação da inclusão do carro na reserva está garantida
                somente após a realização do pagamento.
              </p>
            </Form>
          </div>
        </Reserve>
      )}
    </Container>
  );
};
