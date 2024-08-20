import React from 'react'
import Hero from './Hero'
import Brand from './Brand'
import Catalogue from './Catalogue'
// import Catalogue from './Catalogue';

export default function Overview() {
    return (
        <div className='flex flex-col'>
            <Hero />
            <Brand />
            <Catalogue />
        </div>
    )
}
