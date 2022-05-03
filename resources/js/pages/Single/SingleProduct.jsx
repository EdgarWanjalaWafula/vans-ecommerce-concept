import React from 'react'
import { useContext } from "react"
import { useParams } from 'react-router-dom'
import Section from '../../common/Section'
import { UseProductContext } from '../../contexts/UseProductContext'

const SingleProduct = () => {
	const {slug} = useParams()
	const products = useContext(UseProductContext)
	const product = products.find(product => product.slug === slug)
	
	return (
		<Section>
			<div className="p-5"></div>
			<div className="row align-items-center">
				<div className="col-md-6">
					<img src={`/images/front/product-thumbnails/${product.image}`} alt="" />
				</div>
				<div className="col offset-1">
					<h1>{product.title}</h1>

					<p>{product.description}</p>
				</div>
			</div>
		</Section>
	)
}

export default SingleProduct
