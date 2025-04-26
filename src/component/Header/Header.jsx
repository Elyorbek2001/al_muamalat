import React, { useState } from 'react';
import logo1 from '../../assets/logo1.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header items-center flex-row  justify-between py-5 px-5 sm:px-4 xl:px-32 flex xl:items-center">
            <div className="header__logo flex items-center gap-2">
                <img src={logo1} alt="Logo" />
                <p className="text-[#009688] font-medium text-[15px] whitespace-nowrap">
                    AL MUAMALAT
                </p>
            </div>



            {/* Hamburger icon for small screens */}
            <div className="md:hidden flex items-center gap-3">
                <button className="bg-[#009688] text-white py-[6px] px-[15px] rounded-xl hover:scale-110 transition duration-300 transform will-change-transform">
                    Sign In
                </button>
                <button
                    onClick={toggleMenu}
                    className="text-[#009688] p-2 rounded-full focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`${isMenuOpen ? 'block' : 'hidden'
                    } fixed top-0 right-0 bottom-0 w-64 bg-[#009688] text-white p-5 transition-all duration-300 ease-in-out md:hidden`}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute top-5 right-5 text-white text-3xl"
                >
                    &times; {/* This is the 'X' close button */}
                </button>
                <ul className="flex flex-col gap-5 mt-10">
                    <li>
                        <a href="#" className="hover:scale-110 transition duration-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:scale-110 transition duration-300">
                            Programs
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:scale-110 transition duration-300 whitespace-nowrap">
                            Finance tools
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:scale-110 transition duration-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex flex-1 justify-end items-center text-[#767676]">
                <ul className="flex items-center gap-16">
                    <li>
                        <a href="#" className="hover:scale-110 transition duration-300 inline-block">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:scale-110 transition duration-300 inline-block">
                            Programs
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:scale-110 transition duration-300 whitespace-nowrap inline-block">
                            Finance tools
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:scale-110 transition duration-300 inline-block">
                            Contact
                        </a>
                    </li>
                    <hr class="w-px h-8 bg-[#767676] border-0" />
                    <li>
                        <button className="bg-[#009688] text-white py-[6px] px-[15px] rounded-xl hover:scale-110 transition duration-300 transform">
                            Sign In
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;
