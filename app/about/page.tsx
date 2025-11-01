import React  from 'react';
import {AnimatedWrapper} from "@/app/components/Animations";

const cards = [
    {
        id: 1,
        title: "Dev. Tools",
        content: ["JS","TS","Tailwind","React", "Next.js", "Express", "Gsap", "Python"],
        images:["/js-icon.png","/typescript-icon.png", "/tailwind-icon.png","/react-icon.png","/nextJs-icon.png","/express-icon.png","/gsap-icon.png","/python-icon.png"],
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
        styles: "box-3 gap-8 "
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

            <AnimatedWrapper className="grid-container my-10 w-80 md:w-[658px] " >
                {cards.map((card) => (
                    <div key={card.id} className={`flex flex-col justify-center items-center grid-area: ${card.styles} p-6 bg-bg w-full rounded-2xl text-center border  border-theme`}>
                        <h2 className="text-3xl font-bold "> {card.title}</h2>
                        <div className={`${card.content.length > 4 ? "grid grid-cols-2 gap-x-8 gap-y-4": "flex flex-col gap-x-8 gap-y-4"} `}>
                            {card.content.map((content, idx) => (
                                // <div key={idx} className="flex gap-2">
                                //     {card.images?.[idx] && (
                                //         <Image src={card.images[idx]} alt="" width={30} height={30} className="object-contain bg-bg-light rounded-2xl " />
                                //     )}
                                    <span key={idx}  className="p-2 px-4 bg-bg-light font-semibold rounded-2xl text-text-muted border border-theme">{content}</span>
                                // </div>
                            ))}
                        </div>
                    </div>
                ))}

            </AnimatedWrapper>



        </div>
    )
}



export default About;
