import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import PaginaUm from './pages/PaginaUm';
import NotFound from './pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={ true } component={ Home } />
        <Route path="/PaginaUm" component={ PaginaUm } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>    
  );
}

export default Router;
