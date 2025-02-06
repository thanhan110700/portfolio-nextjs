import { motion } from "framer-motion";
import { ElementType } from "react";
import CircularProgress from "./CircleProgessBar";
type SkillCardProps = {
    name: string;
    description: string;
    icon: ElementType;
    color: string;
    percentage: number;
}
const SkillCard = ({ name, description, icon: Icon, color, percentage }: SkillCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="text-black dark:text-slate-300 backdrop-blur-3xl backdrop-opacity-90 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center space-y-4 relative"
        >
            <Icon className={`text-5xl ${color}`} />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-center text-sm">{description}</p>
            <CircularProgress progress={percentage} />
        </motion.div>
    );
}

export default SkillCard