import ThemeButton from "../../../components/ThemeButton"
import { newArrivalsBg, uniformSection } from "../../../images/images"
import React from 'react'

const BlowRowBanner = () => {
    return (
        <div className="position-relative blow-row-banner d-flex align-items-center">
            <div className=" position-relative">
                <h1 className="position-relative heading-underline">uniform friendly shoes</h1>
                <ThemeButton target='/' label='discover more' />
            </div>
            <img src={uniformSection} alt="" />
        </div>
    )
}

export default BlowRowBanner
