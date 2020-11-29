import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

import './scss/app.scss';

// function App() {
//   useEffect(() => {
//     // <---Без использования библиотеки axios--->
//     // fetch('http://localhost:3000/db.json')
//     //   .then((resp) => resp.json())
//     //   .then((json) => {
//     //     setPizzas(json.pizzas);
//     //   });
//     // <---С использованием библиотеки axios--->
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);

//   return (
//     <div className='wrapper'>
//       <Header />
//       <div className='content'></div>
//       <Route exact path='/' render={() => <Home items={pizzas} />} />
//       <Route exact path='/cart' component={Cart} />
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='content'></div>
        <Route exact path='/' render={() => <Home items={this.props.items} />} />
        <Route exact path='/cart' component={Cart} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
