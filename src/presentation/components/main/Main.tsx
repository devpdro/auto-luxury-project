import { About } from './about/About';
import { Cars } from './cars';
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
