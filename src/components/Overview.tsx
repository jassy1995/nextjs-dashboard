import React from 'react'
import Hero from './Hero'
import Brand from './Brand'
import Catalogue from './Catalogue'
import Testimonial from './Testimonial'
import Footer from './Footer'
import styles from '@/util/style'

export default function Overview() {
    return (
        <div className={`flex flex-col`}>
            <div className={`${styles.paddingX}`}>
            <Hero />
            </div>
            <Brand />
            <div className={`${styles.paddingX}`}>
            <Catalogue />
            <Testimonial />
            <Footer />
            </div>
        </div>
    )
}
