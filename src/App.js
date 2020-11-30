import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

import './scss/app.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

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
