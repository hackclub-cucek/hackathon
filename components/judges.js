import React from 'react';

export default function Judges() {
  const judgesData = [
    {
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Siddharth N K',
      post: 'Engineer, Nokia',
    },
    {
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Zameel Pichen',
      post: 'CEO, Megham Labs',
    },
    {
      img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Dianne Russell',
      post: 'Designer, Starbucks',
    },
    {
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Bessie Cooper',
      post: 'CTO, Louis Vuitton',
    },
    {
      img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Jon Simmons',
      post: 'Advocate, Adobe',
    },
  ];
  return (
    <div className='bg-dark text-light pt-48'>
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
                <div className='border-accent flex flex-col items-center justify-center space-y-[2px] rounded-xl border-2 py-2'>
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
