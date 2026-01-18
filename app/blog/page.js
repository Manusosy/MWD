'use client';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Blog from '../components/sections/Blog';
import ContactFAQ from '../components/sections/ContactFAQ';
import styles from './BlogPage.module.css';

export default function BlogPage() {
    return (
        <main suppressHydrationWarning>
            <Navbar />
            <div className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Our Blog</h1>
                    <p className={styles.subtitle}>Expert insights on modern web development, design, and digital strategy.</p>
                </div>
            </div>
            <Blog />
            <ContactFAQ />
            <Footer />
        </main>
    );
}
