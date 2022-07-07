const ProductPrice = (prop) => {
    const { price } = prop

    return (
        <>
            Ksh.{parseInt(price).toLocaleString()}
        </>
    )
}

export default ProductPrice