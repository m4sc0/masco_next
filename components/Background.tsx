"use client";

import Image from "next/legacy/image";
import { useEffect, useState } from 'react';
import { notifyInfo } from "./FunctionComponent";

interface BackgroundProps {
    interactive: boolean;
}

const Background: React.FC<BackgroundProps> = ({
    interactive
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [colorIndex, setColorIndex] = useState(0);
    const [cheats, setCheats] = useState(false);
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
    let konamiIndex = 0;

    useEffect(() => {
        if (interactive) {
            const updateMousePosition = (event: any) => {
                setMousePosition({ x: event.clientX, y: event.clientY });
            };
    
            window.addEventListener('mousemove', updateMousePosition);
    
            return () => {
                window.removeEventListener('mousemove', updateMousePosition);
            };
        }
    }, [interactive]);

    useEffect(() => {
        const checkKonamiCode = (event: any) => {
            if (event.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    notifyInfo('Konami Cheat activated');
                    setCheats(true);
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        };

        document.addEventListener('keydown', checkKonamiCode);

        return () => {
            document.removeEventListener('keydown', checkKonamiCode);
        };
    }, []);

    useEffect(() => {
        const canvas = document.getElementById('background-playground') as HTMLCanvasElement | null;
        const ctx = canvas?.getContext('2d');

        if (canvas && ctx) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            let frameId: number;

            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                if (cheats) {
                    const hue = colorIndex % 360;
                    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
                    setColorIndex(colorIndex + 0.025);
                } else {
                    ctx.fillStyle = 'hsl(0, 0%, 25%)';
                }

                if (interactive) {
                    ctx.beginPath();
                    ctx.arc(mousePosition.x, mousePosition.y, 100, 0, 2 * Math.PI);
                } else {
                    ctx.beginPath();
                    ctx.rect(0, 0, canvas.width, canvas.height);
                }

                ctx.fill();

                frameId = requestAnimationFrame(draw);
            }

            draw();

            return () => {
                cancelAnimationFrame(frameId);
            };
        }
    }, [mousePosition, colorIndex, cheats, interactive]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div className="bg-overlay"></div>
            <Image src={'/images/background.png'} alt="Background image" layout="fill" objectFit="cover" className="fixed background" priority />
            <div className="canvas-overlay"></div>
            <canvas id="background-playground"></canvas>
        </div>
    );
}

export default Background;
