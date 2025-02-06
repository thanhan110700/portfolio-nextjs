import { motion } from "framer-motion";
import Section from "../Section";
import Image from "next/image";

type ExperienceProps = {
    ref?: React.RefObject<HTMLDivElement>
}

const Experience = ({ ref }: ExperienceProps) => {
    const experiences = [
        {
            year: "2022-2025",
            title: "Backend Developer",
            company: "Kozocom Vietnam",
            description: "I'm working on a project that helps people to find a job easily"
        },
        {
            year: "2022",
            title: "Intern",
            company: "Kozocom Vietnam",
            description: "Developed and maintained multiple client projects using MERN stack"
        },
    ];

    return <div ref={ref}>
        <Section id="experiences" image="./images/planet.jpeg">
            <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 z-20">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Experience Timeline</h2>
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <div className="absolute w-1 md:w-2 bg-black dark:bg-white h-full left-1/2 transform -translate-x-1/2"></div>
                        {
                            experiences.map(({ year, description, title, company }) => (
                                <div key={year} className="mb-20 mt-20 flex items-center w-full">
                                    <div className="w-1/2 text-right pr-5 md:pr-12">
                                        <motion.div
                                            className="inline-block bg-gray-100 dark:bg-black px-4 py-2 rounded-lg cursor-pointer bg-opacity-40 dark:bg-opacity-40"
                                            whileHover={{
                                                scale: [null, 1.1, 1.2],
                                                transition: {
                                                    duration: 0.5,
                                                    times: [0, 0.6, 1],
                                                    ease: ["easeInOut", "easeOut"],
                                                },
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeOut",
                                            }}
                                        >
                                            <h5 className="text-lg md:text-2xl font-semibold text-black dark:text-white">{year}</h5>
                                        </motion.div>
                                    </div>
                                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black dark:bg-white"></div>
                                    <motion.div className="w-1/2 pl-5 md:pl-12" whileHover={{
                                        scale: [null, 1.1],
                                        transition: {
                                            duration: 0.5,
                                            times: [0, 0.6],
                                            ease: ["easeInOut", "easeOut"],
                                        },
                                    }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut",
                                        }}>
                                        <div className="flex flex-row items-center gap-6 rounded border-solid dark:bg-gray-900 bg-gray-100 dark:bg-opacity-60 bg-opacity-60 px-6 py-4 transition hover:bg-opacity-60 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black">
                                            <div className="sm:flex hidden h-10 w-10 sm:w-20 sm:h-20 sm:flex-none flex-col items-center justify-center rounded-full bg-[#161823]">
                                                <Image
                                                    src="/images/kozocom-logo.png"
                                                    alt="Get Started Icon 4"
                                                    className="inline-block"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className="flex flex-col items-start gap-2.5 ">
                                                <h5 className="text-base font-bold md:text-xl">{company}</h5>
                                                <p className=" dark:text-gray-500 text-gray-600 text-md">
                                                    {title}
                                                </p>
                                                <p className=" dark:text-gray-400 text-gray-800">
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Section>
    </div>
};

export default Experience;