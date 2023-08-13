import { Information } from './information/Information';
import { Topbar } from './topbar/Topbar';

export const Navbar = () => {
  return (
    <nav>
      <Topbar />
      <Information />
    </nav>
  );
};
