import React from 'react'
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';

const Services = () => {
    return (
        <div className='text-center  p-4 sm:px-12 md:px-4 xl:px-20'>
            <h1 className='text-2xl font-bold'>Our services</h1>
            <div className='w-full flex flex-col items-center justify-center gap-4 sm:px-10 '>
                <p className='py-2 xl:px-72'>Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 py-6 gap-6 md:grid-cols-3 md:py-4'>

                {/* Card 1 */}
                <div className='flex flex-col justify-between h-full bg-[#DEEAFF] px-8 py-4 rounded-xl md:px-4 xl:px-6'>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon1} alt="" />
                        <p className='font-bold text-[18px] text-start '>Islamic Fund Management</p>
                    </div>
                    <p className='text-center text-[15px] py-4'>We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.</p>
                    <div className='mt-auto'>
                        <button className='bg-[#152032] text-white w-full p-2 rounded-xl hover:scale-105 transition duration-300 transform will-change-transform'>Learn more</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='flex flex-col justify-between h-full bg-[#D5F6ED] px-8 py-4 rounded-xl md:px-4'>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon2} alt="" />
                        <p className='font-bold text-[18px] text-start'>International Relations</p>
                    </div>
                    <p className='text-center text-[15px] py-4'>We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.</p>
                    <div className='mt-auto'>
                        <button className='bg-[#152032] text-white w-full p-2 rounded-xl hover:scale-105 transition duration-300 transform will-change-transform'>Learn more</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='flex flex-col justify-between h-full bg-[#FBE2F4] px-8 py-4 rounded-xl md:px-4'>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon3} alt="" />
                        <p className='font-bold text-[18px] text-start'>Education and Training</p>
                    </div>
                    <p className='text-center text-[15px] py-4'>We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.</p>
                    <div className='mt-auto'>
                        <button className='bg-[#152032] text-white w-full p-2 rounded-xl hover:scale-105 transition duration-300 transform will-change-transform'>Learn more</button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='flex flex-col justify-between h-full bg-[#E2DBF9] px-8 py-4 rounded-xl md:px-4'>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon4} alt="" />
                        <p className='font-bold text-[18px] text-start'>For Islamic Banks</p>
                    </div>
                    <p className='text-center text-[15px] py-4'>We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.</p>
                    <div className='mt-auto'>
                        <button className='bg-[#152032] text-white w-full p-2 rounded-xl hover:scale-105 transition duration-300 transform will-change-transform'>Learn more</button>
                    </div>
                </div>

                {/* Card 5 */}
                <div className='flex flex-col justify-between h-full bg-[#EBEFF3] px-8 py-4 rounded-xl md:px-4'>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon5} alt="" />
                        <p className='font-bold text-[18px] text-start'>Islamic Capital Market</p>
                    </div>
                    <p className='text-center text-[15px] py-4'>We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.</p>
                    <div className='mt-auto'>
                        <button className='bg-[#152032] text-white w-full p-2 rounded-xl hover:scale-105 transition duration-300 transform will-change-transform'>Learn more</button>
                    </div>
                </div>

                {/* Card 6 */}
                <div className='flex flex-col justify-between h-full bg-[#FFEDB6] px-8 py-4 rounded-xl md:px-4'>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon6} alt="" />
                        <p className='font-bold text-[18px] text-start'>Shariah Compliance Audit</p>
                    </div>
                    <p className='text-center text-[15px] py-4'>We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.</p>
                    <div className='mt-auto'>
                        <button className='bg-[#152032] text-white w-full p-2 rounded-xl hover:scale-105 transition duration-300 transform will-change-transform'>Learn more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
