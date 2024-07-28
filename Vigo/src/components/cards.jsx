
import React from 'react'
import { motion, useScroll } from "framer-motion"

export default function Cards() {
    const { scrollYProgress } = useScroll()
    return (
        <>
            <section className='h-fit md:h-screen w-full bg-black '>
            {/* <div className=' absolute container mx-[20%] my-[25%] md:h-44 rounded-lg w-[60%]  align-middle justify-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'></div> */}
            
                <div className=' grid grid-rows-3 pb-4 md:pb-10 gap-0 px-4  md:grid md:grid-cols-3 md:gap-8 md:-mt-24 overflow-hidden'>

                    <motion.div initial={{
                        opacity: 0, y: 200
                    }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <div className=' container h-72 w-80  bg-gradient-to-tr from-zinc-700 via-black  to-black bg-opacity-30 text-slate-50 backdrop-blur-3xl  p-7 md:h-80 md:w-96  border-2 border-slate-950 rounded-md  mt-36 gap-6 '>
                            <h2 className='mx-auto align-middle md:pt-10'>Our goal is to empower businesses with cutting-edge technology and creative strategies that drive growth and enhance their online presence.</h2>
                        </div>
                    </motion.div>


                    <motion.div initial={{
                        opacity: 0, y: 100
                    }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}>
                        <div className='container text-slate-50 backdrop-blur-md p-7  h-72 w-80  md:h-80 md:w-96  border-2 border-slate-950 rounded-md  bg-gradient-to-t from-zinc-900 via-black  to-black mt-36 ' >
                            <h2 className='mx-auto align-middle md:pt-10 '>Offering top-quality services in web development, app development, video editing, graphic designing, and more.Aiming to help businesses grow by using the latest technology and creative ideas, ensuring our customers are always satisfied.</h2>
                        </div>
                    </motion.div>


                    <motion.div initial={{
                        opacity: 0, y: 200
                    }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className=' container h-72 w-80 bg-gradient-to-tl from-zinc-700 via-black  to-black text-slate-50 backdrop-blur-md p-7 md:h-80 md:w-96  border-2 border-slate-950 rounded-md  mt-36'>
                            <h2 className='mx-auto align-middle md:pt-10'>We prioritize customer satisfaction and quality in every project. Our team of experts is dedicated to delivering solutions that meet your unique needs and exceed expectations. Partner with us to experience the difference.</h2>
                        </div>
                    </motion.div>
                    </div>
            </section>
        </>
    )
}

