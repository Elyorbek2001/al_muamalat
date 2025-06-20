import React, { useState } from 'react';
import logo1 from '../../assets/logo1.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative z-50 bg-white shadow-md">
            {/* Header content */}
            <div className="flex items-center justify-between py-4 px-5 sm:px-6 xl:px-32">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo1} alt="Logo" />
                    <p className="text-[#009688] font-medium text-[15px] whitespace-nowrap">
                        AL MUAMALAT
                    </p>
                </div>

                {/* Mobile hamburger and Sign In */}
                <div className="md:hidden flex items-center gap-3">
                    <button className="bg-[#009688] text-white py-[6px] px-[15px] rounded-xl hover:scale-110 transition">
                        Sign In
                    </button>
                    <button onClick={toggleMenu} className="text-[#009688] p-2 rounded-full focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Desktop menu */}
                <ul className="hidden md:flex items-center gap-10 text-[#767676]">
                    <li><a href="#" className="hover:text-[#009688]">Home</a></li>
                    <li className="relative group">
                        <button className="flex items-center gap-1 hover:text-[#009688]">
                            Programs
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <ul className="absolute top-full left-0 mt-2 w-40 bg-white border rounded-md shadow-md text-sm text-gray-700 hidden group-hover:block z-30">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 1</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 2</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 3</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#" className="hover:text-[#009688]">Finance tools</a></li>
                    <li><a href="#" className="hover:text-[#009688]">Contact</a></li>
                    <li>
                        <button className="bg-[#009688] text-white py-[6px] px-[15px] rounded-xl hover:scale-110 transition">
                            Sign In
                        </button>
                    </li>
                </ul>
            </div>

            {/* Mobile menu (hamburger) */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 w-52 h-[250px] bg-[#009688] text-white z-[9999] shadow-lg transition duration-300 md:hidden">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-3xl">&times;</button>
                    <ul className="flex flex-col gap-4 mt-20 px-6">
                        <li><a href="#" className="hover:text-gray-200">Home</a></li>
                        <li>
                            <button
                                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                                className="flex items-center gap-2 w-full"
                            >
                                Programs
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isProgramsOpen && (
                                <ul className="ml-4 mt-2 flex flex-col gap-1 text-sm">
                                    <li><a href="/page1">Page 1</a></li>
                                    <li><a href="#">Page 2</a></li>
                                    <li><a href="#">Page 3</a></li>
                                    <li><a href="#">Page 4</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#" className="hover:text-gray-200">Finance tools</a></li>
                        <li><a href="#" className="hover:text-gray-200">Contact</a></li>

                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
