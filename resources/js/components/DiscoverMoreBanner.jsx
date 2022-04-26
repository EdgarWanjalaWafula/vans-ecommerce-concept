import React from 'react'
import ThemeButton from './ThemeButton'

const DiscoverMoreBanner = (props) => {
    console.log(props)
    return (
        <div className="position-relative new-arrivals-card">
            <img src={props.image} alt="" />
            <div className="title- position-relative text-white">
                <h1 className="position-relative">{props.heading}</h1>
                <ThemeButton target='/' label='discover more' />
            </div>
        </div>
    )
}

export default DiscoverMoreBanner
