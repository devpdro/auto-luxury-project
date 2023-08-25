import React, { useState } from 'react';

import { ICON } from 'presentation/assets';

import { Container, Width, Box, Details, Reserve } from './SearchStyles';

interface Filters {
  make: string;
  year: string;
  color: string;
}

interface SearchProps {
  onSearch: (filters: Filters) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [make, setMake] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');

  const handleSearch = () => {
    onSearch({ make, year, color });
  };

  return (
    <Container>
      <Width>
        <Box>
          <h4>Pesquisar pelos melhores carros</h4>
          <h1>Qual veículo você está procurando?</h1>
          <div>
            <Details
              placeholder="Marca"
              type="text"
              name="make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
            <Details
              placeholder="Ano"
              type="text"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <Details
              placeholder="Cor"
              type="text"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
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
