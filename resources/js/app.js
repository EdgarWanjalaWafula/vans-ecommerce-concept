/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { userContext } from './contexts/useAuthContext';
import Layout from './layout/Layout';
import App from './routes/App';

userContext

if (document.getElementById('root')) {
    ReactDOM.render(
        <userContext>
            <App />
        </userContext>, document.getElementById('root'));
}