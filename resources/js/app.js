/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import PageLoader from './components/global/PageLoader';

const VansEcommerce = () => {
    const [preloader, setPreloader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 1200)

    }, [])

    return (
        preloader
            ? <div className='fs-preloader'>
                <PageLoader />
            </div>
            : <App />
    )
}

export default VansEcommerce


if (document.getElementById('root')) {
    ReactDOM.render(<VansEcommerce />, document.getElementById('root'));
}