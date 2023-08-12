import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Theme } from 'main/providers';
import { Home } from 'presentation/pages';

export const AppRoutes: React.FC = () => {
  return (
    <Theme>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </Theme>
  );
};
