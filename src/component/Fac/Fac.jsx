import React from 'react'
import AccordionCard from "@/components/ui/AccordionCard"

const Fac = () => {
    return (
        <div className='w-full text-center px-8 md:px-32'>
            <h1 className="text-4xl font-bold mb-8"> Frequently asked questions</h1>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <p className="py-4 max-w-2xl">
                    If you have any further questions, please contact us
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AccordionCard
                    value="item-1"
                    title="Product Information"
                    content={[
                        "Our flagship product combines cutting-edge technology...",
                        "Key features include advanced processing capabilities...",
                    ]}
                />

                <AccordionCard
                    value="item-2"
                    title="Shipping Details"
                    content={[
                        "We offer worldwide shipping through trusted courier partners.",
                        "All orders are carefully packaged and fully insured.",
                    ]}
                />
                <AccordionCard
                    value="item-3"
                    title="Return Policy"
                    content={[
                        "We offer a 30-day return policy.",
                        "Returns include free shipping and refunds within 48 hours.",
                    ]}
                />
                <AccordionCard
                    value="item-4"
                    title="FAQs"
                    content={[
                        "FAQs cover usage, warranty, and troubleshooting.",
                        "Still need help? Contact our support team.",
                    ]}
                />
                <AccordionCard
                    value="item-4"
                    title="FAQs"
                    content={[
                        "FAQs cover usage, warranty, and troubleshooting.",
                        "Still need help? Contact our support team.",
                    ]}
                />
            </div>
        </div>
    )
}

export default Fac
