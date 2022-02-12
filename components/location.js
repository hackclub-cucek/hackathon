import React from 'react'

export default function Location() {
    return (
        <div className='bg-dark text-light pt-48'>
            <div className="max-w-7xl mx-auto px-4">
                <div className='flex md:flex-row-reverse flex-col justify-between space-y-8 md:space-y-0'>
                    <div className='relative flex-1'>
                        <h1 className='heading2 text-light uppercase absolute -mt-10'>location</h1>
                        <img src="./images/location.png" alt="location" className='w-full h-auto aspect-video' />
                    </div>
                    <div className='flex flex-col md:pr-10 flex-1'>
                        <p className='body text-accent pb-3'>
                            When?
                        </p>
                        <p className='body pb-10'>
                            Dictum habitant amet lacus quam morbi diam. <span className='text-accent'>Feb 21-28, 2022</span> phasellus pretium.
                        </p>
                        <p className='body text-accent pb-3'>
                            Where?
                        </p>
                        <p className='body'>
                            Dictum habitant amet <span className='text-accent'>100% Remote</span> morbi diam. Sit posuere phasellus pretium.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
