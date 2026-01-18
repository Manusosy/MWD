'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Bookmark } from 'lucide-react';
import Link from 'next/link';
import styles from './Blog.module.css';

const posts = [
    {
        id: 1,
        title: "Choosing the correct stack for your next venture",
        category: "Strategy",
        date: "Jan 15, 2026",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
        description: "Selecting the right technology stack is critical for scalability and performance. We break down the top choices for 2026."
    },
    {
        id: 2,
        title: "Never assume these security measures are enough",
        category: "Security",
        date: "Jan 12, 2026",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        description: "Cybersecurity is evolving. Learn why basic firewalls and SSL aren't enough to protect your users' sensitive data."
    },
    {
        id: 3,
        title: "Why you should choose wordpress when starting out",
        category: "Development",
        date: "Jan 10, 2026",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
        description: "WordPress remains the powerhouse of the web. Discover why it's the smartest choice for quick launches and easy management."
    }
];

export default function Blog() {
    return (
        <section className={styles.section} id="blog">
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Bookmark size={14} />
                        <span>Latest Insights</span>
                    </motion.div>
                    <h2 className={styles.title}>From our blog. Latest.</h2>
                    <p className={styles.subtitle}>
                        Stay ahead of the curve with our latest thoughts on technology, design, and digital growth.
                    </p>
                </div>

                <div className={styles.grid}>
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.imageBox}>
                                <div className={styles.category}>{post.category}</div>
                                <img src={post.image} alt={post.title} className={styles.image} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.date}>{post.date}</span>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.cardDesc}>{post.description}</p>
                                <Link href={`/blog/${post.id}`} className={styles.readMore}>
                                    Read Article <ChevronRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
