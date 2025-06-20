import React from 'react';
import img1 from '../../assets/clients/img1.png';
import img2 from '../../assets/clients/img2.png';
import img3 from '../../assets/clients/img3.png';
import img4 from '../../assets/clients/img4.png';

const Clients = () => {
    const images = [img1, img2, img3, img4];

    return (
        <div className="overflow-hidden bg-white py-16 px-8 md:px-32 text-center">
            <h1 className="text-4xl font-bold mb-8">Our Clients</h1>

            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-scroll gap-8">
                    {[...images, ...images].map((img, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center rounded-lg mx-5 shrink-0 w-[130px] h-[100px] sm:w-[150px] sm:h-[100px] md:w-[200px] md:h-[150px] lg:w-[250px] lg:h-[200px] transition-transform hover:scale-105"
                        >
                            <img src={img} alt={`client-${idx}`} className="max-h-[80%] max-w-[80%] object-contain" />
                        </div>
                    ))}
                </div>

                <div className="flex w-max animate-scrollReverse gap-8">
                    {[...images, ...images].map((img, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center rounded-lg mx-5 shrink-0 w-[130px] h-[100px] sm:w-[150px] sm:h-[100px] md:w-[200px] md:h-[150px] lg:w-[250px] lg:h-[200px] transition-transform hover:scale-105"
                        >
                            <img src={img} alt={`client-${idx}`} className="max-h-[80%] max-w-[80%] object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;
