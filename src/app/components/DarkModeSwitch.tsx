import { globalState, handleSetDarkMode } from "@/stores/Global";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";


const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
    duration: 2
};

const DarkModeSwitch = () => {
    const [state] = useAtom(globalState);
    const [, setDarkMode] = useAtom(handleSetDarkMode);
    const { darkMode } = state;
    return <motion.div
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/90"
        layout
        transition={spring}
    >
        <motion.div whileTap={{ rotate: 90 }} onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
            {darkMode ? (<RiSunFill className="h-6 w-6 text-yellow-300" />) : (<RiMoonClearFill className="h-6 w-6 text-slate-200" />)}
        </motion.div>

    </motion.div>
};

export default DarkModeSwitch;
