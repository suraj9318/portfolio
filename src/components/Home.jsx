import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#f5f5f5]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#403d3d]'>
          Suraj Kumar Mishra
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#242424]'>
          I'm a Front-End Developer.
        </h2>
        <p className='text-[#403d3d] py-4 max-w-[700px]'>
        I am a enthusiastic front-end developer and have been in the industry for more than 1.5+ years. I have a keen eye for detail and most of my working life has been dedicated to creating stunning websites for clients.
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
        <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-white'>
         
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
