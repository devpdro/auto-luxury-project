import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Theme } from 'main/providers/theme';
import { Home, Reserve } from 'presentation/pages';
import { Location } from 'presentation/pages';
import { Contact } from 'presentation/pages';
import { Register } from 'presentation/pages';
import { Login } from 'presentation/pages';

export const AppRoutes: React.FC = () => {
  return (
    <Theme>
      <Router>
        <Routes>
          <Route path="/inicio" element={<Home />} />
          <Route path="/reservas" element={<Reserve />} />
          <Route path="/localizacao" element={<Location />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/conectar" element={<Login />} />
          <Route path="/cadastrar" element={<Register />} />
          <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
      </Router>
    </Theme>
  );
};
