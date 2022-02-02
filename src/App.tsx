import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Compoment/Header';
import Footer from './Compoment/Footer';
import AppRoute from './Routes/AppRoute';
const App:FC = () => {
  console.log('App');
  return (
    <div>
      <BrowserRouter>
        <Header />
          <AppRoute />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
