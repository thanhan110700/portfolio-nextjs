import { sections } from "@/services/constant";
import { globalState } from "@/stores/Global";
import { motion, useScroll, useSpring } from "framer-motion";
import { useAtom } from "jotai";
import DarkModeSwitch from "../DarkModeSwitch";
type HeaderProps = {
    scrollToSection: (id: string) => void;
}
const Header = ({ scrollToSection }: HeaderProps) => {
    const { scrollYProgress } = useScroll();
    const [state] = useAtom(globalState);
    const { activeSection } = state;
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    return <header className="fixed w-full top-0 z-50 bg-orange-400 dark:bg-slate-800 backdrop-blur-md dark:bg-opacity-60 bg-opacity-50 shadow-lg">
        <motion.div
            id="scroll-indicator"
            style={{
                scaleX,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 5,
                originX: 0,
                backgroundColor: "#ff0088",
            }}
        />
        <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold"
                >
                    Thanh An
                </motion.div>
                <div className="flex items-center space-x-6 text-white">
                    <DarkModeSwitch />
                    {sections.map(({ section, icon: Icon }) => (<motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        key={section}
                        className={`cursor-pointer flex items-center gap-1 capitalize ${activeSection == section ? "text-[#7fe7dc]" : ""}`}
                        onClick={() => scrollToSection(section)}
                    >
                        <Icon className="text-xl md:hidden block" />
                        <div className="md:block hidden">
                            {section}
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
        </nav>
    </header>
};

export default Header;