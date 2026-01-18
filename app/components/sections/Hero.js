'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ArrowRight, Sparkles } from 'lucide-react';
import TechStackWheel from '../visuals/TechStackWheel';
import styles from './Hero.module.css';

const slides = [
    {
        parts: [
            { text: "We are the " },
            { text: "Best Web Design Company", highlight: true },
            { text: " in Mombasa" }
        ],
        desc: "From corporate, businesses, organizations to personal websites and apps, we are the go-to agency.",
        buttons: [
            { text: "Get in touch", href: "#contact", primary: true, icon: true },
            { text: "Explore projects", href: "#features", primary: false, icon: false }
        ],
        imageLight: "/images/hero-slide-1.png",
        imageDark: "/images/hero-slide-1-dark.png"
    },
    {
        parts: [
            { text: "Looking to develop a " },
            { text: "website for your business?", highlight: true }
        ],
        desc: "We offer bespoke services from wireframes and custom e-commerce solutions to design and development tailored to your specific needs.",
        buttons: [
            { text: "Contact Us", href: "#contact", primary: true, icon: true }
        ],
        imageLight: "/images/hero-slide-2.png",
        imageDark: "/images/hero-slide-2-dark.png"
    },
    {
        parts: [
            { text: "We offer the " },
            { text: "best web app development", highlight: true },
            { text: " services in 2026!" }
        ],
        desc: "Building scalable, high-performance web applications using the latest technologies to drive your business forward.",
        buttons: [
            { text: "Start Project", href: "#contact", primary: true, icon: true }
        ],
        imageLight: "/images/hero-slide-3.png",
        imageDark: "/images/hero-slide-3-dark.png"
    }
];

const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2, // Faster start
            staggerChildren: 0.04,
        },
    },
};

const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 35000); // 35 seconds interval as requested
        return () => clearInterval(timer);
    }, []);

    // Determine current image based on theme and slide
    // Fallback to light version if dark theme is active but slide only has specific dark logic handled in data
    // Simplified logic: Check theme, use appropriate prop
    const currentImage = mounted && resolvedTheme === 'dark'
        ? slides[currentSlide].imageDark
        : slides[currentSlide].imageLight; // Default to light image if theme not resolved yet

    return (
        <section className={styles.section}>
            <div className={styles.backgroundGlow} />

            <div className={styles.container}>
                {/* Left Column: Text & Content */}
                <div className={styles.textContent}>
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Sparkles size={16} />
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0, x: 5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Welcome to Mombasa Web Designers
                        </motion.span>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4 }}
                            style={{ width: '100%' }}
                        >
                            <motion.h1
                                className={styles.title}
                                variants={sentenceVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {slides[currentSlide].parts.map((part, i) => (
                                    <span key={i} className={part.highlight ? styles.highlight : ''}>
                                        {part.text.split("").map((char, index) => (
                                            <motion.span key={`${i}-${index}`} variants={letterVariants}>
                                                {char}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </motion.h1>

                            <motion.p
                                className={styles.subtitle}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                {slides[currentSlide].desc}
                            </motion.p>

                            <motion.div
                                className={styles.ctaGroup}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                            >
                                {slides[currentSlide].buttons.map((btn, i) => (
                                    <a
                                        key={i}
                                        href={btn.href}
                                        className={btn.primary ? styles.primaryButton : styles.secondaryButton}
                                        style={!btn.primary ? {
                                            padding: '14px 28px',
                                            borderRadius: '999px',
                                            fontWeight: 600,
                                            fontSize: '1rem',
                                            background: 'var(--bg-subtle)',
                                            color: 'var(--text-main)',
                                            border: '1px solid var(--border-color)'
                                        } : {}}
                                    >
                                        {btn.text}
                                        {btn.icon && <ArrowRight size={18} style={{ display: 'inline', marginLeft: 8 }} />}
                                    </a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Column: Visuals */}
                <div className={styles.visualContent}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            className={styles.mockupContainer}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {currentSlide === 2 ? (
                                <TechStackWheel />
                            ) : (
                                <div className={styles.mockup}>
                                    {mounted && (
                                        <img
                                            src={currentImage}
                                            alt="Visual"
                                            style={{ width: '100%', height: 'auto', display: 'block' }}
                                        />
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
