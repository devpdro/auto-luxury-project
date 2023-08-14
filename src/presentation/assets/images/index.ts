import FEATURED1 from './img/featured1.png';
import POPULAR1 from './img/popular1.png';
import POPULAR2 from './img/popular2.png';
import POPULAR3 from './img/popular3.png';
import POPULAR4 from './img/popular4.png';
import POPULAR5 from './img/popular5.png';

export const IMAGES = {
  FEATURED1,
  POPULAR1,
  POPULAR2,
  POPULAR3,
  POPULAR4,
  POPULAR5,
};

interface CarImages {
  [make: string]: string;
}

export const getCarImage = (make: string): string => {
  const carImages: CarImages = {
    Toyota: POPULAR5,
    Porsche: POPULAR1,
    Honda: POPULAR3,
    Gol: POPULAR2,
  };

  return carImages[make] || FEATURED1;
};
