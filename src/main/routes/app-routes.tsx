import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Home, Reserve } from 'presentation/pages';
import { Location } from 'presentation/pages';
import { Contact } from 'presentation/pages';

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/reservas" element={<Reserve />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
    </Router>
  );
};
