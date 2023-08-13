import { About } from './about/about';
import { Cars } from './cars/cars';
import { Header } from './header/header';

export const Main = () => {
  return (
    <main>
      <Header />
      <About />
      <Cars />
    </main>
  );
};
