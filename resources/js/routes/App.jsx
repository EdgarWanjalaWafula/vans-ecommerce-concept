import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages 
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Error404 from '../pages/Error/Error404';
import SingleProduct from '../pages/Single/SingleProduct';
import Login from '../pages/Auth/Login';
import UserLayout from '../components/layout/UserLayout';
import ScrollToTop from '../components/global/ScrollToTop';
import Cart from '../pages/Cart/Cart';

const App = () => {
    return (
        <BrowserRouter>
            <UserLayout>
                <ScrollToTop>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='page/shop' element={<Shop />} />
                        <Route exact path='page/cart' element={<Cart />} />
                        <Route exact path='collection/:slug' element={<Shop />} />
                        <Route exact path='view-product/:slug' element={<SingleProduct />} />
                        <Route exact path='login' element={<Login />} />
                        <Route exact path='*' element={<Error404 />} />
                    </Routes>
                </ScrollToTop>
            </UserLayout>
        </BrowserRouter>
    )
}

export default App