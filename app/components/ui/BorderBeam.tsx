"use client";

import React from "react";

interface BorderBeamProps {
    size?: number;
    duration?: number;
    anchor?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
    className?: string;
    borderWidth?: number;
    borderRadius?: number;
    opacity?: number;
}

export const BorderBeam = ({
    size = 200,
    duration = 15,
    anchor = 90,
    colorFrom = "#70b488",
    colorTo = "transparent",
    delay = 0,
    className = "",
    borderWidth = 1.5,
    borderRadius = 12,
    opacity = 0.7,
}: BorderBeamProps) => {
    return (
        <div
            style={
                {
                    "--size": `${size}px`,
                    "--duration": `${duration}s`,
                    "--anchor": `${anchor}`,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                    "--delay": `-${delay}s`,
                    "--border-width": `${borderWidth}px`,
                    "--border-radius": `${borderRadius}px`,
                    "--opacity": opacity,
                } as React.CSSProperties
            }
            className={`absolute inset-0 rounded-[inherit] [border:var(--border-width)_solid_transparent] [mask-clip:padding-box,border-box] mask-exclude mask-[linear-gradient(white,white),linear-gradient(white,white)] pointer-events-none ${className}`}>
            <div
                className="absolute [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:inset(0_round_var(--border-radius))] animate-border-beam blur-[2px]"
                style={{
                    width: 'var(--size)',
                    aspectRatio: '1/1',
                    background: 'linear-gradient(to left, var(--color-from), transparent, transparent)',
                    opacity: 'var(--opacity)',
                }}/>
        </div>
    );
};
