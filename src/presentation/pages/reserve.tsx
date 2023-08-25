import { Footer } from 'presentation/components';
import { Topbar } from 'presentation/components/highbar';
import { Reservation } from 'presentation/components/main/cars/Reservation';
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
