"use client";

import Background from "@/components/Background";
import { Breaker } from "@/components/Breaker";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import MainText from "@/components/MainText";
import ProjectSection from "@/components/ProjectSection";
import { SandboxSection } from "@/components/SandboxSection";
import { useState } from "react";


export default function Sandbox() {
    const [isInteractive, setIsInteractive] = useState(false);

    return (
        <>
            {/* <div className="w-full h-40 flex justify-center items-center text-3xl">Under construction!</div> */}
            <Background interactive={false} />
            <Header />
            <MainText title="Sandbox Hub">
                <div className="text-sm mt-2">A few small Sandbox projects I created because I was bored - Have fun!</div>
            </MainText>
            <SandboxSection />
            <Breaker />

            <Footer isInteractive={isInteractive} setIsInteractive={setIsInteractive}/>
        </>
    )
}