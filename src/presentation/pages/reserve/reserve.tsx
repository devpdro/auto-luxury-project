import { Footer } from 'presentation/components';
import { Topbar } from 'presentation/components/highbar/topbar/Topbar';
import { CarReservation } from 'presentation/components/main/cars/CarReservation';

export const Reserve = () => {
  return (
    <div>
      <Topbar />
      <CarReservation />
      <Footer />
    </div>
  );
};
