import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages 
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Error404 from '../pages/Error/Error404';
import Layout from '../layout/Layout';
import SingleProduct from '../pages/Single/SingleProduct';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='page/shop' element={<Shop />} />
                    <Route exact path='collection/:slug' element={<Shop />} />
                    <Route exact path='view-product/:slug' element={<SingleProduct />} />
                    <Route exact path='*' element={<Error404 />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App