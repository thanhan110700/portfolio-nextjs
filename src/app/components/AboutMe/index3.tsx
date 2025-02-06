import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { MouseEvent, RefObject, useRef } from "react";
import ParallaxText from "../ParallaxText";
import Section from "../Section";
type AboutMeProp = {
    ref?: RefObject<HTMLDivElement>
}

const AboutMe = ({ ref }: AboutMeProp) => {
    const avatarRef = useRef<HTMLImageElement>(null);
    const infoX = useMotionValue(200);
    const infoY = useMotionValue(200);

    function handleMouse(event: MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();

        infoX.set(event.clientX - rect.left);
        infoY.set(event.clientY - rect.top);
    }

    const rotateX = useTransform(infoY, [0, 400], [10, -10]);
    const rotateY = useTransform(infoX, [0, 400], [-10, 10]);

    return <div ref={ref}>
        <Section id="about" image='./images/galaxy.jpg'>
            <motion.div
                className="w-[500px] h-[550px] max-w-[90%] absolute right-5 z-20 p-5 rounded-md shadow-sm"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                whileDrag={{ rotate: 12 }}
                onMouseMove={handleMouse}
            >
                <motion.div className="w-full h-full rounded-md bg-slate-100 p-1" style={{
                    rotateX,
                    rotateY
                }}>
                    <Image ref={avatarRef} src="/images/avatar.jpeg" alt="avatar" className="w-full h-full rounded-md object-cover" width={2234} height={2964} />
                </motion.div>
            </motion.div>
            <div className="mx-auto relative z-10">
                <ParallaxText baseVelocity={2}>&nbsp;&nbsp;&nbsp;Lê Vu Thanh An&nbsp;&nbsp;&nbsp;</ParallaxText>
                <ParallaxText baseVelocity={-2}>Backend developer&nbsp;&nbsp;&nbsp;</ParallaxText>
            </div>
        </Section >
    </div>
};

export default AboutMe;