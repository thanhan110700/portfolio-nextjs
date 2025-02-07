import { motion } from 'framer-motion';
import { useState } from 'react';

type TooltipProps = {
    children: React.ReactNode;
    message: string;
}
const Tooltip = ({ children, message }: TooltipProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return <div
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {children}
        {isHovered && (
            <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: -5 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full mx-auto transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap shadow-md"
            >
                {message}
            </motion.div>
        )}
    </div>
}

export default Tooltip;

