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
    <div className='relative mx-auto max-w-7xl bg-dark px-4 pt-48 text-light '>
      <h1 className='heading2 outline_text absolute left-7 -mt-10 uppercase'>
        location
      </h1>
      <div className='mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {judgesData.map((item, index) => {
          return (
            <div key={index} className='w-full space-y-4'>
              <img
                src={item.img}
                alt={item.name}
                className='aspect-square w-full  rounded-[12px] object-cover '
              />
              <div className='flex flex-col items-center justify-center space-y-[2px] rounded-xl border-2 border-accent py-2'>
                <p>{item.name}</p>
                <p>{item.post}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
