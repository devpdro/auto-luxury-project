import { About } from './about/About';
import { Cars } from './cars/Cars';
import { Header } from './header/Header';
import { Questions } from './questions/Questions';

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
