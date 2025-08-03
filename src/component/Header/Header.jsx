import React, { useState, useEffect, useRef } from 'react';
import logo1 from '../../assets/logo1.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);
    const programsRef = useRef(null); //  menyu tashqarisini aniqlash uchun

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsProgramsOpen(false);
    };

    const togglePrograms = () => {
        setIsProgramsOpen(!isProgramsOpen);
    };

    // 👇Sahifaning boshqa joyiga bosilsa menyuni yopadi
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                programsRef.current &&
                !programsRef.current.contains(event.target)
            ) {
                setIsProgramsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative z-50 bg-white shadow-md">
            {/* Header */}
            <div className="flex items-center justify-between py-4 px-5 sm:px-6 xl:px-32">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo1} alt="Logo" />
                    <p className="text-[#009688] font-medium text-[15px] whitespace-nowrap">AL MUAMALAT</p>
                </div>

                {/* Mobile: Sign In + Hamburger */}
                <div className="md:hidden flex items-center gap-3">
                    <button className="bg-[#009688] text-white py-[6px] px-[15px] rounded-xl hover:scale-110 transition">
                        Sign In
                    </button>
                    <button onClick={toggleMenu} className="text-[#009688] p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10 text-[#767676]">
                    <li><a href="#" className="hover:text-[#009688]">Home</a></li>

                    {/* Programs - onClick bilan + tashqariga bosilsa yopiladi */}
                    <li className="relative" ref={programsRef}>
                        <button
                            onClick={togglePrograms}
                            className="flex items-center gap-1 hover:text-[#009688]"
                        >
                            Programs
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isProgramsOpen && (
                            <ul className="absolute top-full left-0 mt-2 w-40 bg-white border rounded-md shadow-md text-sm text-gray-700 z-30">
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 1</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 2</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 3</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Page 4</a></li>
                            </ul>
                        )}
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

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 w-52 h-auto bg-[#009688] text-white z-[9999] shadow-lg transition duration-300 md:hidden pb-5">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-3xl">&times;</button>
                    <ul className="flex flex-col gap-4 mt-20 px-6">
                        <li><a href="#" className="hover:text-gray-200">Home</a></li>
                        <li>
                            <button onClick={togglePrograms} className="inline-flex items-center gap-2">
                                Programs
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isProgramsOpen && (
                                <ul className="flex flex-col gap-1 text-sm bg-white text-black shadow-md p-2 mt-2 z-50 min-w-[150px] rounded-md">
                                    <li><a href="#" className="hover:bg-gray-100 px-3 py-1 rounded">Page 1</a></li>
                                    <li><a href="#" className="hover:bg-gray-100 px-3 py-1 rounded">Page 2</a></li>
                                    <li><a href="#" className="hover:bg-gray-100 px-3 py-1 rounded">Page 3</a></li>
                                    <li><a href="#" className="hover:bg-gray-100 px-3 py-1 rounded">Page 4</a></li>
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
