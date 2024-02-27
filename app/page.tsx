import Image from "next/image";
import Header from "@/components/Header";
import MainText from "@/components/MainText";
import Skills from "@/components/Skills";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <MainText title="Hello, I'm Philip">
        <Skills />
      </MainText>
      <div className="my-20"></div>
      <AboutSection />
      <div className="my-20"></div>
      <ProjectSection />
      <div className="my-20"></div>
      <ContactSection className="mb-[17vh]"/>
    </>
  );
}
