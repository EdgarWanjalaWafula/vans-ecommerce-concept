import React from 'react'
import { homeBanner3 } from '../../images/images'
import BlogReadMore from './BlogReadMore'

const BlogItem = () => {
    return (
        <div className="col">
            <div className='theme-blog-item position-relative d-flex align-items-center'>
                <div className="blog-item-body text-center p-3">
                    <img src={homeBanner3} alt="" />
                    <h5 className='small-section-heading position-relative'>Online waiting to connect with you</h5>
                    <BlogReadMore />
                </div>
            </div>
        </div>
    )
}

export default BlogItem