const ProductGenderFilter = () => {
    return (
        <ul className="d-flex justify-content-center mx-auto product-gender-filter">
            <li>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input rounded-0" />
                    <label className="form-check-label">
                        Men
                    </label>
                </div>
            </li>
            <li>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input rounded-0" />
                    <label className="form-check-label">
                        Women
                    </label>
                </div>
            </li>
            <li>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input rounded-0" />
                    <label className="form-check-label">
                        Unisex
                    </label>
                </div>
            </li>
        </ul>
    )
}

export default ProductGenderFilter