import React from 'react'
import Header from './header'
import HeroSection from './hero'
import About from './aboutMe'
import Expirence from './expirence'

function Layout() {
    return (
        <div>
            <Header />
            <HeroSection/>
            <About/>
            <Expirence/>
        </div>
    )
}

export default Layout