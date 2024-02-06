import React from 'react'

function About() {

    const technologies = [
        { tittle: 'ReactJs', image: '/images/react.png' },
        { tittle: 'NextJs', image: '/images/nextjs.svg' },
        { tittle: 'JavaScript', image: '/images/javascript.png' },
        { tittle: 'TypeScript', image: '/images/typescript.png' },
        { tittle: 'Html', image: '/images/html.png' },
        { tittle: 'CSS', image: '/images/CSS.png' },
        { tittle: 'Tailwind', image: '/images/tailwind.png' },
    ]

    return (

        <div className='mt-16 flex md:justify-center gap-14 flex-wrap'>
            <img className='md:w-[500px] md:h-[420px] rounded-lg' src='/images/profile2.jpeg' alt='loading...' />
            <div className='flex md:mt-0 mt-6'>
                <img className='h-12' src='/images/images.png' alt='loading...' />
                <div>
                    <p className='text-3xl mt-2'>Hey there, I'm Akshara.</p>
                    <p className='mt-4 md:w-[550px] md:text-xl'>
                        I am a Frontend developer. I love to do user interface design with passion.
                        I have 2 years of experience, have strong hold on React.js, Next.js, and JavaScript and TypeScript.
                        I'm always eager to learn and grow, and I'm excited to see where my passion for coding takes me next!
                    </p>
                    <p style={{ color: '#6c41d2' }} className='mt-5 text-[30px]'>Technologies I use.</p>
                    <div className='grid gap-5 grid-cols-3 mt-6'>
                        {technologies.map((i) => (
                            <div key={i.tittle}>
                                <img className='h-10' src={i.image} alt='logo' />
                                <p>{i.tittle}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About