import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page from './newPage'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
        <Route exact path="/" component={App}/>
        <Route path="/newpage" component={Page}/>
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
