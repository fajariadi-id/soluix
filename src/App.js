import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import About from './components/Main/About/About';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Main />
      <Footer />
    </Router>
  );
};

export default App;
