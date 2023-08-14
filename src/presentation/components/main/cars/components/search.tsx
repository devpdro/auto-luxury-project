import React, { useState } from 'react';

import { ICON } from 'presentation/assets';

import { Container, Width, Box, Details, Reserve } from './SearchStyles';

interface Filters {
  make: string;
  model: string;
  year: string;
  price: string;
}

interface SearchProps {
  onSearch: (filters: Filters) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');

  const handleSearch = () => {
    onSearch({ make, model, year, price });
  };

  return (
    <Container>
      <Width>
        <Box>
          <h4>Pesquisar pelos melhores carros</h4>
          <h1>Qual veículo você está procurando?</h1>
          <div>
            <Details
              type="text"
              name="make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
            <Details
              type="text"
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <Details
              type="text"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <Details
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Reserve type="button" onClick={handleSearch}>
              <span>
                <ICON.AiOutlineSearch />
              </span>
              Pesquisar
            </Reserve>
          </div>
        </Box>
      </Width>
    </Container>
  );
};

export type { Filters };
