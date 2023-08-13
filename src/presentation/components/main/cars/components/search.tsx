import React, { useState } from 'react';

import { Container, Width, Box, Details } from './search-styled';

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
          <h1>Pesquisar por carros?</h1>
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
            <button type="button" onClick={handleSearch}>
              Pesquisar
            </button>
          </div>
        </Box>
      </Width>
    </Container>
  );
};

export type { Filters };
