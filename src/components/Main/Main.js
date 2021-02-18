import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Product from './Product/Product';
import Team from './Team/Team';
import Value from './Value/Value';

const Main = () => {
  return (
    <main>
      <Header />
      <About />
      <Value />
      <Product />
      <Team />
      <Contact />
    </main>
  );
};

export default Main;
