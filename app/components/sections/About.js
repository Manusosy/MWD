'use client';

import { motion } from 'framer-motion';
import { Folder, Briefcase, Trophy, Users, Box, Phone, ChevronRight } from 'lucide-react';
import styles from './About.module.css';

const stats = [
    { icon: Folder, number: "200+", text: "We deliver great work always" },
    { icon: Briefcase, number: "10+", text: "Experience you can count on" },
    { icon: Trophy, number: "20+", text: "Award-Winning Work, Trusted Results" },
    { icon: Users, number: "5K+", text: "We have happy Clients worldwide" },
];

export default function About() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Box size={16} />
                        <span>About Us</span>
                    </motion.div>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Who We Are - MWD
                    </motion.h2>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Mombasa Web Designers (MWD) is a professional digital agency based in Mombasa, specializing in high-performance web design, custom software development, data-driven digital marketing, and robust cyber security. We empower businesses with cutting-edge technology and innovative strategies to dominate the digital landscape.
                    </motion.p>
                </div>

                {/* Split Content */}
                <div className={styles.contentSplit}>

                    {/* Left Box: Image */}
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className={styles.imageContainer}>
                            <img
                                src="/images/about.jpg"
                                alt="Mombasa Web Designers Team"
                                className={styles.aboutImage}
                            />
                        </div>
                    </motion.div>

                    {/* Right Box: Apperaing Stats Grid */}
                    <div className={styles.statsContent}>
                        <div className={styles.statsGrid}>
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;

                                // Expansion Logic:
                                // We want them to feel like they are "exploding" or "expanding" out from a central point.
                                // The gap is 24px.
                                // TL (0): needs to move Down-Right to be "center". So start at x: 50, y: 50
                                // TR (1): needs to move Down-Left. Start x: -50, y: 50
                                // BL (2): needs to move Up-Right. Start x: 50, y: -50
                                // BR (3): needs to move Up-Left. Start x: -50, y: -50

                                let initialPos = { x: 0, y: 0, opacity: 0, scale: 0.8 };
                                const spreadDistance = 60; // How "clumped" they start

                                if (index === 0) initialPos = { x: spreadDistance, y: spreadDistance, opacity: 0, scale: 0.8 };
                                if (index === 1) initialPos = { x: -spreadDistance, y: spreadDistance, opacity: 0, scale: 0.8 };
                                if (index === 2) initialPos = { x: spreadDistance, y: -spreadDistance, opacity: 0, scale: 0.8 };
                                if (index === 3) initialPos = { x: -spreadDistance, y: -spreadDistance, opacity: 0, scale: 0.8 };

                                return (
                                    <motion.div
                                        key={index}
                                        className={styles.statCard}
                                        initial={initialPos}
                                        whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view
                                        transition={{
                                            type: "spring",
                                            damping: 15,
                                            stiffness: 80,
                                            delay: 0.1 // Small delay to let user see them start moving
                                        }}
                                    >
                                        <div className={styles.statHeader}>
                                            <div className={styles.statIconWrapper}>
                                                <Icon size={32} strokeWidth={1.5} />
                                            </div>
                                            <span className={styles.statNumber}>{stat.number}</span>
                                        </div>
                                        {/* Dotted line could go here if requested, but clean is better */}
                                        <div style={{ borderTop: '1px dashed var(--border-color)', width: '100%', opacity: 0.5 }} />
                                        <p className={styles.statText}>{stat.text}</p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            className={styles.ctaGroup}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <a href="/about" className={styles.primaryButton}>
                                <span>More About Us</span>
                                <ChevronRight size={18} className={styles.buttonIcon} />
                            </a>

                            <div className={styles.phoneGroup}>
                                <div className={styles.phoneIcon}>
                                    <Phone size={24} />
                                </div>
                                <div className={styles.phoneLabel}>
                                    <span className={styles.getQuote}>Get free Quote</span>
                                    {/* Typing animation for phone number */}
                                    <a href="tel:+254105374738" className={styles.phoneNumber} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {"+254 105 374 738".split("").map((char, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.05,
                                                    delay: 0.8 + i * 0.05, // Starts after parent delay (0.5) + some lead time (0.3)
                                                    ease: "easeIn"
                                                }}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
