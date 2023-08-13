import React, { useState } from 'react';

import { getCarImage } from 'presentation/assets';

import { Container, Width, Box } from './cars-styled';
import { Search } from './components/search';
import { Filters } from './components/search';

interface Car {
  make: string;
  model: string;
  year: number;
  price: number;
}

const carData: Car[] = [
  { make: 'Toyota', model: 'Corolla', year: 2022, price: 25000 },
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
          <div>
            {filteredCars.map((car, index) => (
              <img
                key={index}
                src={getCarImage(car.make)}
                alt={`Car ${index}`}
              />
            ))}
          </div>
        </Box>
      </Width>
    </Container>
  );
};
