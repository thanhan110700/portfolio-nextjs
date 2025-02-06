"use client";
import { motion } from "framer-motion";
import { RefObject } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import Section from "../Section";
import SkillCard from "./components/SkillCard";

type SkillProps = {
    ref?: RefObject<HTMLDivElement>
}

const Skill = ({ ref }: SkillProps) => {
    const skillsData = [
        {
            name: "ReactJS",
            description: "A JavaScript library for building user interfaces",
            icon: FaReact,
            color: "text-blue-500",
            percentage: 90
        },
        {
            name: "NextJS",
            description: "The React Framework for Production",
            icon: SiNextdotjs,
            color: "text-gray-800",
            percentage: 85
        },
        {
            name: "TailwindCSS",
            description: "A utility-first CSS framework",
            icon: SiTailwindcss,
            color: "text-cyan-500",
            percentage: 95
        },
        {
            name: "NodeJS",
            description: "JavaScript runtime built on Chrome's V8 engine",
            icon: FaNodeJs,
            color: "text-green-500",
            percentage: 88
        },
        {
            name: "JavaScript",
            description: "Dynamic programming language",
            icon: SiJavascript,
            color: "text-yellow-400",
            percentage: 92
        },
        {
            name: "TypeScript",
            description: "Typed superset of JavaScript",
            icon: SiTypescript,
            color: "text-blue-600",
            percentage: 87
        }
    ];

    return <div ref={ref}>
        <Section id="skills" image='./images/tech.jpeg'>
            <div className="min-h-screen mx-auto z-10 pt-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-extrabold text-slate-300 sm:text-4xl"
                        >
                            Programming Skills
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-4 text-lg text-slate-300"
                        >
                            Explore our technical expertise and programming capabilities
                        </motion.p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {skillsData.map((skill, index) => (
                            <SkillCard
                                key={index}
                                name={skill.name}
                                description={skill.description}
                                icon={skill.icon}
                                color={skill.color}
                                percentage={skill.percentage}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    </div>
};

export default Skill;