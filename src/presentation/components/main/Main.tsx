import { About } from './about/About';
import { Cars } from './cars/Cars';
import { Header } from './header';
import { Questions } from './questions';

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
