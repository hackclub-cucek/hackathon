import React from 'react'

export default function About() {
    return (
        <div id='about' className='bg-dark text-light pt-44'>
            <div className="max-w-7xl mx-auto px-4">
                <div className='flex md:flex-row flex-col justify-between space-y-8 md:space-y-0'>
                    <div className='relative flex-1'>
                        <h1 className='heading2 text-light uppercase absolute -mt-10'>about</h1>
                        <img src="./images/about.png" alt="about" className='w-full h-auto aspect-video' />
                    </div>
                    <div className='flex flex-col md:pl-10 flex-1'>
                        <p className='body pb-8'>
                            Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium, enim, donec nec. Et fermentum dictumst quam aliquam velit. Consectetur mi odio ullamcorper montes, urna et. Nunc pulvinar sed tempus consectetur cras ipsum congue feugiat velit.
                        </p>
                        <p className='body'>
                            Consectetur mi odio ullamcorper montes, urna et. Nunc pulvinar sed tempus consectetur cras ipsum congue feugiat velit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
