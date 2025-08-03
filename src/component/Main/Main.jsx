import React from 'react';
import fon from '../../assets/fonn.png';
import img from '../../assets/img.png';
import akk1 from '../../assets/akkount1.png';
import akk2 from '../../assets/akkount2.png';
import akk3 from '../../assets/akkount3.png';


const Main = () => {
    return (
        <div
            className="w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${fon})`,
            }}
        >
            <div className="flex flex-col lg:flex-row w-full h-full xl:px-28 items-center justify-between">

                {/* Text section */}
                <div className="py-16 px-5 lg:py-24 flex-1 flex flex-col items-start justify-center gap-6">
                    <div className='bg-white p-2 rounded-md w-[330px]'>
                        <p>Seeking Knowledge is an Obligation in Islam</p>
                    </div>
                    <div className='text-white text-4xl lg:text-6xl font-bold'>
                        <p className='max-w-[500px]'>Enhance Your Understanding of Islamic Ethics with Al-Muamalat</p>
                    </div>

                    <div className="flex items-center rounded-full w-fit py-6">
                        <div className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-sm">
                            STUDENTS' OPINION
                        </div>

                        <div className="flex items-center ml-[-12px]">
                            <img src={akk1} alt="Student 1" className="w-10 h-10 rounded-full border-2 border-white object-cover -ml-2" />
                            <img src={akk2} alt="Student 2" className="w-10 h-10 rounded-full border-2 border-white object-cover -ml-2" />
                            <img src={akk3} alt="Student 3" className="w-10 h-10 rounded-full border-2 border-white object-cover -ml-2" />
                        </div>

                        <div className="flex items-center space-x-1 text-white text-sm ml-3">
                            <div className="flex">
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

                {/* Image section */}
                <div className="flex-1 flex justify-center items-end">
                    <img
                        src={img}
                        alt="Image"
                        className="w-full max-w-[500px] lg:max-w-[600px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
