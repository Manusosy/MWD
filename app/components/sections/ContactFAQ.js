'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus, Send, ChevronRight, Box } from 'lucide-react';
import styles from './ContactFAQ.module.css';

const faqs = [
    {
        id: "1",
        q: "How long does it take to design and launch a website?",
        a: "The timeline depends on the complexity of the website. A standard business website typically takes 7–14 working days, while custom systems or e-commerce platforms may take 3–6 weeks. We always provide a timeline estimate before starting any project."
    },
    {
        id: "2",
        q: "Do you provide domain name registration and hosting?",
        a: "Yes, we provide full-scale hosting solutions and domain registration as part of our web packages to ensure your site stays fast, secure, and always online."
    },
    {
        id: "3",
        q: "Can I sell products online with the website you build?",
        a: "Absolutely! We specialize in e-commerce solutions that allow you to manage inventory, process payments, and grow your sales online efficiently."
    },
    {
        id: "4",
        q: "What happens if I need help after my website is launched?",
        a: "We offer ongoing support and maintenance packages. Whether it's a small update or technical help, our team is always ready to assist you after launch."
    },
    {
        id: "5",
        q: "Do you build custom systems or only websites?",
        a: "We do both. In addition to websites, we design custom web systems — such as school portals, booking platforms, church management apps, hospital systems, and invoicing tools — tailored to your specific needs using Laravel, React, and other modern technologies."
    }
];

const services = [
    "Website services",
    "SEO services",
    "Digital marketing services",
    "Other inquiry"
];

export default function ContactFAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const [selectedService, setSelectedService] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={styles.mainHeader}>
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Box size={16} />
                        <span>Get started</span>
                    </motion.div>
                    <motion.h2
                        className={styles.mainTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Not Sure where to get started?
                    </motion.h2>
                </div>
                <div className={styles.grid}>

                    {/* Left: FAQs */}
                    <div className={styles.faqColumn}>
                        <div className={styles.headerGroup}>
                            <span className={styles.tag}>FAQs</span>
                            <div className={styles.tagLine}></div>
                        </div>

                        <div className={styles.accordion}>
                            {faqs.map((faq, i) => (
                                <div key={faq.id} className={`${styles.faqItem} ${openIndex === i ? styles.activeItem : ''}`}>
                                    <button
                                        className={styles.question}
                                        onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                    >
                                        <span className={styles.qText}>{i + 1}. {faq.q}</span>
                                        <div className={styles.qIcon}>
                                            {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className={styles.answerWrap}
                                            >
                                                <div className={styles.answer}>
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Get In Touch */}
                    <div className={styles.contactColumn}>
                        <div className={styles.headerGroup}>
                            <span className={styles.tag}>Get In Touch</span>
                            <div className={styles.tagLine}></div>
                        </div>
                        <p className={styles.subtitle}>
                            Have a question, need a quote, or ready to start your project? Fill out the form
                            below and our team will get back to you within 24 hours. We’re here to help you
                            bring your digital vision to life.
                        </p>

                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <input type="text" placeholder="Your Name*" required className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="email" placeholder="Mail*" required className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="tel" placeholder="Your Phone" className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <div className={styles.customSelect}>
                                        <div
                                            className={`${styles.selectTrigger} ${selectedService ? styles.hasValue : ''}`}
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        >
                                            {selectedService || "Select Service"}
                                            <ChevronDown size={18} className={`${styles.chevron} ${isDropdownOpen ? styles.rotated : ''}`} />
                                        </div>
                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    className={styles.options}
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                >
                                                    {services.map((service) => (
                                                        <div
                                                            key={service}
                                                            className={styles.option}
                                                            onClick={() => {
                                                                setSelectedService(service);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                        >
                                                            {service}
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.textareaGroup}>
                                <textarea placeholder="Your Message*" required className={styles.textarea}></textarea>
                            </div>
                            <motion.button
                                className={styles.submitBtn}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
