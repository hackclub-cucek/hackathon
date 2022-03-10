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
                        <span className='subheading1'>Hack Club CUCEK and TinkerHub CUCEK presents Hack Kuttanadu 2022</span>. We aim to bring talented students to develop innovative solutions to real world problems at Kuttanadu and provide a friendly yet competitive environment where teams can bring out the best in themselves.
                        </p>
                        <p className='body'>
                        Prove your worth in this hackathon by ideating, innovating and developing meaningful solutions solutions that positively impact the society. we are there to guide you along the way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
