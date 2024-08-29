import React from 'react'
import Hero from './Hero'
import Brand from './Brand'
import Catalogue from './Catalogue'
import Testimonial from './Testimonial'
import Footer from './Footer'

export default function Overview() {
    return (
        <div className='flex flex-col'>
            <Hero />
            <Brand />
            <Catalogue />
            <Testimonial />
            <Footer />
        </div>
    )
}
