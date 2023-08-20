import { Footer } from 'presentation/components';
import { Topbar } from 'presentation/components/highbar/topbar/Topbar';

import { Content } from './contact/components/Content';

export const Contact = () => {
  return (
    <div>
      <Topbar />
      <Content />
      <Footer />
    </div>
  );
};
