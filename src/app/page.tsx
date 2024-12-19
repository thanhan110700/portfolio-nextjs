"use client";
import Header from "@/app/components/Header";
import AboutMe from "@/app/components/AboutMe";
import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Project from "@/app/components/Project";
import Interest from "@/app/components/Interest";
import Footer from "@/app/components/Footer";
import HomeScreen from "@/app/components/Home";
import { useEffect, useState } from "react";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMounted, setIsMounted] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offset = element.offsetTop;
          const height = element.offsetHeight - 200;
          if (scrollPosition >= offset && scrollPosition < offset + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <></>;
  }

  return (
    <div className="min-h-screen scroll-smooth "  >
      <div className="fixed inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("/images/background.jpeg")` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10">
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        <main className="max-w-6xl mx-auto px-4 py-20 space-y-20 z-10">
          <HomeScreen />
          <AboutMe />
          <Education />
          <Skills />
          <Experience />
          <Project />
          <Interest />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
