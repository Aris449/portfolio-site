"use client";
import gsap from "gsap";
import React, { useRef, ReactElement } from "react";
import { useGSAP } from "@gsap/react";

type AnimatedWrapperProps = {
    children: ReactElement | ReactElement[];
    stagger?: number;
    duration?: number;
    yPercent?: number;
    className?: string;
};

export const AnimatedWrapper = ({children, stagger = 0.2, duration = 0.7, yPercent = 100, className = "",}: AnimatedWrapperProps) => {
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        gsap.from(itemsRef.current, {
            yPercent,
            opacity: 0,
            duration,
            ease: "power3.out",
            stagger,
        });
    }, [stagger, duration, yPercent]);

    return (
        <div className={className}>
            {React.Children.map(children, (child, i) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<{ ref?: React.Ref<HTMLDivElement> }>, {
                        ref: (el: HTMLDivElement | null) => {
                            itemsRef.current[i] = el;
                        },
                    });
                }
                return child;
            })}
        </div>
    );
};

type hoverBtnProps = {
    children: ReactElement | ReactElement[];
    duration?: number;
    className?: string;
    y?:number;
}

export const HoverBtn = ({children, duration = 0.3, y =-3, className}: hoverBtnProps) => {
    const btnRef = useRef<HTMLDivElement | null>(null);

    const handleEnter = () => {
        gsap.to(btnRef.current, {
            y: y,
            duration: duration,
            ease: "power2.out",
        })
    }

    const handleLeave = () => {
        gsap.to(btnRef.current, {
            y: 0,
            duration: duration,
            ease: "power2.inOut",
        })
    }

    return (
        <div ref={btnRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={className} >
            {children}
        </div>
    )
}


