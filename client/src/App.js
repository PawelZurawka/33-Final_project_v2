import React from 'react';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Home from './components/pages/Home/HomePage';
import FAQ from './components/pages/FAQ/FaqPage';
import Rules from './components/pages/Rules/RulesPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Product from './components/pages/Product/ProductPage';
// import Cart from './pages/Cart/CartPage';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 300,
    damping: 20
  });
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.3
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.7)
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className='route-wrapper'
        >
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/FAQ'} component={FAQ} />
          <Route exact path={'/rules'} component={Rules} />
          <Route exact path={'/contact'} component={Contact} />
          {/* <Route exact path={'/cart'} component={Cart} /> */}
          <Route exact path={'/product/:id'} component={Product} />
          <Route component={NotFound} />
        </AnimatedSwitch>
      </MainLayout>
    );
  }
}

library.add(fab, fas, faShoppingBag);

export default App;
