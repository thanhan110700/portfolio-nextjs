import { sectionStyle } from "@/services/constant"
import { globalState } from "@/stores/Global";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect } from "react";

export type SectionProps = {
    children: React.ReactNode;
    id: string;
    image: string;
}
const Section = ({ children, id, image }: SectionProps) => {
    const [state] = useAtom(globalState);
    const { darkMode } = state;
    const mainColor = useMotionValue(darkMode ? "#1e293b" : "#F87315");
    const subColor = useMotionValue(darkMode ? "#F87315" : "#1e293b");
    const layout = useMotionTemplate`radial-gradient(circle at 350% 300%, ${subColor} 10%, ${mainColor} 100%)`;

    useEffect(() => {
        mainColor.set(darkMode ? "#1e293b" : "#F87315");
        subColor.set(darkMode ? "#F87315" : "#1e293b");
    }, [darkMode]);

    return <section
        id={id}
        className={`${sectionStyle}`}
        style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            position: "relative",
            paddingBottom: "50px"
        }}
    >
        <motion.div style={{ backgroundImage: layout }} className={`absolute inset-0 dark:opacity-80 opacity-60`}></motion.div>
        {children}
    </section>

};

export default Section;