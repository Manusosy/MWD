'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ArrowUpRight, LayoutGrid, List } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        id: "01",
        title: "Domains & Web Hosting",
        desc: "Secure your digital address with fast, reliable Mombasa-based hosting. We offer 99.9% uptime, local support, and scalable packages to grow with your business.",
        image: "/services/service-domain-hosting.png",
    },
    {
        id: "02",
        title: "Website Design",
        desc: "Convert visitors into customers with stunning, mobile-first designs. We focus on high-end aesthetics and user experience (UX) tailored to your brand's unique goals.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "03",
        title: "Ecommerce Website Design",
        desc: "Sell anywhere, anytime. We build high-performing online stores with M-PESA integration, secure checkouts, and easy product management systems.",
        image: "/services/service-ecommerce.png",
    },
    {
        id: "04",
        title: "Shopify Store Design",
        desc: "Leverage the world's leading e-commerce platform. Our experts build custom Shopify themes and optimized stores designed specifically to maximize your ROI.",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "05",
        title: "Website Maintenance",
        desc: "Stay ahead of the curve with zero downtime. From security patches to content updates, we handle the tech so you can focus on running your business.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "06",
        title: "Web Content Creation",
        desc: "Engage your audience with professional copywriting and SEO-optimized content. We write for humans and rank for Google to drive organic growth.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "07",
        title: "Web Development",
        desc: "Powering complex digital solutions. We use modern frameworks like Next.js to build custom, secure, and lightning-fast web applications.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "08",
        title: "App Development",
        desc: "Your ideas in your users' pockets. We develop sleek, native-feel mobile applications for iOS and Android that provide exceptional mobile experiences.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "09",
        title: "Branding & Identity",
        desc: "Build a lasting impression. We create iconic logos and visual design systems that define your brand and command authority in your marketplace.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    }
];

export default function Services() {
    const [view, setView] = useState('list'); // 'list' or 'grid'
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <section className={styles.section} onMouseMove={handleMouseMove}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <motion.svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={styles.badgeIcon}
                        >
                            <motion.path
                                d="M12 2L2 7l10 5 10-5-10-5z"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            />
                            <motion.path
                                d="M2 17l10 5 10-5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                            />
                            <motion.path
                                d="M2 12l10 5 10-5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
                            />
                        </motion.svg>
                        <span>Our Services</span>
                    </motion.div>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Your Needs, Our Expertise
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Your Vision, Our Expertise — Together, we bring ideas to life with tailored solutions that deliver real results. Let's build something amazing.
                    </motion.p>

                    <motion.div
                        className={styles.viewToggle}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <button
                            className={`${styles.toggleBtn} ${view === 'list' ? styles.toggleBtnActive : ''}`}
                            onClick={() => setView('list')}
                        >
                            <List size={18} />
                            <span>List View</span>
                        </button>
                        <button
                            className={`${styles.toggleBtn} ${view === 'grid' ? styles.toggleBtnActive : ''}`}
                            onClick={() => setView('grid')}
                        >
                            <LayoutGrid size={18} />
                            <span>Grid View</span>
                        </button>
                    </motion.div>
                </div>

                <LayoutGroup>
                    <AnimatePresence mode="wait">
                        {view === 'list' ? (
                            <motion.div
                                key="list"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className={styles.list}
                            >
                                {services.map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        layout
                                        className={styles.serviceItem}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div className={styles.itemContent}>
                                            <div className={styles.itemLeft}>
                                                <span className={styles.itemId}>{service.id}</span>
                                                <div className={styles.titleGroup}>
                                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                                    <AnimatePresence>
                                                        {hoveredIndex === index && (
                                                            <motion.p
                                                                className={styles.serviceDesc}
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                {service.desc}
                                                            </motion.p>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                            <div className={styles.itemRight}>
                                                <div className={hoveredIndex === index ? styles.arrowActive : styles.arrow}>
                                                    <ArrowUpRight size={24} />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="grid"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className={styles.grid}
                            >
                                {services.map((service) => (
                                    <motion.div
                                        key={service.id}
                                        layout
                                        className={styles.gridCard}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className={styles.cardImageContainer}>
                                            <img src={service.image} alt={service.title} className={styles.cardImage} />
                                            <div className={styles.cardBadge}>{service.id}</div>
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className={styles.cardTitle}>{service.title}</h3>
                                            <p className={styles.cardDesc}>{service.desc}</p>
                                            <div className={styles.cardFooter}>
                                                <ArrowUpRight size={20} className={styles.cardArrow} />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </LayoutGroup>

                {/* Floating Preview Image (List View Only) */}
                <AnimatePresence>
                    {view === 'list' && hoveredIndex !== null && (
                        <motion.div
                            className={styles.floatingPreview}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                left: mousePosition.x + 20,
                                top: mousePosition.y - 100
                            }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 150, damping: 15 }}
                        >
                            <img
                                src={services[hoveredIndex].image}
                                alt={services[hoveredIndex].title}
                                className={styles.previewImage}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
