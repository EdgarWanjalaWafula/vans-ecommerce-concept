import React, { useContext, useEffect, useState } from 'react'
import ProductCard from "../../../components/ProductCard"
import ProductGenderFilter from "../../../components/ProductGenderFilter"
import { UseProductContext } from "../../../contexts/UseProductContext"

const FeaturedProducts = () => {
    const products = useContext(UseProductContext)

    return (
        <section className="shop-home-featured-products theme-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-2 text-center text-uppercase">
                        <div className="shop-section-title">
                            <h1>featured products</h1>
                            <ProductGenderFilter />
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    {
                        products.filter(product => product.featured == 1).map((product, index) => (
                            index < 5 ? <ProductCard key={index} {...product} /> : null
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts