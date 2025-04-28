import React from 'react';
import fon from '../../assets/fon.png';
import img from '../../assets/img.png';
import akk1 from '../../assets/akkount1.png';
import akk2 from '../../assets/akkount2.png';
import akk3 from '../../assets/akkount3.png';
import kal from '../../assets/kal.png';

const Main = () => {
    return (
        <div
            className="w-full h-screen bg-cover bg-center flex xl:px-28"
            style={{
                backgroundImage: `url(${fon})`,
                clipPath: 'inset(0px 0px 10% 0px)', // pastki qismini 10% ga qirqish
            }}
        >
            <div className="flex w-full h-full relative">
                <div className="absolute top-14 left-[800px] w-full h-full flex  z-0">
                    <img src={img} alt="Image" className="w-auto h-auto max-w-[600px] max-h-[600px]" />
                </div>
                <div className=" py-24 px-5 rounded-md gap-4 flex flex-col items-start justify-center z-10">
                    <div className='bg-white p-2 rounded-md w-[330px]'>
                        <p>Seeking Knowledge is an Obligation in Islam</p>
                    </div>
                    <div className='text-white text-6xl font-bold mt-5'>
                        <p className='w-[100%]'>Enhance Your Understanding of Islamic Ethics with Al-Muamalat</p>
                    </div>

                    <div className="flex items-center rounded-full  w-fit py-10 relative">
                        <div className="bg-orange-500 text-white px-6 py-4 rounded-xl font-semibold text-sm relative z-10">
                            STUDENTS' OPINION
                        </div>

                        <div className="flex items-center ml-[-12px] z-20">
                            <img src={akk1} alt="Student 1" className="w-10 h-10 rounded-full border-2 border-white object-cover -ml-2" />
                            <img src={akk2} alt="Student 2" className="w-10 h-10 rounded-full border-2 border-white object-cover -ml-2" />
                            <img src={akk3} alt="Student 3" className="w-10 h-10 rounded-full border-2 border-white object-cover -ml-2" />
                        </div>

                        <div className="flex items-center space-x-1 text-white text-sm ml-3">
                            <div class="flex">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>☆</span>
                            </div>
                            <span className="text-xs">(10k+ Reviews)</span>
                        </div>
                    </div>

                </div>


                <div className="relative mr-[300px] items-center rounded-xl p-4 bg-[#CCEAE7] h-[80px] w-[500px] mt-[70px]"> {/* Bu yerda margin-left yordamida elementni orqaga suramiz */}
                    <div className="flex gap-4 h-[50px]">
                        <img src={kal} alt="" className="" /> {/* Rasmning o'lchamini ko'paytirish */}
                        <div className='px-5'>
                            <h4 className="text-lg font-semibold">250K</h4>
                            <p className="text-gray-600 text-sm whitespace-nowrap ">Assisted Student</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Main;
