"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Update markers or effects that depend on scroll on click/nav
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
                e.preventDefault();
                const targetId = this.getAttribute("href")?.slice(1);
                if (targetId) {
                    const target = document.getElementById(targetId);
                    if (target) {
                        lenis.scrollTo(target);
                    }
                }
            });
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
