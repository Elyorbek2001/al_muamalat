import React, { useEffect, useState } from 'react';
import { Play } from "lucide-react";

import media2 from "../../assets/media2.jpg";
import media1 from "../../assets/media1.jpg";
import media from "../../assets/mediaimg.avif";


import video from "../../assets/video/frontend.mp4";

const Media = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    // 🔐 ESC tugmasini bosganda modalni yopish
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const mediaItems = [
        {
            image: media,
            title: "Why Islamic finance?",
            video: video
        },
        {
            image: media2,
            title: "What makes Islamic finance unique?",
            video: video
        },
        {
            image: media1,
            title: "How is risk managed in Islamic finance?",
            video: video
        },
    ];

    return (
        <div className='w-full text-center px-8 md:px-32'>
            <h1 className="text-4xl font-bold mb-8">Our Media</h1>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <p className="py-4 max-w-2xl">
                    Our team consists of seasoned professionals with extensive experience in Islamic finance and management.
                </p>
            </div>

            <div className="py-10">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold">Our media showcase</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mediaItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative h-96 rounded-xl overflow-hidden group shadow-md"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
                            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
                                {item.title}
                            </div>
                            <div className="absolute bottom-4 right-4 z-10">
                                <button
                                    onClick={() => {
                                        setCurrentVideo(item.video);
                                        setIsOpen(true);
                                    }}
                                    className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center"
                                >
                                    <Play className="w-5 h-5 text-black" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setIsOpen(false)} // click outside closes modal
                >
                    <div
                        className="bg-black rounded-lg overflow-hidden w-[90%] max-w-3xl relative"
                        onClick={(e) => e.stopPropagation()} // prevent closing on video click
                    >
                        <button
                            className="absolute top-2 right-2 text-white text-xl"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>
                        <video
                            controls
                            autoPlay
                            className="w-full h-full"
                            onEnded={() => setIsOpen(false)} // ⬅️ close on end
                        >
                            <source src={currentVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Media;
