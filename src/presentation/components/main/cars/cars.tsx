import React, { useState } from 'react';

import { getCarImage } from 'presentation/assets';

import {
  Container,
  Width,
  Box,
  Options,
  Details,
  Text,
  Button,
} from './CarsStyles';
import { Search } from './components/Search';
import { Filters } from './components/Search';

interface Car {
  make: string;
  model: string;
  year: number;
  price: number;
}

const carData: Car[] = [
  { make: 'Toyota', model: 'Corolla', year: 2022, price: 25000 },
  { make: 'Porsche', model: 'Gol', year: 2021, price: 22000 },
  { make: 'Gol', model: 'Civic', year: 2021, price: 22000 },
  { make: 'Honda', model: 'Civic', year: 2021, price: 22000 },
];

export const Cars: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(carData);

  const handleSearch = (filters: Filters) => {
    const filtered = carData.filter((car) => {
      return (
        car.make.includes(filters.make) &&
        car.model.includes(filters.model) &&
        (filters.year === '' || car.year === Number(filters.year)) &&
        (filters.price === '' || car.price <= Number(filters.price))
      );
    });

    setFilteredCars(filtered);
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
                  src={getCarImage(car.make)}
                  alt={`Car ${index}`}
                />
                <h1>Tesla Malibu</h1>
                <h5>Preço</h5>
                <Text>
                  <p>sasda</p>
                  <p>asda</p>
                  <p>asda</p>
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
