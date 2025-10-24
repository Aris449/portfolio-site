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

export const AnimatedWrapper = ({
                                    children,
                                    stagger = 0.2,
                                    duration = 0.7,
                                    yPercent = 100,
                                    className = "",
                                }: AnimatedWrapperProps) => {
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
