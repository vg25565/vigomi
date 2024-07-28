import React from 'react'
import { motion } from 'framer-motion'

export default function Links() {
  return (
    <div>
      <div id="about"className='conatainer mx-auto px-4 items-center justify-center'>
        <div className='container px-10'>
          <motion.h1 
          initial={{opacity:0}}
          whileInView={{transition:{duration:1},opacity:1,transitionDelay:1}}
          
          className='mb-20 font-raleway text-5xl sm:text-7xl text-white text-center'>We help our client to build presence.</motion.h1>
          <motion.p initial={{opacity:0}}
          whileInView={{transition:2,opacity:1,transitionDelay:1}} className='font-medium text-md md:text-xl text-white text-center'>At VIGOMI, we specialize in enhancing your online presence through comprehensive web development, innovative app development, strategic social media management, and professional video editing services. Our team of experts is dedicated to delivering solutions tailored to your unique business needs, ensuring you stand out in the digital landscape. Partner with us to elevate your brand and drive growth.</motion.p>
        </div>
      </div>
    </div>
  )
}
