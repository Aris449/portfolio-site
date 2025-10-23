import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
            <div className="grid-container w-80 md:w-[658px] " >

                <div className="flex flex-col grid-area: box-1 gap-8 p-10 bg-bg w-80 rounded-2xl ">
                    <h2 className="text-3xl font-bold ">Dev. Tools</h2>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JS</span>
                        <span>TS</span>
                        <span>React</span>
                        <span>Next.js</span>
                    </div>
                </div>

                <div className="flex flex-col grid-area: box-2 gap-8 p-10 bg-bg w-80 rounded-2xl h-full">
                    <h2 className="text-3xl font-bold ">Dev. Tools</h2>
                    <div className="">
                        <span>HTML/CSS</span>
                        <span>JS/TS</span>
                        <span>React</span>
                        <span>Next.js</span>
                    </div>
                </div>

                <div className="flex flex-col grid-area: box-3 gap-8 p-10 bg-bg w-80 rounded-2xl h-full">
                    <h2 className="text-3xl font-bold ">Dev. Tools</h2>

                </div>
                <div className="flex flex-col grid-area: box-4 gap-8 p-10 bg-bg w-80 rounded-2xl h-full">
                    <h2 className="text-3xl font-bold ">Dev. Tools</h2>

                </div>


            </div>

        </div>
    )
}



export default About;
