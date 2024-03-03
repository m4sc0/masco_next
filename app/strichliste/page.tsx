"use client";

import Background from "@/components/Background";
import { Breaker } from "@/components/Breaker";
import { Footer } from "@/components/Footer";
import FunctionComponent from "@/components/FunctionComponent";
import Header from "@/components/Header";
import MainText from "@/components/MainText";
import { StrichlisteSection } from "@/components/StrichlisteSection";
import { useState } from "react";

export default function Strichliste() {
    const [isInteractive, setIsInteractive] = useState(false);

    return (
        <>
            <FunctionComponent />
            <Background interactive={false} />

            <Header />
            <MainText title="Strichliste">
                <p>Eine Strichliste um zu tracken wer wie oft sorry gesagt hat</p>
            </MainText>

            <StrichlisteSection />

            <Breaker />

            <Footer isInteractive={isInteractive} setIsInteractive={setIsInteractive} />
        </>
    );
}