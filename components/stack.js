import React from 'react'

export default function Stack() {
    return (
        <div className='bg-dark text-light pt-48'>
            <div className="max-w-7xl mx-auto px-4">
                <div className='flex md:flex-row flex-col justify-between space-y-8 md:space-y-0'>
                    <div className='relative flex-1'>
                        <h1 className='heading2 uppercase absolute -mt-10'>stack</h1>
                        <img src="./images/stack.png" alt="stack" className='w-full h-auto aspect-video' />
                    </div>
                    <div className='flex flex-col md:pl-10 flex-1'>
                        <p className='body text-accent pb-3'>
                            Web Application
                        </p>
                        <p className='body pb-10'>
                            Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium. Dictum habitant amet lacus quam morbi diam.                         </p>
                        <p className='body text-accent pb-3'>
                            Flutter Application
                        </p>
                        <p className='body pb-10'>
                            Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium. Dictum habitant amet lacus quam morbi diam.
                        </p>
                        <p className='body text-accent pb-3'>
                            Machine Learning
                        </p>
                        <p className='body pb-10'>
                            Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium. Dictum habitant amet lacus quam.
                        </p>
                        <p className='body text-accent pb-3'>
                            Python-Django
                        </p>
                        <p className='body'>
                            Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium. Dictum habitant.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
