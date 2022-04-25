import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages 
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Error404 from '../pages/Error/Error404';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/page/shop' element={<Shop />} />
                <Route exact path='*' element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App