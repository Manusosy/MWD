'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Calendar, Globe, Monitor, Users, X, Mail } from 'lucide-react';
import styles from './StatsCTA.module.css';

const stats = [
    {
        icon: <Calendar size={28} />,
        value: 7,
        suffix: " Years",
        label: "Year of experience"
    },
    {
        icon: <Globe size={28} />,
        value: 1375,
        suffix: "",
        label: "Domains registered"
    },
    {
        icon: <Monitor size={28} />,
        value: 812,
        suffix: "",
        label: "Websites designed"
    },
    {
        icon: <Users size={28} />,
        value: 1200,
        suffix: "+",
        label: "Happy Clients"
    }
];

function StatCounter({ value, suffix }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            animate(count, value, { duration: 2, ease: "easeOut" });
        }
    }, [inView, count, value]);

    return <motion.h3 className={styles.statValue} ref={ref}>{rounded}</motion.h3>;
}

export default function StatsCTA() {
    const [showModal, setShowModal] = useState(false);

    const iconVariants = {
        idle: { scale: 1 },
        animate: {
            scale: [1, 1.1, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className={styles.section}>
            {/* Background with Black Overlay */}
            <div className={styles.background}>
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Ready to Dominate the Digital Space?
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Don't just get online—own the web. From killer websites to ads that actually convert,
                        Mombasa Web Designers is your launchpad to the future of business.
                    </motion.p>
                    <motion.button
                        className={styles.ctaButton}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowModal(true)}
                    >
                        Let's Build Something Brilliant
                    </motion.button>
                </div>

                {/* Statistics Bar */}
                <motion.div
                    className={styles.statsBar}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className={styles.backgroundGrid}></div>
                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                                <div className={styles.iconHex}>
                                    <motion.div
                                        className={styles.iconInner}
                                        variants={iconVariants}
                                        animate="animate"
                                    >
                                        {stat.icon}
                                    </motion.div>
                                    <svg className={styles.hexSvg} viewBox="0 0 100 100">
                                        <motion.path
                                            d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
                                        />
                                    </svg>
                                </div>
                                <div className={styles.statInfo}>
                                    <StatCounter value={stat.value} suffix={stat.suffix} />
                                    <p className={styles.statLabel}>{stat.label}</p>
                                </div>
                                {index < stats.length - 1 && <div className={styles.divider}></div>}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* CTA Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
                        <motion.div
                            className={styles.modalContent}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setShowModal(false)}>
                                <X size={20} />
                            </button>
                            <h3 className={styles.modalTitle}>How would you like to proceed?</h3>
                            <p className={styles.modalSubtitle}>Select an option below to start your journey with us.</p>

                            <div className={styles.modalOptions}>
                                <a href="https://calendly.com/your-office" target="_blank" rel="noopener noreferrer" className={styles.optionCard}>
                                    <div className={styles.optionIcon}>
                                        <Calendar size={24} />
                                    </div>
                                    <div className={styles.optionInfo}>
                                        <span className={styles.optionLabel}>Schedule a Meeting</span>
                                        <span className={styles.optionAction}>Book via Calendly</span>
                                    </div>
                                </a>

                                <a href="#contact" className={styles.optionCard} onClick={() => setShowModal(false)}>
                                    <div className={styles.optionIcon}>
                                        <Mail size={24} />
                                    </div>
                                    <div className={styles.optionInfo}>
                                        <span className={styles.optionLabel}>Send a Message</span>
                                        <span className={styles.optionAction}>Get in Touch</span>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
