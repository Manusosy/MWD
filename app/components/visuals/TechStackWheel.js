'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import {
    SiNextdotjs,
    SiReact,
    SiPython,
    SiLaravel,
    SiVuedotjs,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiDocker,
    SiAmazonwebservices,
    SiTailwindcss,
    SiGraphql
} from 'react-icons/si';
import styles from './TechStackWheel.module.css';

const logos = [
    { name: "Next.js", color: "#000000", darkColor: "#ffffff", icon: SiNextdotjs },
    { name: "React", color: "#61DAFB", icon: SiReact },
    { name: "Python", color: "#3776AB", icon: SiPython },
    { name: "Laravel", color: "#FF2D20", icon: SiLaravel },
    { name: "Vue", color: "#4FC08D", icon: SiVuedotjs },
    { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
    { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
    { name: "Node.js", color: "#339933", icon: SiNodedotjs },
    { name: "Docker", color: "#2496ED", icon: SiDocker },
    { name: "AWS", color: "#FF9900", icon: SiAmazonwebservices },
    { name: "Tailwind", color: "#06B6D4", icon: SiTailwindcss },
    { name: "GraphQL", color: "#E10098", icon: SiGraphql },
];

export default function TechStackWheel() {
    return (
        <div className={styles.wheelContainer}>
            {/* Central Hub */}
            <motion.div
                className={styles.centerHub}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
            >
                <Code2 color="var(--primary)" size={48} />
            </motion.div>

            {/* Orbiting Icons */}
            <motion.div
                className={styles.orbit}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
                {logos.map((item, index) => {
                    const angle = (index / logos.length) * 360;
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className={styles.iconWrapper}
                            style={{
                                transform: `rotate(${angle}deg) translate(220px) rotate(-${angle}deg)`,
                            }}
                        >
                            <motion.div
                                style={{ color: item.color, display: 'flex' }}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                                title={item.name}
                            >
                                <Icon size={32} />
                            </motion.div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}
