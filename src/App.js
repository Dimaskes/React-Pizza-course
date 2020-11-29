import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

import './scss/app.scss';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // <---Без использования библиотеки axios--->
    // fetch('http://localhost:3000/db.json')
    //   .then((resp) => resp.json())
    //   .then((json) => {
    //     setPizzas(json.pizzas);
    //   });
    // <---С использованием библиотеки axios--->
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'></div>
      <Route exact path='/' render={() => <Home items={pizzas} />} />
      <Route exact path='/cart' component={Cart} />
    </div>
  );
}

export default App;
