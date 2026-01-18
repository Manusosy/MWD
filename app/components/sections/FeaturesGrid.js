'use client';

import { motion } from 'framer-motion';
import { Lock, Database, Zap, Smartphone, Layout, MousePointer } from 'lucide-react';
import styles from './FeaturesGrid.module.css';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function FeaturesGrid() {
    return (
        <section className={styles.section} id="features">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Build premium sites faster</h2>
                    <p className={styles.subtitle}>Everything you need to build a world-class website.
                        Authentication, database, payments, everything.</p>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Card 1 */}
                    <motion.div className={styles.card} variants={item}>
                        <div className={styles.iconBox}><Lock size={24} /></div>
                        <h3 className={styles.cardTitle}>Authentication</h3>
                        <p className={styles.cardDesc}>
                            Secure user authentication with social logins, magic links, and more. Pre-configured.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div className={styles.card} variants={item}>
                        <div className={styles.iconBox}><Database size={24} /></div>
                        <h3 className={styles.cardTitle}>Database</h3>
                        <p className={styles.cardDesc}>
                            Postgres database setup with Prisma ORM. Type-safe database access out of the box.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div className={styles.card} variants={item}>
                        <div className={styles.iconBox}><Zap size={24} /></div>
                        <h3 className={styles.cardTitle}>Real-time</h3>
                        <p className={styles.cardDesc}>
                            Real-time events to keep your users updated. Perfect for notifications and chats.
                        </p>
                    </motion.div>

                    {/* Wide Card */}
                    <motion.div className={`${styles.card} ${styles.wideCard}`} style={{ gridColumn: 'span 3' }} variants={item}>
                        <div className={styles.content}>
                            <div className={styles.iconBox}><Smartphone size={24} /></div>
                            <h3 className={styles.cardTitle}>Fully Responsive</h3>
                            <p className={styles.cardDesc}>
                                Designed to look beautiful on any device. Mobile, tablet, desktop - we&apos;ve got you covered.
                                All components are built with responsiveness in mind.
                            </p>
                        </div>
                        <div className={styles.visual}>
                            <Layout size={64} strokeWidth={1} />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
