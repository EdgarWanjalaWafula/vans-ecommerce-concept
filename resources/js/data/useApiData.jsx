import React, { useState, useEffect } from 'react'
import { useProductsEnpoint, useTaxonomiesEndpoint } from './useApiEndpoints'

export const useProducts=()=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        
        (async ()=>{
            const response = await fetch(useProductsEnpoint, {signal})
            const value = await response.json()
            setProducts(value)
        })();

        return () => controller.abort();
    }, [])

    return products
}

export const useTaxonomies=()=>{
    const [taxonomies, setTaxonomies] = useState([])
    
    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        (async()=> {
            const response = await fetch(useTaxonomiesEndpoint, {signal})
            const value = await response.json()
            setTaxonomies(value)
        })()

        return () => controller.abort();
    }, [])

    return taxonomies
} 
