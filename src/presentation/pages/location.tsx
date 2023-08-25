import { Footer } from 'presentation/components';
import { Topbar } from 'presentation/components/highbar';

import { Content } from '../components/pages/location/Location';

export const Location = () => {
  return (
    <div>
      <Topbar />
      <Content />
      <Footer />
    </div>
  );
};
