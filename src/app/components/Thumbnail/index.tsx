"use client";

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { EmblaOptionsType } from "embla-carousel";
import Section from "../Section";

const Thumbnail = () => {
    const options: EmblaOptionsType = { loop: true }

    const [emblaRef,] = useEmblaCarousel(options, [Autoplay()])
    const listImage = [
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
        "/images/avatar.jpeg",
    ];

    return <Section image="/images/planet-1.jpg">
        <div className="pb-5 z-10">
            <div className="mx-auto w-full max-w-7xl overflow-hidden px-5 py-10 md:px-10 lg:px-20 lg:py-20">
                <div className="flex flex-col items-center gap-y-16 py-10 sm:gap-y-20 lg:py-20">
                    <div className="max-w-3xl">
                        <h1 className="m-5 text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">The Website You Want Without The Dev Time.</h1>
                        <p className="mx-auto mb-6 text-center text-sm text-[#636262] sm:px-8 sm:text-xl md:px-24 lg:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
                    </div>
                </div>
            </div>
            <div className="relative w-full overflow-hidden" ref={emblaRef}>
                <div
                    className={`flex flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)]`}

                >
                    {listImage.map((image, index) => (
                        <div key={index} className="w-1/3 sm:w-1/4 p-2 flex-shrink-0">
                            <Image key={index} src={image} alt="" className="w-full sm:h-48 h-32 object-cover rounded-lg shadow-md" width={2234} height={2964} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
};

export default Thumbnail;
