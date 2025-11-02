"use client";
import React, {  useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import {HoverBtn} from "@/app/components/Animations";

gsap.registerPlugin(Flip);

const links = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Works", href: "/works" },
    { id: 4, title: "Contacts", href: "/contacts" },
];

export default function Navbar() {
    const activeRef = useRef<HTMLDivElement | null>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    const setRef = (el: HTMLDivElement | null, i: number) => {
        itemsRef.current[i] = el;
    };

    const handleClick = (i: number) => {
        const active = activeRef.current;
        const item = itemsRef.current[i];
        if (!active || !item) return;

        const state = Flip.getState(active);
        item.appendChild(active);

        Flip.from(state, {
            duration: 0.5,
            absolute: true,
            ease: "elastic.out(1,0.5)",
        });
    };

    return (
        <nav className="flex items-center justify-center h-28">
            <div className="flex items-center justify-center gap-4">
                {links.map((link, i) => (
                    <HoverBtn   key={link.id}>

                    <div ref={(el) => setRef(el, i)} className="relative" onClick={() => handleClick(i)}>
                        <Link href={link.href} className="p-3 md:p-4 rounded-3xl text-base font-bold border border-theme">
                            {link.title}
                        </Link>

                        {i === 0 && (
                            <div ref={activeRef} className=" absolute left-0 -bottom-6 h-[6px] w-full bg-bg-accent rounded-full"/>
                        )}
                    </div>
                    </HoverBtn>
                ))}
            </div>
        </nav>
    );
}
