import React from 'react'

export default function Prize() {
    return (
        <div className='bg-dark text-light pt-48'>
            <div className="max-w-7xl mx-auto px-4">
                <div className='flex md:flex-row-reverse flex-col justify-between space-y-8 md:space-y-0'>
                    <div className='relative flex-1'>
                        <h1 className='heading2 uppercase text-light absolute -mt-10'>prize</h1>
                        <img src="./images/prize.png" alt="prize" className='w-full h-auto aspect-video' />
                    </div>
                    <div className='flex flex-col md:pr-10 flex-1'>
                        <p className='body text-accent pb-3'>
                            1st Prize
                        </p>
                        <p className='body pb-10'>
                            Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium. Dictum habitant amet lacus quam morbi diam.                         </p>
                        <p className='body text-accent pb-3'>
                            2nd Prize
                        </p>
                        <p className='body pb-10'>
                            Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium. Dictum habitant amet lacus quam morbi diam.
                        </p>
                        <p className='body text-accent pb-3'>
                            3rd Prize
                        </p>
                        <p className='body'>
                            Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium. Dictum habitant amet lacus quam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
