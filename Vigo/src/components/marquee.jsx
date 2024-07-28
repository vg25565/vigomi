import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ children, speed = 40 }) => {
  return (
    <div>
    <div className="overflow-hidden whitespace-nowrap flex bg-black mt-16 pt-28 md:mt-8 md:pt-20">
      <motion.div
        className="flex flex-shrink-0"
        initial={{x:0}}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex flex-shrink-0"
        initial={{x:0}}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed
        }}
        
      >
        {children}
      </motion.div>
    </div>
    {/* <section className='px-96 bg-black justify-center items-center ' >
      <button className=" justify-center items-center group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-20 w-96 border text-center p-3 text-gray-50 text-5xl font-raleway rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg ">
  connect
</button>
</section> */}
    <div className="overflow-hidden whitespace-nowrap flex">
    <motion.div
      className="flex flex-shrink-0"
      initial={{x:'-100%'}}
      animate={{ x: 0 }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        duration: speed
      }}
    >
      {children}
    </motion.div>
    <motion.div
      className="flex flex-shrink-0"
      initial={{x:'-100%'}}
      animate={{ x: 0 }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        duration: speed
      }}
      
    >
      {children}
    </motion.div>
  </div>
  </div>
  );
};

export default Marquee;
