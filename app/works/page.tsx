import React from 'react'
import Image from "next/image";
import {AnimatedWrapper} from "@/app/components/Animations";

const projects = [
    {
        id:1,
        title: "Project-1",
        description:"Project description",
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


    }
]

const Works = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
            <AnimatedWrapper>
                {projects.map(project => (

                    <div key={project.id} className="flex flex-col gap-4">
                        <div className="flex gap-6 justify-center items-center">
                            {project.tools.map((tool,idx) => (
                                <div key={idx} className="hidden  md:flex justify-center items-center gap-2 ">
                                    <Image src={tool.imgSrc} alt="" width={30} height={30} className="object-contain" />
                                    <span className="text-xl font-bold">{tool.description}</span>
                                </div>
                            ))}

                        </div>
                        <div className="flex flex-col justify-center w-80 md:w-xl  lg:h-120 bg-bg rounded-2xl">
                            <Image src={project.imgSrc} alt="" width={576} height={320} className="object-contain " />
                            <div className="flex flex-col gap-4 p-8 h-full">
                                <h2 className="text-4xl font-bold">{project.title}</h2>
                                <p className="text-text-muted text-xl">{project.description}</p>
                            </div>
                        </div>
                    </div>

                ))}
            </AnimatedWrapper>


        </div>
    )
}

export default Works
