import React from 'react';

export default function Judges() {
  const judgesData = [
    {
      img: './images/judges/1.jpeg',
      name: 'Siddharth N K',
      post: 'Engineer, Nokia',
    },
    {
      img: './images/judges/2.jpeg',
      name: 'Zameel Pichen',
      post: 'CEO, Megham Labs',
    },
    {
      img: './images/judges/3.jpeg',
      name: 'Dianne Russell',
      post: 'Designer, Starbucks',
    },
    {
      img: './images/judges/4.jpeg',
      name: 'Bessie Cooper',
      post: 'CTO, Louis Vuitton',
    },
    {
      img: './images/judges/5.jpeg',
      name: 'Jon Simmons',
      post: 'Advocate, Adobe',
    },
  ];
  return (
    <div id='judges' className='bg-dark text-light pt-48'>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className='heading2 text-light uppercase absolute -mt-10'>judges</h1>
        <div className='grid grid-cols-2 xl:gap-x-10 lg:gap-x-8 md:gap-x-6 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {judgesData.map((item, index) => {
            return (
              <div key={index} className='space-y-3'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='aspect-square w-full rounded-xl object-cover'
                />
                <div className='border-accent flex flex-col items-center justify-center space-y-[2px] rounded-xl border-25 py-2'>
                  <p className='button text-light text-center'>{item.name}</p>
                  <p className='smallbody text-light text-center'>{item.post}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
