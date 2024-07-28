import React from 'react'
import Spline from '@splinetool/react-spline';
import Form from './form';
import Aproach from './aproach';
import Links from './links';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function Topdown() {
  return (
    <div>

      <div className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center  text-white bg-zinc-900">
        <div>
        </div>
        <motion.h2 initial={{opacity:0}}
          whileInView={{transition:{duration:1},opacity:1,transitionDelay:1}} className="text-4xl md:text-8xl font-raleway font-light">Services starts at</motion.h2>
        <motion.p  initial={{opacity:0}}
          whileInView={{transition:{duration:1},opacity:1,transitionDelay:1}} className='text-3xl'>$250</motion.p>
          <h6 className='text-slate-500 m-4'><Link to="/tnc">.TnC applied</Link></h6>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white">
        <Links />
      </div>
      
        <Aproach />
      
      <div id="Contact" className="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-900 text-white">
        <Form />
      </div>
    </div>

        
    </div>
  )
}
