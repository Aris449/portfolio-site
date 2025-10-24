import React  from 'react';
import {AnimatedWrapper} from "@/app/components/Animations";

const cards = [
    {
        id: 1,
        title: "Dev. Tools",
        content: ["HTML","CSS", "JS/TS","Tailwind","React", "Next.js", "Express", "Gsap"],
        styles: "box-1 gap-8 "

    },
    {
        id: 2,
        title: "Languages ",
        content: ["English","Ukrainian", "Russian"],
        styles: "box-2 gap-2 "
    },
    {
        id: 3,
        title: "Other interests",
        content: ["English","Ukrainian", "Russian","Russian"],
        styles: "box-3 gap-6 "
    },
    {
        id: 4,
        title: "Education",
        content: ["English","Ukrainian", "Russian"],
        styles: "box-4 gap-2 "
    },


]

const About = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-14rem)]">

            <AnimatedWrapper className="grid-container w-80 md:w-[658px] " >
                {cards.map((card) => (
                    <div key={card.id} className={`flex flex-col justify-center items-center grid-area: ${card.styles} p-6 bg-bg w-full rounded-2xl text-center`}>
                        <h2 className="text-3xl font-bold ">{card.title}</h2>
                        <div className={`${card.content.length > 4 ? "grid grid-cols-2 gap-x-8 gap-y-4": "flex flex-col gap-x-8 gap-y-4"}`}>
                            {card.content.map((content, idx) => (
                                <span key={idx} className="p-2 px-4 bg-bg-light rounded-2xl">{content}</span>
                            ))}
                        </div>
                    </div>
                ))}

            </AnimatedWrapper>



        </div>
    )
}



export default About;
