import { Information } from './information/information';
import { NavigationBar } from './navigationbar/navigationbar';
import { Topbar } from './topbar/topbar';

export const Navbar = () => {
  return (
    <nav>
      <Topbar />
      <Information />
      <NavigationBar />
    </nav>
  );
};
