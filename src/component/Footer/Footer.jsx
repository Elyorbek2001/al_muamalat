"use client";

import React, { useState } from "react";
import Vector from "../../assets/Vector.png";
import facebook from '../../assets/f_facebook.png';
import instagram from '../../assets/f_instagram.png';
import twitter from '../../assets/f_twitter.png';
import youtube from '../../assets/youtube.png';

const Footer = () => {
    const [selectedCountry, setSelectedCountry] = useState({
        name: "Uzbekistan",
        code: "+998",
        flag: "https://flagcdn.com/w40/uz.png",
    });

    const [showDropdown, setShowDropdown] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        agree: false,
    });

    const countries = [
        {
            name: "Uzbekistan",
            code: "+998",
            flag: "https://flagcdn.com/w40/uz.png",
        },
        {
            name: "Russia",
            code: "+7",
            flag: "https://flagcdn.com/w40/ru.png",
        },
        {
            name: "United Kingdom",
            code: "+44",
            flag: "https://flagcdn.com/w40/gb.png",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, country: selectedCountry });
    };

    return (
        <>
            <div className="w-full text-center px-6 md:px-32 pt-24 pb-8 bg-gray-50">
                <div className="rounded-2xl overflow-hidden shadow grid grid-cols-1 md:grid-cols-2 w-full">
                    {/* LEFT BOX */}
                    <div className="px-6 md:px-8 py-8 text-[#D28527] bg-[#FAE9D3] text-start h-full flex flex-col justify-center">
                        <h4 className="font-medium text-2xl md:text-3xl pb-4">
                            Workshops and Spiritual Development
                        </h4>
                        <p className="text-base md:text-xl">
                            Participate in our weekly workshops focused on Islamic studies and spiritual growth.
                            These sessions are designed to help you strengthen your connection with faith and acquire
                            essential skills for daily life.
                        </p>
                    </div>

                    {/* FORM BOX */}
                    <div className="bg-[#F9F7F3] border shadow text-left px-6 md:px-8 py-8 h-full flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-semibold">Free Consultation</h2>
                        <p className="text-base md:text-xl text-gray-600 mt-2 mb-4">
                            Leave your phone number, and we will reach out to provide you with complete information about our courses.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Input */}
                            <input
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            {/* Phone Input with Flag */}
                            <div className="flex gap-2 items-center">
                                {/* Flag Picker */}
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        className="flex items-center gap-1 px-2 py-2 border border-gray-300 bg-gray-100 rounded-md"
                                    >
                                        <img
                                            src={selectedCountry.flag}
                                            alt={selectedCountry.name}
                                            className="w-5 h-3"
                                        />
                                        <span className="text-sm">{selectedCountry.code}</span>
                                        <svg
                                            className="w-3 h-3 ml-1"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Dropdown */}
                                    {showDropdown && (
                                        <div className="absolute z-10 mt-1 bg-white border rounded shadow w-28">
                                            {countries.map((country) => (
                                                <button
                                                    key={country.code}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setShowDropdown(false);
                                                    }}
                                                    className={`w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-gray-100 ${selectedCountry.code === country.code
                                                        ? "bg-gray-200"
                                                        : ""
                                                        }`}
                                                >
                                                    <img
                                                        src={country.flag}
                                                        alt={country.name}
                                                        className="w-4 h-3"
                                                    />
                                                    {country.code}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Agreement Checkbox */}
                            <div className="flex gap-2 items-start">
                                <input
                                    type="checkbox"
                                    checked={formData.agree}
                                    onChange={(e) =>
                                        setFormData({ ...formData, agree: e.target.checked })
                                    }
                                    className="mt-1"
                                />
                                <span className="text-sm">
                                    I agree to the use of my personal information for consultation purposes.
                                </span>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-2 rounded-md bg-[#009688] text-white hover:bg-blue-700 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>



            <div className="bg-[#009688] w-full py-6 items-center text-white">
                <div className="flex items-center justify-center gap-2 mt-8">
                    <img src={Vector} alt="" />
                    <div><p>Dior <br /> design</p></div>
                </div>
                <div className="flex items-center justify-center px-6 md:px-32 mt-8">
                    <ul className="flex items-center gap-6 text-sm">
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Servise</a></li>
                        <li><a href="">Contact Us</a></li>

                    </ul>
                </div>

                <div className="flex items-center justify-center py-4 gap-4 mt-6">
                    <img src={youtube} alt="" />
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                </div>
                <div className="flex items-center justify-center py-6 px-32 ">
                    <hr className="w-full border-t border-gray-300" />
                </div>
                <div className="text-center py-4 gap-4">
                    <p className="text-[#CFD3D7]">Copyright Satyam Studio</p></div>
            </div>

        </>


    );
};

export default Footer;
