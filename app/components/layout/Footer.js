'use client';

import Link from 'next/link';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import styles from './Footer.module.css';

// Custom SVG Brand Icons for "Real" look
const SocialIcons = {
    Twitter: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    Instagram: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
    ),
    LinkedIn: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    ),
    Github: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    )
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <div className={styles.logoArea}>
                            <span className={styles.logo}>Mombasa Web Designers</span>
                        </div>
                        <p className={styles.tagline}>
                            We are a professional digital agency based in Mombasa, specializing in web design, software development, digital marketing, cyber security, domain registration, and secure hosting services.
                        </p>
                        <div className={styles.socials}>
                            <Link href="https://twitter.com" className={styles.socialLink} aria-label="X (Twitter)" target="_blank">
                                <SocialIcons.Twitter />
                            </Link>
                            <Link href="https://instagram.com" className={styles.socialLink} aria-label="Instagram" target="_blank">
                                <SocialIcons.Instagram />
                            </Link>
                            <Link href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn" target="_blank">
                                <SocialIcons.LinkedIn />
                            </Link>
                            <Link href="https://github.com" className={styles.socialLink} aria-label="Github" target="_blank">
                                <SocialIcons.Github />
                            </Link>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div className={styles.column}>
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link href="#services">Premium Web Design</Link></li>
                            <li><Link href="#services">Custom Web Systems</Link></li>
                            <li><Link href="#services">Cyber Security</Link></li>
                            <li><Link href="#services">SEO & Digital Marketing</Link></li>
                            <li><Link href="#services">Cloud Hosting</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/blog">Our Blog</Link></li>
                            <li><Link href="#contact">Our Process</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Support & Legal Column */}
                    <div className={styles.column}>
                        <h4>Support & Legal</h4>
                        <ul className={styles.contactList}>
                            <li><Link href="/sla" className={styles.legalLink}>SLA (Service Level Agreement)</Link></li>
                            <li><Link href="/disclaimer" className={styles.legalLink}>Disclaimer</Link></li>
                            <li><Link href="/refunds" className={styles.legalLink}>Return & Refunds Policy</Link></li>
                            <li>
                                <div className={styles.contactItem}>
                                    <Mail size={16} />
                                    <a href="mailto:hello@mombasawebdesigners.com">hello@mombasawebdesigners.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Mombasa Web Designers. All rights reserved.
                    </div>
                    <div className={styles.legal}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/cookies">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
