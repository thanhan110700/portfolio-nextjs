import { TechnologyCard } from "@/app/components/TechnologyCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ElementType } from "react";
import {
  FaDocker,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

type SkillProp = {
  name: string;
  description: string;
  icon: ElementType;
  color: string;
};

const Skills = () => {
  const skills: SkillProp[] = [
    {
      name: "Laravel",
      description:
        "A robust PHP framework for web artisans, offering elegant syntax and powerful features for modern web development.",
      icon: FaLaravel,
      color: "text-red-500",
    },
    {
      name: "ReactJS",
      description:
        "A JavaScript library for building user interfaces with component-based architecture and virtual DOM.",
      icon: FaReact,
      color: "text-blue-400",
    },
    {
      name: "Docker",
      description:
        "A platform for developing, shipping, and running applications in containers for consistent environments.",
      icon: FaDocker,
      color: "text-blue-600",
    },
    {
      name: "Python",
      description:
        "A versatile programming language known for its simplicity and extensive library support.",
      icon: FaPython,
      color: "text-yellow-500",
    },
    {
      name: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
      icon: FaNodeJs,
      color: "text-green-500",
    },
    {
      name: "Vue.js",
      description:
        "A progressive JavaScript framework for building modern user interfaces with reactive data binding. ",
      icon: FaVuejs,
      color: "text-emerald-500",
    },
    {
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapidly building custom user interfaces with minimal CSS.",
      icon: SiTailwindcss,
      color: "text-cyan-500",
    },
    {
      name: "MongoDB",
      description:
        "A NoSQL database that provides high performance, high availability, and easy scalability.",
      icon: SiMongodb,
      color: "text-green-600",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Skills
        </h2>
        <div className="max-w-3xl mx-auto relative">
          <div className="flex items-center justify-center ">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {skills.map((skill) => (
                  <CarouselItem key={skill.name} className="basis-1/2">
                    <div className="p-1">
                      <TechnologyCard
                        name={skill.name}
                        description={skill.description}
                        Icon={skill.icon}
                        color={skill.color}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
