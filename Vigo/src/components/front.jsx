import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion"


export default function Front() {
  return (
    <div>

      <section className='h-[540px] w-full flex bg-black mb-8'>
          <div>
            <div>
              <Spline className='absolute sm:mt-0 md:pl-96 md:pr-0.5 items-end md:justify-end sm:h-80' scene="https://prod.spline.design/vukJBZAKbc6GR3bz/scene.splinecode"
      />

            </div>
            <motion.div className='absolute sm:mt-40 md:mt-0 md:pt-0 items-center justify-center bg-transparent'>
              <h3 className=' pl-6 pt-28 bg-transparent md:pt-64  mt-12 md:px-14 md:pl-16 text-slate-50 items-start justify-start font-montserrat absolute'>vigomi</h3>
              <h1 className=' bg-transparent md:pt-80 pt-44 md:px-14 text-slate-50 text-8xl items-start justify-start font-montserrat font-extrabold'>Grow with us.<br /></h1>
              
              
              
            </motion.div> 
          </div>


      </section>
    </div>
  );
}

