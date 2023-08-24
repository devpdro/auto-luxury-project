import { Information } from './information/Information';
import { Topbar } from './topbar';

export const Navbar = () => {
  return (
    <nav>
      <Topbar />
      <Information />
    </nav>
  );
};
