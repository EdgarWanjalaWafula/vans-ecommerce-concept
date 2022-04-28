import React from 'react'
import { Parallax } from 'react-parallax';
import { homeBanner3, pageTitleBanner } from '../../images/images'

const Pagetitle = () => {
    return (
        <section className="pagetitle position-relative">
            <Parallax bgImage={homeBanner3} strength={200}>

            </Parallax>
        </section>
    )
}

export default Pagetitle
