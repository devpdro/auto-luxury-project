import FEATURED1 from './img/featured1.png';
import FEATURED2 from './img/featured2.png';
import FEATURED3 from './img/featured3.png';
import FEATURED4 from './img/featured4.png';
import FEATURED5 from './img/featured5.png';
import OFFER from './img/offer.png';
import POPULAR1 from './img/popular1.png';
import POPULAR3 from './img/popular3.png';
import POPULAR5 from './img/popular5.png';

export const IMAGES = {
  FEATURED1,
  POPULAR1,
  POPULAR3,
  POPULAR5,
};

// ...
interface CarImages {
  [makeColor: string]: string;
}

export const getCarImage = (makeColor: string): string => {
  const carImages: CarImages = {
    'Tesla-Branco': FEATURED1,
    'Tesla-Vermelho': FEATURED2,
    'Audi-Prata': FEATURED3,
    'Porsche-Azul-Escuro': FEATURED4,
    'Porsche-Preto': FEATURED5,
    'Porsche-Prata': OFFER,
    'Porsche-Preto-Fosco': POPULAR1,
    'Porsche-Azul-Claro': POPULAR3,
    'Porsche-Branco': POPULAR5,
  };

  if (carImages[makeColor]) {
    return carImages[makeColor];
  }

  return POPULAR5;
};
