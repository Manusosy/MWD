'use client';

import { motion } from 'framer-motion';
import {
    SiHostinger,
    SiNamecheap,
    SiAmazon,
    SiGoogle,
    SiOpenai,
    SiCocacola
} from 'react-icons/si';
import { Server, Building2 } from 'lucide-react'; // Fallbacks
import styles from './LogoCloud.module.css';

const partners = [
    { name: "Hostinger", icon: SiHostinger, color: "#673DE6" },
    { name: "Truehost", icon: Server, color: "#FF0000" }, // Fallback icon
    { name: "Namecheap", icon: SiNamecheap, color: "#DE3723" },
    { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
    { name: "Google", icon: SiGoogle, color: "#4285F4" },
    { name: "OpenAI", icon: SiOpenai, color: "currentColor" },
    { name: "CocaCola", icon: SiCocacola, color: "#F40009" },
    { name: "Mombasa Cement", icon: Building2, color: "currentColor" }, // Fallback icon
];

export default function LogoCloud() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Trusted Partners Badge Divider */}
                <div className={styles.dividerContainer}>
                    <div className={styles.line} />
                    <div className={styles.badge}>
                        Trusted Partners Worldwide for Success
                    </div>
                    <div className={styles.line} />
                </div>

                {/* Marquee Container */}
                <div className={styles.marqueeWrapper}>
                    <motion.div
                        className={styles.marqueeTrack}
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 25, // Increased speed from 40
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {/* Double the list for seamless loop */}
                        {[...partners, ...partners, ...partners].map((partner, index) => {
                            const Icon = partner.icon;
                            return (
                                <div key={index} className={styles.logoItemWrapper}>
                                    <div className={styles.logoItem}>
                                        <Icon size={28} style={{ color: partner.color === 'currentColor' ? 'var(--text-muted)' : partner.color }} />
                                        <span className={styles.partnerName}>{partner.name}</span>
                                    </div>
                                    <div className={styles.dotSeparator} />
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Gradient Edges for fade effect */}
                    <div className={styles.fadeLeft} />
                    <div className={styles.fadeRight} />
                </div>

            </div>
        </section>
    );
}
