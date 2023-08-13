import FEATURED1 from './img/featured1.png';
import POPULAR1 from './img/popular1.png';
import POPULAR5 from './img/popular5.png';

export const IMAGES = {
  FEATURED1,
  POPULAR5,
  POPULAR1,
};

interface CarImages {
  [make: string]: string;
}

export const getCarImage = (make: string): string => {
  const carImages: CarImages = {
    Toyota: FEATURED1,
    Honda: POPULAR5,
  };

  return carImages[make] || FEATURED1;
};
