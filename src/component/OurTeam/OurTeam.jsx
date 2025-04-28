import React from 'react';
import ahmed from '../../assets/ahmed.png';
import telegram from '../../assets/telegram.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Navigation va Pagination modullarini import qildik
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Pagination CSS ham kerak

const OurTeam = () => {
    return (
        <div className="w-full text-center px-8 md:px-32">
            <h1 className="text-4xl font-bold mb-8">Our Expert Team</h1>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <p className="py-4 max-w-2xl">
                    Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.
                </p>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }} // Nuqtachalar (pagination) qo'shildi
                loop
                modules={[Navigation, Pagination]} // Modullar ro'yxatiga Navigation va Pagination
                className="mt-8"
            >
                {/* 1 - slayd */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 bg-[#D2E6E4] px-6 md:px-12 rounded-xl max-w-4xl mx-auto">
                        <div>
                            <img src={ahmed} alt="Dr. Mezbah Uddin Ahmed" className="w-52 h-64 object-cover" />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-4 text-left max-w-sm">
                            <h4 className="font-normal text-2xl">Dr. Mezbah Uddin Ahmed</h4>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <div className="flex gap-4 py-2">
                                <img src={telegram} alt="Telegram" className="w-6 h-6" />
                                <img src={facebook} alt="Facebook" className="w-6 h-6" />
                                <img src={instagram} alt="Instagram" className="w-6 h-6" />
                                <img src={twitter} alt="Twitter" className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* 2 - slayd */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 bg-[#D2E6E4] px-6 md:px-12 rounded-xl max-w-4xl mx-auto">
                        <div>
                            <img src={ahmed} alt="Dr. Mezbah Uddin Ahmed" className="w-52 h-64 object-cover" />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-4 text-left max-w-sm">
                            <h4 className="font-normal text-2xl">Dr. Mezbah Uddin Ahmed</h4>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <div className="flex gap-4 py-2">
                                <img src={telegram} alt="Telegram" className="w-6 h-6" />
                                <img src={facebook} alt="Facebook" className="w-6 h-6" />
                                <img src={instagram} alt="Instagram" className="w-6 h-6" />
                                <img src={twitter} alt="Twitter" className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* 3 - slayd */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 bg-[#D2E6E4] px-6 md:px-12 rounded-xl max-w-4xl mx-auto">
                        <div>
                            <img src={ahmed} alt="Dr. Mezbah Uddin Ahmed" className="w-52 h-64 object-cover" />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-4 text-left max-w-sm">
                            <h4 className="font-normal text-2xl">Dr. Mezbah Uddin Ahmed</h4>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <div className="flex gap-4 py-2">
                                <img src={telegram} alt="Telegram" className="w-6 h-6" />
                                <img src={facebook} alt="Facebook" className="w-6 h-6" />
                                <img src={instagram} alt="Instagram" className="w-6 h-6" />
                                <img src={twitter} alt="Twitter" className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default OurTeam;
