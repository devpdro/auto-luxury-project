import { Information } from './information';
import { Topbar } from './topbar';

export const Navbar = () => {
  return (
    <nav>
      <Topbar />
      <Information />
    </nav>
  );
};
