import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../../common/Section'
import PageLoader from '../../components/global/PageLoader'
import CartQuantity from '../../components/product/CartQuantity'
import ProductPrice from '../../components/product/ProductPrice'
import SizeDropdown from '../../components/product/SizeDropdown'
import ProductAddToCart from '../../components/ProductAddToCart'
import ThemeButton from '../../components/ThemeButton'
import { UseProductContext } from '../../contexts/UseProductContext'
import { useProducts } from '../../data/useApiData'
import { useSingleProductEndpoint } from '../../data/useApiEndpoints'
import { image1, image2, image3, image4 } from '../../images/images'

const SingleProduct = () => {
	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState(useContext(UseProductContext)) //useContext by default 
	const { slug } = useParams()

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		products.length < 1 // fetch from api when context fails on reload 
			? (async () => {
				const response = await fetch(`${useSingleProductEndpoint}/${slug}`, { signal })
				const value = await response.json()
				setProducts(value)
			})()
			: setProducts(products.find(product => product.slug === slug))

		setLoading(false)

		return () => controller.abort() //Cleanup subscriptions! 
	}, [])

	const { title, image, description, price } = products

	return (
		<Section>
			{
				loading
					? <PageLoader />
					:
					<div>
						<div className="row justify-content-between">
							<div className="col-md-6">
								<div className="theme-padding">
									<div className="single-breadcrumb small">
										<span>Home / Product / {title}</span>
									</div>
									<img src={`/images/front/product-thumbnails/${image}`} alt="" />
									<img src={image1} alt="" />
									<img src={image3} alt="" />
								</div>
							</div>
							<div className="col-md-5 position-relative single-prod-col">
								<div className="single-product-meta theme-padding">
									<h1>{title}</h1>
									<ProductPrice price={price} />
									<div className="product-meta-row">
										<p>{description}</p>
									</div>
									<div className="product-meta-row d-flex align-items-center">
										<SizeDropdown />
										<CartQuantity />
									</div>
									<div className="cart-buy-now product-meta-row d-flex align-items-center">
										<ProductAddToCart />
										<ThemeButton target='/' label='Buy Now'></ThemeButton>
									</div>
								</div>
							</div>
						</div>
					</div>
			}
		</Section>
	)
}

export default SingleProduct
