import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { ICON } from 'presentation/assets';

import { Container, Width, Box, Map, Text } from './LocationStyles';

import 'leaflet/dist/leaflet.css';

export const Content = () => {
  const position = [-20.529182, -47.3931428];

  return (
    <Container>
      <Width>
        <Box>
          <Map>
            <MapContainer
              center={position}
              zoom={15}
              style={{ width: '100%', height: '400px' }}
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>Nossa localização aqui!</Popup>
              </Marker>
            </MapContainer>
          </Map>
          <Text>
            <h1>Nossa localização</h1>
            <p>
              Nós estamos localizados na Rua Frederico Moura, no Bairro Cidade
              Nova, cidade de Franca/SP
            </p>
            <h4>Auto Luxury</h4>
            <p>
              <span>
                <ICON.HiOutlineLocationMarker />
              </span>
              Rua Frederico Moura - Cidade Nova <br /> CEP: 14401150 - Franca/SP
            </p>
            <p>
              <span>
                <ICON.AiOutlineWhatsApp />
              </span>
              (19) 99971-5982
            </p>
          </Text>
        </Box>
      </Width>
    </Container>
  );
};
