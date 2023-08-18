import React from 'react';

import { getCarImage } from 'presentation/assets';

import {
  Container,
  Width,
  Box,
  Options,
  Details,
  Text,
  Button,
} from './ReservationStyles';

interface Car {
  make: string;
  model: string;
  year: number;
  price: number;
}

const carData: Car[] = [
  { make: 'Toyota' && 'toyota', model: 'Corolla', year: 2022, price: 25000 },
  { make: 'Porsche', model: 'Gol', year: 2021, price: 22000 },
  { make: 'Gol', model: 'Civic', year: 2021, price: 22000 },
  { make: 'Honda', model: 'Civic', year: 2021, price: 22000 },
];

export const Reservation: React.FC = () => {
  return (
    <Container>
      <Width>
        <Box>
          <Options>
            {carData.map((car, index) => (
              <Details key={index}>
                <img
                  key={index}
                  src={getCarImage(car.make)}
                  alt={`Car ${index}`}
                />
                <h1>
                  {car.make} {car.model}
                </h1>
                <h5>Preço: ${car.price}</h5>
                <Text>
                  <p>{car.make}</p>
                  <p>{car.model}</p>
                  <p>Ano: {car.year}</p>
                </Text>
                <Button>Reservar</Button>
              </Details>
            ))}
          </Options>
        </Box>
      </Width>
    </Container>
  );
};
