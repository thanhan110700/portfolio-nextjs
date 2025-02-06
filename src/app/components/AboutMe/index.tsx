

import Image from "next/image";
import { RefObject } from "react";
import { MdEmail } from "react-icons/md";
import { RxResume } from "react-icons/rx";
import ParallaxText from "../ParallaxText";
import Section from "../Section";
type AboutMeProp = {
    ref?: RefObject<HTMLDivElement>
}

const AboutMe = ({ ref }: AboutMeProp) => {
    return <div ref={ref}>
        <Section id="about" image='./images/galaxy.jpg'>
            <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-6 md:py-28 z-20 relative">
                <div className="grid gap-12 sm:gap-12 md:grid-cols-2">
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center rounded-md bg-green-700 px-3 py-1">
                            <div className="mr-1 h-2 w-2 rounded-full bg-black"></div>
                            <p className="text-sm">Available for work</p>
                        </div>
                        <p className="text-sm dark:text-gray-500 sm:text-xl">
                            Backend Developer
                        </p>
                        {/* Title */}
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl md:mb-8">
                            Lê Vũ Thành An
                        </h1>
                        <p className="text-sm dark:text-gray-500 sm:text-xl">
                            Consectetur adipiscing elit duis tristique sollicitudin nibh.
                            Augue mauris augue neque gravida in fermentum. Sapien pellentesque
                            habitant morbi tristique pellentesque.
                        </p>
                        <div className="mb-8 mt-8 h-px w-full bg-black"></div>
                        <div className="flex flex-col gap-4 font-semibold sm:flex-row">
                            <a
                                href="#"
                                className="flex items-center gap-4 rounded-md bg-black px-6 py-3 text-white"
                            >
                                <MdEmail />
                                <p>Email Me</p>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-4 rounded-md border border-solid border-black px-6 py-3"
                            >
                                <RxResume />
                                <p>Resume</p>
                            </a>
                        </div>
                    </div>
                    <div className="min-h-[400px] max-h-[600px] overflow-hidden rounded-md bg-gray-100">
                        <Image src="/images/avatar.jpeg" alt="avatar" className="w-full h-full rounded-md object-cover" width={2234} height={2964} />
                    </div>
                </div>
            </div>
                <div className="mx-auto absolute z-10 w-full bottom-3">
                    <ParallaxText baseVelocity={2}>&nbsp;&nbsp;&nbsp;Lê Vu Thanh An&nbsp;&nbsp;&nbsp;</ParallaxText>
                    <ParallaxText baseVelocity={-2}>Backend developer&nbsp;&nbsp;&nbsp;</ParallaxText>
                </div>
        </Section>

    </div>
};

export default AboutMe;