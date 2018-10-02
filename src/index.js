import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './components/search';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Container from './components/container';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navbar />
            <Route path="/index" component={Container} />
            <Route path="/search" component={Search} />
            <Footer />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();