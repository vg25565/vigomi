import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavLinks = [
    
    "Services",
    "Aproach",
    "About",
    
    
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav((prev) => !prev);
    };

    return (
        <nav className="p-4 bg-neutral-950 text-white bg-opacity-50">
            <div className="container mx-auto max-w-screen-xl relative">
                <div className="flex justify-between items-center text-white">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400"
                    >
                        <span>VIGOMI</span>
                    </Link>
                    {/* Menu items */}
                    <div className="hidden lg:flex space-x-8 text-md items-center">
                        {NavLinks.map((link, index) => (
                            <AnchorLink 
                                key={index}
                                href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                className="hover:text-indigo-600 duration-200 ease-in-out"
                            >
                                {link}
                            </AnchorLink >
                        ))}
                         <AnchorLink  href="#Contact">
                        <button
                            className=" group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-10 w-32 border text-center  text-gray-50 text-2xl font-raleway rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg ">
                            connect
                        </button></AnchorLink >
                    </div>

                    {/* Hamburger menu for small screens */}
                    <div className="lg:hidden" onClick={toggleNav}>
                        {nav ? (
                            <IoClose size={28} className="text-white" />
                        ) : (
                            <AiOutlineMenu size={25} />
                        )}
                        {/* Mobile menu */}
                        {nav && (
                            <div className="absolute top-16 left-0 right-0 backdrop-brightness-40 backdrop-blur-sm z-50 w-full px-8 py-20 rounded-lg ">
                                <div className="space-y-6 text-3xl drop-shadow-2xl font-bold flex flex-col items-center">
                                    {NavLinks.map((link, index) => (
                                        <AnchorLink
                                            key={index}
                                            href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                            className="hover:text-indigo-600 duration-200 ease-in-out"
                                        >
                                            {link}
                                        </AnchorLink>
                                    ))}
                                    <AnchorLink href="#Contact">
                                    <button
                                        className=" group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:text-rose-200 relative bg-neutral-800 h-16 w-52 border text-center  text-white text-4xl font-raleway rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg ">
                                        connect
                                    </button>
                                    </AnchorLink>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
