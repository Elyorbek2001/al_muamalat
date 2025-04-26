import React from 'react';
import fon from '../../assets/fon.png';
import img from '../../assets/img.png';

const Main = () => {
    return (
        <div
            className="w-full h-screen bg-cover bg-center flex xl:px-28"
            style={{
                backgroundImage: `url(${fon})`,
                clipPath: 'inset(0px 0px 10% 0px)', // pastki qismini 10% ga qirqish
            }}
        >
            <div className="flex text-start">
                <div className=" p-5 rounded-md w-[50%]">
                    <div className='bg-white p-2 rounded-md min-w-[10px]'>
                        <p>Seeking Knowledge is an Obligation in Islam</p>
                    </div>
                    <div className='text-white text-4xl font-bold mt-5'>
                        <p>Enhance Your Understanding of Islamic Ethics with Al-Muamalat</p>
                    </div>
                </div>
                <div className='pl-20'>
                    <img src={img} alt="" />
                </div>



            </div>
        </div>
    );
};

export default Main;
