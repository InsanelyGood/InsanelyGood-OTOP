import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Home from './views/home';
import ProductsPage from './views/products_page'
import Search from './views/search'
import ProductDetail from './views/product_detail'
import Login from './views/login'
import Register from './views/register'

import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductsPage} />
            <Route path="/search" component={Search} />
            <Route path="/products/:name" component={ProductDetail} />
            <Route path="/users/login" component={Login} />
            <Route path="/users/register" component={Register} />
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
