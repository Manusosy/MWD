'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
    {
        q: "What services does Mombasa Web Designers offer?",
        a: "We offer a full range of digital services including custom website design, web development (Next.js, React, WordPress), SEO optimization, mobile app development, and brand identity design."
    },
    {
        q: "How long does it take to launch a website?",
        a: "Timeline depends on complexity. A standard business brochure site typically takes 2-4 weeks, while more complex web applications or e-commerce stores may take 4-8 weeks or more."
    },
    {
        q: "Do you provide ongoing maintenance and support?",
        a: "Yes, we offer comprehensive care plans that include regular updates, security monitoring, daily backups, and priority support to ensure your website remains healthy and secure."
    },
    {
        q: "What is your pricing model?",
        a: "We work on both project-based fixed pricing and retainer models for ongoing partnerships. We provide a detailed proposal after understanding your specific requirements."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>
                <h2 className={styles.title}>Frequently Asked Questions</h2>

                {faqs.map((faq, i) => (
                    <div key={i} className={styles.item}>
                        <button
                            className={styles.question}
                            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                        >
                            {faq.q}
                            {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    className={styles.answer}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                >
                                    <p className={styles.answerContent}>{faq.a}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
