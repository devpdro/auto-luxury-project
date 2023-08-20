import { Footer } from 'presentation/components';
import { Topbar } from 'presentation/components/highbar/topbar/Topbar';
import App from 'presentation/components/main/cars/components/ProductDisplay';
import { Reservation } from 'presentation/components/main/cars/reserve/Reservation';

export const Reserve = () => {
  return (
    <div>
      <Topbar />
      <Reservation />
      <App />
      <Footer />
    </div>
  );
};
