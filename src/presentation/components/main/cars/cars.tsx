import { useState } from 'react';
import { Link } from 'react-router-dom';

import { carData } from 'main';
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
import { Search, Filters } from './components/Search';

interface Car {
  make: string;
  year: number;
  color: string;
  price: number;
}

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
                <Link to="/reservas">
                  <Button>Reservar</Button>
                </Link>
              </Details>
            ))}
          </Options>
        </Box>
      </Width>
    </Container>
  );
};
