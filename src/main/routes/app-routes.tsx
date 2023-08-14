import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Theme } from 'main/providers/theme';
import { Home } from 'presentation/pages';
import { Location } from 'presentation/pages';
import { Contact } from 'presentation/pages';

export const AppRoutes: React.FC = () => {
  return (
    <Theme>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/localizacao" element={<Location />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </Theme>
  );
};
