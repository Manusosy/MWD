'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    ChevronDown,
    ChevronRight,
    Code,
    Layout,
    Cloud,
    BarChart,
    Cpu,
    ShoppingCart,
    Radio,
    Globe,
    ArrowUpRight
} from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navItems = [
        { name: 'Home', href: '/', hasDropdown: false, isPill: true },
        {
            name: 'Our Solutions',
            href: '#',
            isMega: true,
            megaRows: [
                {
                    title: 'Smart Solutions',
                    icon: Globe,
                    items: [
                        { name: 'Product Development', href: '/solutions/product', icon: Code },
                        { name: 'UI/UX Design', href: '/solutions/ux', icon: Layout },
                        { name: 'Cloud Solutions', href: '/solutions/cloud', icon: Cloud },
                        { name: 'Data & Analytics', href: '/solutions/data', icon: BarChart },
                        { name: 'AI & Machine Learning', href: '/solutions/ai', icon: Cpu },
                        { name: 'E-commerce Solutions', href: '/solutions/ecommerce', icon: ShoppingCart },
                        { name: 'IoT Development', href: '/solutions/iot', icon: Radio },
                    ]
                },
                {
                    title: 'Industries Cover',
                    icon: Globe,
                    items: [
                        { name: 'Finance & Fintech', href: '/industries/finance' },
                        { name: 'Healthcare & Life', href: '/industries/healthcare' },
                        { name: 'Retail & E-commerce', href: '/industries/retail' },
                        { name: 'Education & EdTech', href: '/industries/education' },
                        { name: 'Government & Public Sector', href: '/industries/government' },
                        { name: 'Travel & Hospitality', href: '/industries/travel' },
                        { name: 'View All Industries', href: '/industries', isLink: true },
                    ]
                }
            ],
            ctaCard: {
                title: "We have Dynamic Team Members that Easily Problem Solve.",
                buttonText: "Let's Talk",
                avatars: [
                    "https://i.pravatar.cc/100?u=a1",
                    "https://i.pravatar.cc/100?u=a2",
                    "https://i.pravatar.cc/100?u=a3",
                    "https://i.pravatar.cc/100?u=a4",
                    "https://i.pravatar.cc/100?u=a5",
                    "https://i.pravatar.cc/100?u=a6",
                    "https://i.pravatar.cc/100?u=a7",
                    "https://i.pravatar.cc/100?u=a8",
                ]
            }
        },
        {
            name: 'Company',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Company', href: '/about', isHeader: true },
                { name: 'Our Team', href: '/team' },
                { name: 'Award & Recognitions', href: '/awards' },
                { name: 'Services', href: '/services' },
                { name: 'News & Insight', href: '/blog' },
                { name: 'Pricing Plan', href: '/pricing' },
                { name: 'Careers', href: '/careers' },
                { name: 'FAQ\'s', href: '/faq' },
                { name: 'Contact Us', href: '/contact' },
            ]
        },
        {
            name: 'Portfolio',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Industries', href: '/portfolio', isHeader: true },
                { name: 'Construction & Real Estate Firms', href: '/portfolio/construction' },
                { name: 'Corporate & Business Firms', href: '/portfolio/corporate' },
                { name: 'Ecommerce & Digital Platforms', href: '/portfolio/ecommerce' },
                { name: 'Education', href: '/portfolio/education' },
                { name: 'Healthcare', href: '/portfolio/healthcare' },
                { name: 'Hospitality', href: '/portfolio/hospitality' },
                { name: 'NGO\'S', href: '/portfolio/ngos' },
                { name: 'Tours, travel & logistics', href: '/portfolio/logistics' },
            ]
        },
        {
            name: 'Products',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Digital Products', href: '/products', isHeader: true },
                { name: 'Plugins', href: '/products/plugins' },
                { name: 'Wordpress Themes', href: '/products/themes' },
                { name: 'Html Templates', href: '/products/templates' },
            ]
        },
    ];

    // DEFINITIVE POSITIONING LOGIC
    // We anchor to left: 50% in CSS.
    // This helper returns the translateX percentage.
    // To keep pointer under link, pointer-left % should match translateX absolute %.
    const getDropdownPosition = (name) => {
        if (name === 'Our Solutions') return { x: '-30%', p: '30%' }; // Mega menu shifted right
        if (name === 'Products') return { x: '-85%', p: '85%' };     // Products shifted far left
        if (name === 'Portfolio') return { x: '-60%', p: '60%' };   // Portfolio shifted slightly left
        return { x: '-50%', p: '50%' }; // Standard centered
    };

    return (
        <motion.header
            className={styles.header}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Mombasa Web Designers
                </Link>

                <nav className={styles.nav}>
                    {navItems.map((item) => {
                        const pos = getDropdownPosition(item.name);
                        return (
                            <div
                                key={item.name}
                                className={styles.navItemWrapper}
                                onMouseEnter={() => (item.hasDropdown || item.isMega) && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`${styles.navLink} ${item.isPill ? styles.pillLink : ''} ${activeDropdown === item.name ? styles.activeNavLink : ''}`}
                                >
                                    {item.name}
                                    {(item.hasDropdown || item.isMega) && <ChevronDown size={14} className={styles.arrow} />}
                                </Link>

                                <AnimatePresence>
                                    {activeDropdown === item.name && (
                                        <motion.div
                                            className={item.isMega ? styles.megaMenu : styles.dropdown}
                                            style={{ "--pointer-left": pos.p }}
                                            initial={{ opacity: 0, y: 15, x: pos.x, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, x: pos.x, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, x: pos.x, scale: 0.95 }}
                                            transition={{ duration: 0.23, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <div className={styles.dropdownPointer} />
                                            <div className={styles.dropdownContent}>
                                                {item.isMega ? (
                                                    <div className={styles.megaGrid}>
                                                        {/* Mega Menu Content... */}
                                                        <div className={styles.megaMain}>
                                                            <div className={styles.megaHeader}>
                                                                <h3>Challenge We Tackle</h3>
                                                                <div className={styles.arrowBadge}>
                                                                    <ArrowUpRight size={14} />
                                                                </div>
                                                            </div>
                                                            <div className={styles.megaColumns}>
                                                                {item.megaRows.map((row) => (
                                                                    <div key={row.title} className={styles.megaCol}>
                                                                        <div className={styles.megaColHeader}>
                                                                            <row.icon size={16} />
                                                                            <span>{row.title}</span>
                                                                        </div>
                                                                        <div className={styles.megaItems}>
                                                                            {row.items.map((subItem) => (
                                                                                <Link
                                                                                    key={subItem.name}
                                                                                    href={subItem.href}
                                                                                    className={`${styles.megaItem} ${subItem.isLink ? styles.megaLink : ''}`}
                                                                                >
                                                                                    {subItem.icon && <subItem.icon size={18} className={styles.itemIcon} />}
                                                                                    <span>{subItem.name}</span>
                                                                                    {subItem.isLink && <ArrowUpRight size={14} />}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className={styles.megaCta}>
                                                            <div className={styles.ctaCard}>
                                                                <h4>{item.ctaCard.title}</h4>
                                                                <Link href="/contact" className={styles.ctaCardButton}>
                                                                    {item.ctaCard.buttonText}
                                                                    <ArrowUpRight size={14} />
                                                                </Link>
                                                                <div className={styles.avatarGrid}>
                                                                    {item.ctaCard.avatars.map((url, i) => (
                                                                        <img
                                                                            key={i}
                                                                            src={url}
                                                                            alt="Team member"
                                                                            className={styles.avatar}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className={styles.standardDropdownItems}>
                                                        {item.dropdownItems.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className={`${styles.dropdownItem} ${subItem.isHeader ? styles.dropdownHeader : ''}`}
                                                            >
                                                                {subItem.name}
                                                                {subItem.hasArrow && <ChevronRight size={14} className={styles.itemArrow} />}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </nav>

                <div className={styles.authActions}>
                    <ThemeToggle />
                    <Link href="#contact" className={styles.ctaButton}>
                        Get Started
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
