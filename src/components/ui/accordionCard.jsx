import React from "react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionCard = ({ value, title, content }) => {
    return (
        <Accordion type="single" collapsible className="w-full" defaultValue={value}>
            <AccordionItem value={value}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    {content.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionCard
