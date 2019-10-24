import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/FAQ'} component={FAQ} />
          <Route exact path={'/rules'} component={Rules} />
          <Route exact path={'/contact'} component={Contact} />
          {/* <Route exact path={'/cart'} component={Cart} /> */}
          <Route exact path={'/product/:id'} component={Product} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
}

library.add(fab, fas, faShoppingBag);

export default App;
