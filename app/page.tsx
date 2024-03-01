"use client";

import Image from "next/legacy/image";
import Header from "@/components/Header";
import MainText from "@/components/MainText";
import Skills from "@/components/Skills";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Background from "@/components/Background";
import { Breaker } from "@/components/Breaker";
import { Footer } from "@/components/Footer";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import FunctionComponent from "@/components/FunctionComponent";
import { useState } from "react";

export default function Home() {
    const [isInteractive, setIsInteractive] = useState(false);

    return (
        <>
            <FunctionComponent />
            <Background interactive={isInteractive} />
            <Header />
            <ToastContainer />
            <MainText title="Hello, I'm Philip">
                <Skills />
            </MainText>
            <Breaker />
            <AboutSection />
            <Breaker />
            <ProjectSection />
            <Breaker />
            <ContactSection className="mb-20" />
            <Footer isInteractive={isInteractive} setIsInteractive={setIsInteractive}/>
        </>
    );
}

