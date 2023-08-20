import { Footer } from 'presentation/components';
import { Topbar } from 'presentation/components/highbar/topbar/Topbar';

import { Content } from '../components/pages/contact/Contact';

export const Contact = () => {
  return (
    <div>
      <Topbar />
      <Content />
      <Footer />
    </div>
  );
};
