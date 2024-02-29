import Image from "next/image";
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

export default function Home() {
    return (
        <>
            <Background />
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
            <Footer />
        </>
    );
}

export const notifyInfo = (text: string) => {
    toast.info(text, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

export const notifyError = (text: string) => {
    toast.error(text, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
}