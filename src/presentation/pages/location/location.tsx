import { Footer } from 'presentation/components';
import { Topbar } from 'presentation/components/highbar/topbar/Topbar';

import { Content } from './components/Content';

export const Location = () => {
  return (
    <div>
      <Topbar />
      <Content />
      <Footer />
    </div>
  );
};
