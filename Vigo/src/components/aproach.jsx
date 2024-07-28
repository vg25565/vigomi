import React ,{useRef} from 'react'
import { motion,useInView } from "framer-motion"

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0.1+ i * 0.01;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01  }
        }
      };
    }
  };

    // Move the useInView hook inside the component

export default function Aproach() {
    const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.5 });
  
    return (
        <div id='aproach' className='sticky top-0 h-screen flex flex-col items-center justify-center bg-zinc-950 text-white'>

            <div className="container mx-auto ">
                <motion.svg 
                ref={ref}
                width="1300"
                    height="600"
                    viewBox="0 0 600 600"
                    initial="hidden"
                    
                    animate={inView ? 'visible' : 'hidden'} className='max-lg:hidden absolute overflow-hidden '>
                    <motion.line 
                   x1="0"
                   y1="200"
                   x2="40%"
                   y2="200" x3="100%" y3="100"

                   stroke="#00cc88"
                   strokeWidth="10"
                    variants={draw}
                   custom={1}
                    />
                     <motion.line 
                   x1="57%"
                   y1="200"
                   x2="100%"
                   y2="200" x3="100%" y3="100"

                   stroke="#00cc88"
                   strokeWidth="10"
                   variants={draw}
                   custom={2}
                    />
                    

                </motion.svg>
                

                <h2 className="mb-20 font-raleway text-5xl sm:text-7xl text-white text-center">how we work. </h2>
                <div className="flex flex-wrap items-center justify-center">
                    
                    <div className="w-full md:w-1/3 p-4">
                        <div className="md:max-w-xs mx-auto text-center">
                            <svg className="mx-auto mb-8 " width="50" height="50" viewbox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 9.0712C26.527 7.34116 28.7611 6.25 31.25 6.25C35.8524 6.25 39.5833 9.98096 39.5833 14.5833C39.5833 19.1857 35.8524 22.9167 31.25 22.9167C28.7611 22.9167 26.527 21.8255 25 20.0955M31.25 43.75H6.25V41.6667C6.25 34.7631 11.8464 29.1667 18.75 29.1667C25.6536 29.1667 31.25 34.7631 31.25 41.6667V43.75ZM31.25 43.75H43.75V41.6667C43.75 34.7631 38.1536 29.1667 31.25 29.1667C28.9732 29.1667 26.8386 29.7754 25 30.8389M27.0833 14.5833C27.0833 19.1857 23.3524 22.9167 18.75 22.9167C14.1476 22.9167 10.4167 19.1857 10.4167 14.5833C10.4167 9.98096 14.1476 6.25 18.75 6.25C23.3524 6.25 27.0833 9.98096 27.0833 14.5833Z" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p className="font-medium text-xl text-white">Connect with us</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <div className="md:max-w-xs mx-auto text-center">
                            <svg className="mx-auto mb-8" width="50" height="50" viewbox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33301 12.5C8.33301 10.1988 10.1985 8.33334 12.4997 8.33334H16.6663C18.9675 8.33334 20.833 10.1988 20.833 12.5V16.6667C20.833 18.9679 18.9675 20.8333 16.6663 20.8333H12.4997C10.1985 20.8333 8.33301 18.9679 8.33301 16.6667V12.5Z" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M29.1663 12.5C29.1663 10.1988 31.0318 8.33334 33.333 8.33334H37.4997C39.8009 8.33334 41.6663 10.1988 41.6663 12.5V16.6667C41.6663 18.9679 39.8009 20.8333 37.4997 20.8333H33.333C31.0318 20.8333 29.1663 18.9679 29.1663 16.6667V12.5Z" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.33301 33.3333C8.33301 31.0322 10.1985 29.1667 12.4997 29.1667H16.6663C18.9675 29.1667 20.833 31.0322 20.833 33.3333V37.5C20.833 39.8012 18.9675 41.6667 16.6663 41.6667H12.4997C10.1985 41.6667 8.33301 39.8012 8.33301 37.5V33.3333Z" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M29.1663 33.3333C29.1663 31.0322 31.0318 29.1667 33.333 29.1667H37.4997C39.8009 29.1667 41.6663 31.0322 41.6663 33.3333V37.5C41.6663 39.8012 39.8009 41.6667 37.4997 41.6667H33.333C31.0318 41.6667 29.1663 39.8012 29.1663 37.5V33.3333Z" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p className="font-heading font-medium text-xl text-white">setup a meeting</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 p-4">
                        <div className="md:max-w-xs mx-auto text-center">
                            <svg className="mx-auto mb-8" width="50" height="50" viewbox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33301 10.4167C8.33301 9.26608 9.26575 8.33334 10.4163 8.33334H39.583C40.7336 8.33334 41.6663 9.26608 41.6663 10.4167V14.5833C41.6663 15.7339 40.7336 16.6667 39.583 16.6667H10.4163C9.26575 16.6667 8.33301 15.7339 8.33301 14.5833V10.4167Z" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.33301 27.0833C8.33301 25.9327 9.26575 25 10.4163 25H22.9163C24.0669 25 24.9997 25.9327 24.9997 27.0833V39.5833C24.9997 40.7339 24.0669 41.6667 22.9163 41.6667H10.4163C9.26575 41.6667 8.33301 40.7339 8.33301 39.5833V27.0833Z" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M33.333 27.0833C33.333 25.9327 34.2657 25 35.4163 25H39.583C40.7336 25 41.6663 25.9327 41.6663 27.0833V39.5833C41.6663 40.7339 40.7336 41.6667 39.583 41.6667H35.4163C34.2657 41.6667 33.333 40.7339 33.333 39.5833V27.0833Z" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p className="font-heading font-medium text-xl text-">Get the desired result    </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
