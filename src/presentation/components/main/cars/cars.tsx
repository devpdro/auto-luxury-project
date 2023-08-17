import { useState } from 'react';

import { getCarImage } from 'presentation/assets';
import { ICON } from 'presentation/assets';

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
  year: number;
  color: string;
  price: number;
}

const carData: Car[] = [
  {
    make: 'Tesla',
    year: 2022,
    color: 'Branco',
    price: 2800,
  },
  {
    make: 'Tesla',
    year: 2021,
    color: 'Vermelho',
    price: 2200,
  },
  {
    make: 'Audi',
    year: 2020,
    color: 'Prata',
    price: 1200,
  },
  {
    make: 'Porsche',
    year: 2019,
    color: 'Azul-Escuro',
    price: 1700,
  },
  {
    make: 'Porsche',
    year: 2017,
    color: 'Preto',
    price: 1400,
  },
  {
    make: 'Porsche',
    year: 2020,
    color: 'Prata',
    price: 1700,
  },
  {
    make: 'Porsche',
    year: 2022,
    color: 'Preto-Fosco',
    price: 2600,
  },
  {
    make: 'Porsche',
    year: 2021,
    color: 'Azul-Claro',
    price: 2000,
  },
  {
    make: 'Porsche',
    year: 2020,
    color: 'Branco',
    price: 2200,
  },
];

export const Cars: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(carData);

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

  return (
    <Container id="cars">
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
                <Button>Reservar</Button>
              </Details>
            ))}
          </Options>
        </Box>
      </Width>
    </Container>
  );
};
