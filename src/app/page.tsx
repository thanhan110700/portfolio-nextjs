"use client";
import { sections } from "@/services/constant";
import { handleInitializeDarkMode, handleSetActiveSection } from "@/stores/Global";
import { useAtom } from "jotai";
import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import Header from "./components/Header";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Thumbnail from "./components/Thumbnail";
import Education from "./components/Education";

type SectionsComponentProp = { id: string, component: ReactNode }
const Home = () => {
  const [, setActiveSection] = useAtom(handleSetActiveSection);
  const [, initializeDarkMode] = useAtom(handleInitializeDarkMode);
  const sectionRef = useRef<(HTMLElement | null)[]>([]);
  useLayoutEffect(() => {
    initializeDarkMode();
  }, []);
  const sectionsComponent: SectionsComponentProp[] = [
    {
      id: 'about',
      component: <AboutMe />,
    },
    {
      id: 'skills',
      component: <Skill />
    },
    {
      id: 'experiences',
      component: <Experience />
    },
    {
      id: 'education',
      component: <Education />
    }
  ]

  const scrollToSection = (id: string) => {
    const target = sectionRef.current.find((el) => el?.id === id);
    const positionTopTarget = target?.offsetTop as number;
    if (target) {
      window.scrollTo({ behavior: "smooth", top: positionTopTarget - 50 });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach(({ section }) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-rubik transition-colors duration-300 dark:bg-black dark:text-white bg-orange-100 text-black">
      <Header scrollToSection={scrollToSection} />
      <Thumbnail />
      {sectionsComponent.map(({ id, component }: SectionsComponentProp, index) => (
        <div id={id} ref={(el: HTMLDivElement) => { sectionRef.current[index] = el }} key={id}>
          {component}
        </div>
      ))}
    </div>
  );
};

export default Home;