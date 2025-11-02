import React from 'react'
import Image from "next/image";
import {AnimatedWrapper} from "@/app/components/Animations";

const projects = [
    {
        id:1,
        title: "Portfolio site",
        description:"This website, simple portfolio powered by nextJs and animated using GSAP",
        imgSrc:"/portfolio-img.png",
        tools: [
            {
                description:"Next.js",
                imgSrc:"/nextJs-icon.png",
            },
            {
                description:"TS",
                imgSrc:"/typescript-icon.png",
            },
            {
                description:"tailwindCSS",
                imgSrc:"/tailwind-icon.png",
            },
            {
                description:"Gsap",
                imgSrc:"/gsap-icon.png",
            }
        ]


    },

]

const Works = () => {
    return (
            <AnimatedWrapper className="flex  flex-wrap works-container justify-center items-center gap-8 my-4 lg:m-0 min-h-[calc(100vh-14rem)]">
                {projects.map(project => (

                    <div key={project.id} className="flex flex-col gap-4">
                        <div className="hidden md:flex gap-6 justify-center items-center bg-bg rounded-full p-2 border  border-theme">
                            {project.tools.map((tool,idx) => (
                                <div key={idx} className="flex justify-center items-center gap-2 ">
                                    <Image src={tool.imgSrc} alt="" width={30} height={30} className="object-contain" />
                                    <span className="text-xl font-bold text-text-muted ">{tool.description}</span>
                                </div>
                            ))}

                        </div>
                        <div className="flex flex-col  justify-center w-80 md:w-xl lg:h-120 bg-bg rounded-2xl border  border-theme">
                            <Image src={project.imgSrc} alt="" width={576} height={320} className="object-contain rounded-2xl" />
                            <div className="flex flex-col gap-4 p-4 h-full">
                                <h2 className="text-4xl font-bold">{project.title}</h2>
                                <p className="text-text-muted text-xl">{project.description}</p>
                            </div>
                        </div>
                    </div>

                ))}
            </AnimatedWrapper>


    )
}

export default Works
