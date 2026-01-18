'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, Box } from 'lucide-react';
import styles from './Process.module.css';

const steps = [
    {
        number: '01',
        title: 'Discovery & Strategy',
        description: "We dive deep into your business goals to define a roadmap for success.",
        points: ['Goal Alignment', 'Market Research', 'UX Strategy']
    },
    {
        number: '02',
        title: 'UI/UX Design',
        description: 'Creating intuitive and visually stunning interfaces tailored to your brand.',
        points: ['Wireframing', 'High-Fidelity UI', 'Prototyping']
    },
    {
        number: '03',
        title: 'Core Development',
        description: 'Building robust, scalable, and high-performance solutions with clean code.',
        points: ['Frontend Arch', 'Backend Systems', 'CMS Integration']
    },
    {
        number: '04',
        title: 'Testing & Optimization',
        description: 'Rigorous quality assurance to ensure every pixel and function is perfect.',
        points: ['QA Testing', 'Performance Tuning', 'SEO Optimization']
    },
    {
        number: '05',
        title: 'Launch & Support',
        description: 'Seamless deployment followed by proactive monitoring and maintenance.',
        points: ['Live Rollout', 'Post-Launch Audit', 'Ongoing Support']
    }
];

export default function Process() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(33.333);
    const [maxIndex, setMaxIndex] = useState(steps.length - 3);

    // Responsive slide width detection
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlideWidth(100);
                setMaxIndex(steps.length - 1);
            } else if (window.innerWidth <= 1024) {
                setSlideWidth(50);
                setMaxIndex(steps.length - 2);
            } else {
                setSlideWidth(33.333);
                setMaxIndex(steps.length - 3);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-reset logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [maxIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className={styles.section} id="process">
            <div className={styles.backgroundGrid}></div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Box size={16} />
                        <span>Our Process</span>
                    </motion.div>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        How we work. Our process
                    </motion.h2>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        We simplify complex challenges with a streamlined, five-step methodology designed for scale.
                    </motion.p>
                </div>

                <div className={styles.sliderContainer}>
                    <div className={styles.sliderOverflow}>
                        <motion.div
                            className={styles.slidesWrapper}
                            animate={{ x: `-${currentIndex * slideWidth}%` }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                                mass: 0.5
                            }}
                        >
                            {steps.map((step, index) => (
                                <div key={index} className={styles.slide}>
                                    <div className={styles.slideInternal}>
                                        <div className={styles.stepMarker}>
                                            <span className={styles.stepLabel}>Step-{step.number} :</span>
                                            <div className={styles.markerCircle}>
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <div className={styles.lineConnector}></div>
                                        </div>

                                        <div className={styles.card}>
                                            <h3 className={styles.cardTitle}>{step.title}</h3>
                                            <p className={styles.cardDescription}>{step.description}</p>

                                            <ul className={styles.pointsList}>
                                                {step.points.map((point, pIndex) => (
                                                    <li key={pIndex} className={styles.pointItem}>
                                                        <div className={styles.pointCheck}>
                                                            <Check className="w-3 h-3" strokeWidth={3} />
                                                        </div>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation */}
                    <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide}>
                        <ChevronLeft />
                    </button>
                    <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide}>
                        <ChevronRight />
                    </button>

                </div>
            </div>

            <div className={styles.floatingDoc}>
                <div className={styles.docInner}>
                    <div className={styles.docLine} style={{ width: '60%', backgroundColor: '#2ecc71' }}></div>
                    <div className={styles.docLine}></div>
                    <div className={styles.docLine}></div>
                </div>
            </div>
        </section>
    );
}
