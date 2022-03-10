import React from 'react'

export default function Location() {
    return (
        <div id='location' className='bg-dark text-light pt-48'>
            <div className="max-w-7xl mx-auto px-4">
                <div className='flex md:flex-row-reverse flex-col justify-between space-y-8 md:space-y-0'>
                    <div className='relative flex-1'>
                        <h1 className='heading2 text-light uppercase absolute -mt-10'>location</h1>
                        <img src="./images/location.png" alt="location" className='w-full h-auto aspect-video' />
                    </div>
                    <div className='flex flex-col md:pr-10 flex-1'>
                        <p className='subheading1 text-accent pb-3'>
                            When?
                        </p>
                        <p className='body pb-10'>
                            The hackathon will be conducted from <span className='text-accent'>17th to 24th March 2022</span>.
                        </p>
                        <p className='subheading1 text-accent pb-3'>
                            Where?
                        </p>
                        <p className='body'>
                            The hackathon will be conducted in <span className='text-accent'>Hybrid Mode</span>. Your group development activities can also be done at the campus and rest at your hostels. Also we will be having an online presence at discord and some sessions will be in online mode.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
