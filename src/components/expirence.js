import React from 'react'

function Expirence() {
    return (
        <div className='mt-16'>
            <div className='flex justify-center'>
                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-12' src='/images/images.png' />
                        <h1 style={{ color: '#6f3fd1' }} className='uppercase  text-xl'>What i have done so far</h1>
                    </div>
                    <h1 className='md:text-[50px] text-[40px] font-bold md:-ml-10 mt-4'>Work Expirence</h1>
                </div>
            </div>

            <div className='flex justify-center mt-16'>

                <div className=''>
                    <div className='expirenceCard ml-4'>
                        <p className='text-2xl font-bold'>Frontend Developer</p>
                        <p>Tif Labs Private Limited</p>
                        <ul>
                            <li className='w-[450px]'>Working as frontend Developer in IoT Platform,
                                responsible for designing responsive and developing
                                web templates and Reusable UI components in react.
                            </li>
                            <li>hello</li>
                        </ul>
                    </div>
                    <div className=''>
                        <p>Company 2</p>
                    </div>
                </div>
                <div class="border-l-4 rounded-lg border-white h-[800px]"></div>
                <div>
                    <div>
                        <p>Company 3</p>
                    </div>
                    <div className=''>
                        <p>Company 4 </p>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default Expirence