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
}

export const HoverBtn = ({children, duration = 0.3, className}: hoverBtnProps) => {
    const btnRef = useRef<HTMLDivElement | null>(null);

    const handleEnter = () => {
        gsap.to(btnRef.current, {
            y: -3,
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

export default function MagneticButton({children, strength = 150,}: { children: React.ReactNode; strength?: number; }) {
    const btnRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const btn = btnRef.current;
        if (!btn) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            const btnX = rect.left + rect.width / 2;
            const btnY = rect.top + rect.height / 2;

            const distX = e.clientX - btnX;
            const distY = e.clientY - btnY;

            const distance = Math.sqrt(distX * distX + distY * distY);

            if (distance < strength) {
                gsap.to(btn, {
                    x: distX * 0.3,
                    y: distY * 0.3,
                    duration: 0.3,
                    ease: "power3.out",
                });
            } else {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.4)",
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [strength]);

    return (
        <div
            ref={btnRef}
            className="magnetic-btn inline-block"
            style={{ display: "inline-block" }}
        >
            {children}
        </div>
    );
}

