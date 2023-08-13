import { About } from './about/About';
import { Cars } from './cars/cars';
import { Header } from './header/Header';
import { Questions } from './questions/questions';

export const Main = () => {
  return (
    <main>
      <Header />
      <About />
      <Cars />
      <Questions />
    </main>
  );
};
