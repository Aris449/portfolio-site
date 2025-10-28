import React from 'react'
import Link from "next/link";
import {AnimatedWrapper} from "@/app/components/Animations";

const Contacts = () => {
    return (
        <AnimatedWrapper >

        <div className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
            <div className="flex flex-col justify-center md:w-xl lg:h-80 bg-bg rounded-2xl border mx-8  border-theme">
                <div className="flex flex-col justify-center m-20 gap-4">
                    <h1 className="text-4xl py-2 md:py-4 font-bold">Email</h1>
                    <p className="text-xl text-text-muted py-2">The easiest way to contact me is through the Email</p>
                    <Link href="#" className="flex justify-center items-center bg-bg-accent p-4 my-1 md:my-4 rounded-2xl w-40 text-xl font-bold border  border-theme">Contact</Link>
                </div>
            </div>
        </div>
        </AnimatedWrapper>
    )
}

export default Contacts;