import { Footer } from 'presentation/components';
import { Topbar } from 'presentation/components/highbar/topbar';
import { Reservation } from 'presentation/components/main/cars/reserve/Reservation';
import App from 'presentation/components/payment/Payment';

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
