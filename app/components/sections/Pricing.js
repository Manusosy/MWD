'use client';

import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

const plans = [
    {
        name: "Starter",
        price: "$2,500",
        desc: "Perfect for small businesses looking to establish a professional presence.",
        features: ["5 Page Website", "Responsive Design", "Basic SEO Setup", "Contact Form Integration", "1 Month Support"],
        featured: false
    },
    {
        name: "Professional",
        price: "$5,000",
        desc: "Our most popular package for growing service businesses.",
        features: ["10 Page Website", "Advanced SEO & Analytics", "CMS Integration", "Newsletter Setup", "Priority Support"],
        featured: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        desc: "For large organizations requiring complex functionality.",
        features: ["Unlimited Pages", "Custom Web App Dev", "Database Integration", "User Authentication", "24/7 SLA Support"],
        featured: false
    }
];

export default function Pricing() {
    return (
        <section className={styles.section} id="pricing">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Simple, transparent pricing</h2>
                    <p style={{ color: 'var(--text-muted)' }}>No hidden fees. Choose the plan that fits your needs.</p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, i) => (
                        <div key={i} className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
                            <h3 className={styles.planName}>{plan.name}</h3>
                            <div className={styles.price}>
                                {plan.price}<span className={styles.period}>{plan.price !== 'Custom' && ''}</span>
                            </div>
                            <p className={styles.desc}>{plan.desc}</p>

                            <ul className={styles.features}>
                                {plan.features.map((feat, k) => (
                                    <li key={k} className={styles.featureItem}>
                                        <Check size={20} className={styles.featureIcon} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={`${styles.button} ${plan.featured ? styles.primary : ''}`}>
                                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
