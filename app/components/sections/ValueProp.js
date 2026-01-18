'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Database, Activity } from 'lucide-react';
import styles from './ValueProp.module.css';

export default function ValueProp() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--primary)', fontWeight: 600 }}>
                        <Zap size={20} fill="currentColor" />
                        <span>Speed & Efficiency</span>
                    </div>

                    <h2 className={styles.headline}>
                        Save days of development time using our Agency Template
                    </h2>

                    <p className={styles.subheadline}>
                        Don&apos;t waste time building the basics from scratch. We have done the heavy lifting
                        for you so you can focus on scaling your business and serving your clients.
                    </p>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <h4>50+</h4>
                            <p>Components</p>
                        </div>
                        <div className={styles.statItem}>
                            <h4>100+</h4>
                            <p>Integrations</p>
                        </div>
                        <div className={styles.statItem}>
                            <h4>5+</h4>
                            <p>Landing Pages</p>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content (Floating Tags) */}
                <div className={styles.visualSide}>
                    <FloatTag text="Authentication" icon={Shield} color="#4F46E5" delay={0} x={-100} y={-80} />
                    <FloatTag text="Database" icon={Database} color="#059669" delay={1} x={80} y={-40} />
                    <FloatTag text="Real-time" icon={Activity} color="#D946EF" delay={2} x={-60} y={80} />
                </div>

            </div>
        </section>
    );
}

function FloatTag({ text, icon: Icon, color, delay, x, y }) {
    return (
        <motion.div
            className={styles.cloudTag}
            style={{ x, y }}
            animate={{
                y: [y, y - 10, y],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        >
            <div style={{ padding: 6, borderRadius: '50%', background: `${color}20` }}>
                <Icon size={18} color={color} />
            </div>
            {text}
        </motion.div>
    )
}
