import { Information } from './information/information';
import { Topbar } from './topbar/topbar';

export const Navbar = () => {
  return (
    <nav>
      <Topbar />
      <Information />
    </nav>
  );
};
