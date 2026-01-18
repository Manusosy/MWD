'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: "Linus O.",
        role: "CEO, Mariners For Action",
        text: "Mombasa Web Designers transformed our digital presence. Their attention to detail and technical expertise helped us scale our impact globally.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linus"
    },
    {
        name: "Shariff I.",
        role: "Director, Acef org",
        text: "Professional, creative, and highly efficient. They didn't just build a website; they built a tool that actively drives our mission forward.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shariff"
    },
    {
        name: "Abdul K.",
        role: "CEO, Altruistech, SL",
        text: "The speed and quality of development were exceptional. Their team understood our complex requirements and delivered a flawless solution.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdul"
    }
];

export default function Testimonials() {
    const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className={styles.section} id="testimonials">
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span>Client Stories</span>
                    </motion.div>
                    <h2 className={styles.title}>What our clients say</h2>
                    <p className={styles.subtitle}>Trusted by leaders and innovators across industries.</p>
                </div>

                <div className={styles.scrollerContainer}>
                    <div className={styles.scroller}>
                        {displayTestimonials.map((t, i) => (
                            <div key={i} className={styles.card}>
                                <div className={styles.stars}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="#ff7675" color="#ff7675" />
                                    ))}
                                </div>
                                <p className={styles.text}>&quot;{t.text}&quot;</p>
                                <div className={styles.user}>
                                    <img src={t.avatar} alt={t.name} className={styles.avatar} />
                                    <div className={styles.userInfo}>
                                        <h5>{t.name}</h5>
                                        <p>{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Review Badges Section */}
                <motion.div
                    className={styles.badgesWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className={styles.reviewBadge}>
                        <div className={styles.badgeLeft}>
                            <span className={styles.badgeHeading}>REVIEWED</span>
                            <h4 className={styles.clutchText}>Clutch</h4>
                        </div>
                        <div className={styles.badgeRight}>
                            <div className={styles.badgeStars}>
                                <Star size={18} fill="#e74c3c" color="#e74c3c" />
                                <Star size={18} fill="#e74c3c" color="#e74c3c" />
                                <Star size={18} fill="#e74c3c" color="#e74c3c" />
                                <Star size={18} fill="#e74c3c" color="#e74c3c" />
                                <div className={styles.halfStar}>
                                    <Star size={18} color="#e74c3c" />
                                </div>
                            </div>
                            <span className={styles.reviewCount}>50 REVIEWS</span>
                        </div>
                    </div>

                    <div className={styles.reviewBadge}>
                        <div className={styles.googleIcon}>
                            <svg viewBox="0 0 24 24" width="32" height="32">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                        <div className={styles.badgeRight}>
                            <div className={styles.badgeStars}>
                                <Star size={18} fill="#f1c40f" color="#f1c40f" />
                                <Star size={18} fill="#f1c40f" color="#f1c40f" />
                                <Star size={18} fill="#f1c40f" color="#f1c40f" />
                                <Star size={18} fill="#f1c40f" color="#f1c40f" />
                                <div className={styles.halfStar}>
                                    <Star size={18} color="#f1c40f" />
                                </div>
                            </div>
                            <span className={styles.reviewCount}>GOOGLE REVIEW <strong>(4.5)</strong></span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
