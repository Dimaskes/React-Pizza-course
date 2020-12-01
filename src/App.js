import React from 'react';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

import './scss/app.scss';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'></div>
      <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart} />
    </div>
  );
}

export default App;
