// src/IconGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';

const icons = [
    { src: "./assets/html.svg", alt: "HTML5" },
    { src: "./assets/html3.svg", alt: "CSS3" },
    { src: "./assets/js.svg", alt: "JavaScript" },
    { src: "./assets/node js.svg", alt: "TypeScript" },
    { src: "./assets/react.svg", alt: "React" },
    { src: "./assets/techstack-python.svg", alt: "Svelte" },
    { src: "./assets/techstack-java.svg", alt: "Redux" },
    { src: "./assets/techstack-django.svg", alt: "Firebase" },
    { src: "./assets/techstack-mysql.svg", alt: "MySQL" },
    { src: "./assets/techstack-mssql.svg", alt: "MySQL Server" },
    { src: "./assets/techstack-mongodb.svg", alt: "Node.js" },
    { src: "./assets/techstack-figma.svg", alt: "Python" },
    { src: "./assets/techstack-adobeillustrator.svg", alt: "Java" },
    { src: "./assets/techstack-adobeindesign.svg", alt: "Django" },
    { src: "./assets/techstack-adobephotoshop.svg", alt: "AWS" },
    { src: "./assets/techstack-adobexd.svg", alt: "GCP" },
];

const IconGrid = () => {
    return (
        <div className='container mx-auto bg-black'>
            <div className=''>
                <h2 className='absolute  mt-10 right-20 pt-96 md:pt-80 text-4xl md:text-8xl text-white font-raleway '>Techstack</h2>
            </div>
            <div className="container mx-auto w-full overflow-hidden h-[540px]">
                <div>
                    <div className="overflow-hidden flex origin-left -rotate-[20deg] bg-gradient-to-r from-blue-900 via-fuchsia-700 to-yellow-200 translate-y-96 -mx-44">
                        <motion.div
                            className="flex flex-shrink-0"
                            initial={{ x: 0 }}
                            animate={{ x: '-100%' }}
                            transition={{
                                repeat: Infinity,
                                ease: 'linear',
                                duration: 30
                            }}
                        >
                            {icons.map((icon, index) => (
                                <img key={index} src={icon.src} alt={icon.alt} className="size-24 md:size-36 p-4 " />
                            ))}
                        </motion.div>
                        <motion.div
                            className="flex flex-shrink-0"
                            initial={{ x: 0 }}
                            animate={{ x: '-100%' }}
                            transition={{
                                repeat: Infinity,
                                ease: 'linear',
                                duration: 30
                            }}

                        >
                            {icons.map((icon, index) => (
                                <img key={index} src={icon.src} alt={icon.alt} className="size-24 md:size-36 p-4  " />
                            ))}
                        </motion.div>
                    </div>
                    <div className="overflow-hidden flex origin-left -rotate-[40deg] translate-y-96 bg-slate-50 -mx-56">
                        <motion.div
                            className="flex flex-shrink-0"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            transition={{
                                repeat: Infinity,
                                ease: 'linear',
                                duration: 30
                            }}
                        >
                            {icons.map((icon, index) => (
                                <img key={index} src={icon.src} alt={icon.alt} className="size-24 md:size-36 p-4  " />
                            ))}
                        </motion.div>
                        <motion.div
                            className="flex flex-shrink-0"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            transition={{
                                repeat: Infinity,
                                ease: 'linear',
                                duration: 30
                            }}

                        >
                            {icons.map((icon, index) => (
                                <img key={index} src={icon.src} alt={icon.alt} className="size-24 md:size-36 p-4 " />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default IconGrid;

