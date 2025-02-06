import { motion } from "framer-motion";

export default function CircularProgress({ progress }: { progress: number }) {
    const radius = 20;
    const strokeWidth = 3;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * normalizedRadius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="absolute top-0 right-5 flex items-center justify-center">
            <div className="absolute text-xs text-white">{progress}%</div>
            <svg
                width={radius * 2}
                height={radius * 2}
                className="block mx-auto"
                style={{ transform: "rotate(-90deg)" }}
            >
                <circle
                    cx={radius}
                    cy={radius}
                    r={normalizedRadius}
                    stroke="#e6e6e6"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                <motion.circle
                    cx={radius}
                    cy={radius}
                    r={normalizedRadius}
                    stroke="#4f46e5"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}
