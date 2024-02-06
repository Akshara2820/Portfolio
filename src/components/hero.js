import React from 'react'

function HeroSection() {
    return (
        <div className='mt-12 flex flex-col sm:flex-row align-items-center'>
            <div>
                <div className='xl:text-[50px]  text-3xl xl:leading-[60px] font-bold '>
                    Building the future of digital experiences:
                    <span style={{ color: '#d241aa' }}> ReactJS and NextJS</span>
                    <span style={{ color: '#8c31cd' }}> power your next leap.</span>
                </div>
                <p className='text-3xl mt-5' style={{ color: '#ae5538' }}>Welcome to my portfolio</p>
                
            </div>
            <div className='w-full sm:w-[50%]'>
                <img className='w-full' src='/images/hero.png' alt='loading...' />
            </div>

        </div>
    )
}

export default HeroSection