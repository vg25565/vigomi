import React from 'react'

import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline';

export default function Services() {
    
    return (
        <div >
            <section  id="services" className='h-fit md:h-screen w-full bg-black justify-center pt-10'>
                <div className='grid-rows-1  md:grid md:grid-cols-2'>
                <div className='h-96 md:h-auto '>
              <Spline className='md:pr-0.5 h-80 md:h-auto' scene="https://prod.spline.design/FLvYRmVuw7JAJiV4/scene.splinecode"
      />

            </div>
                    <div>
                        <div className=' mt-28 pb-28 md:pb-0 px-auto md:mt-0 grid grid-rows-3 gap-6'>
                            <motion.div  initial={{opacity:0}}
          whileInView={{transition:{duration:1},opacity:1,transitionDelay:1}} className=' mx-6 align-middle justify-center'>
                                <h1  
                                className=' text-5xl md:text-6xl text-slate-50'>SOFTWARE</h1>
                                <h4 className=' text-slate-50'>web</h4>
                                <h4 className=' text-slate-50'>app</h4>
                            </motion.div >
                            <motion.div initial={{opacity:0}}
          whileInView={{transition:{duration:1},opacity:1,transitionDelay:1}} className=' mx-6 align-middle justify-center'>
                                <h1 className='text-5xl md:text-6xl text-slate-50'>MARKETING</h1>
                                <h4 className='pt-3 text-slate-50'>social media</h4>
                                <h4 className='pt-3 text-slate-50'>seo</h4>
                            </motion.div>
                            <motion.div initial={{opacity:0}}
          whileInView={{transition:{duration:1},opacity:1,transitionDelay:1}} className='mx-6 align-middle justify-center'>
                                <h1 className='text-5xl md:text-6xl text-slate-50'>DESIGNING</h1>
                                <h4 className='pt-3 text-slate-50'>UI/Ux</h4>
                                <h4 className='pt-3 text-slate-50'>graphic design</h4>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )
}
