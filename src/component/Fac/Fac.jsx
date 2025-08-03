import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`rounded-lg mb-4 overflow-hidden ${isOpen ? 'border-[2px] border-[#42978F]' : 'border border-gray-300'
                }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
                <span className="font-semibold">{title}</span>
                <span className="text-xl">{isOpen ? '×' : '+'}</span>
            </button>

            {isOpen && (
                <div className="p-4 text-sm bg-white">
                    {content}
                </div>
            )}
        </div>
    );
};

const AccordionLayout = () => {
    const accordionsLeft = [
        { title: 'Will I receive lifetime access to the courses?', content: '"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively."' },
        { title: 'Will I receive lifetime access to the courses?', content: '"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.".' },
    ];

    const accordionsRight = [
        { title: 'Can I use the materials for community teaching?', content: '"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively."' },
        { title: 'Is there a free trial for the courses?', content: '"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively."' },
        { title: 'Who can benefit from these courses?', content: '"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively."' },
    ];

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
                {accordionsLeft.map((item, index) => (
                    <AccordionItem key={index} title={item.title} content={item.content} />
                ))}
            </div>
            <div className="md:w-1/2">
                {accordionsRight.map((item, index) => (
                    <AccordionItem key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    );
};

const Fac = () => {
    return (
        <div className="w-full text-center px-8 md:px-32 py-10">
            <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <p className="py-4 max-w-2xl text-gray-600">
                    If you have any further questions, please contact us
                </p>
            </div>

            <AccordionLayout />
        </div>
    );
};

export default Fac;
