import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { Container, Width, Box, Map, Text } from './ContentStyles';

import 'leaflet/dist/leaflet.css';

export const Content = () => {
  const position = [-22.4115, -47.5616];

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
              Nós estamos localizados na Rua 7 número 1771 no bairro Zona
              Central, cidade de RIO CLARO/SP
            </p>
            <h4>Auto Luxury</h4>
            <p>Rua 7, 1771 - Zona Central</p>
            <p>CEP: 13500-200 - RIO CLARO/SP</p>
            <p>(19) 99805-4440</p>
          </Text>
        </Box>
      </Width>
    </Container>
  );
};
