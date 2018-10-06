import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Home from './views/home';
import ProductsPage from './views/products_page'
import Search from './views/search'
import Login from './views/login'

import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/search" component={Search} />
            <Route path="/users/login" component={Login} />
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
