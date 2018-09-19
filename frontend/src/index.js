import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './views/App';
import ProductsPage from './views/products_page'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/products" component={ProductsPage} />
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
