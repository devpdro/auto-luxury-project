import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>texto</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
