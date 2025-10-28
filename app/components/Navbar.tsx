import React from 'react';
import Link from "next/link";
import {HoverBtn} from "@/app/components/Animations";

const links = [
    {
        id:1,
        title: "Home",
        href:"/",
    },
    {
        id:2,
        title: "About",
        href:"/about",
    },
    {
        id:3,
        title: "Works",
        href:"/works",
    },
    {
        id:4,
        title: "Contacts",
        href:"/contacts",
    },
]

function Navbar() {
    return (
        <nav className="flex items-center justify-center h-28">

            <div className="flex items-center justify-center gap-4">
                {links.map((link) => (
                    <HoverBtn key={link.id}>

                    <Link  href={link.href} className="flex justify-center items-center p-3 md:p-4 bg-bg rounded-3xl text-base font-bold border  border-theme btn-3d<">{link.title}</Link>
                    </HoverBtn>
                ))}

            </div>
        </nav>
    );
}

export default Navbar;