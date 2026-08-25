import Link from 'next/link';
import homepage from '@/data/homepage';
import Card from '@/components/Card';
import styles from "@/styles/Index.module.css";

const Index = () => {
    return (
        <div className={styles.garden}>
            <header className={styles.gardenHeader}>
                <img className={styles.gardenLogo} src="/image/logo.png" alt="John Dimm" />
                <div>
                    <div className={styles.gardenName}>John Dimm</div>
                    <div className={styles.gardenTitle}>Full Stack Lead &amp; Data Engineer</div>
                </div>
            </header>

            <p className={styles.gardenTagline}>
                A growing collection of things I&apos;ve built — click any card to open it.
            </p>

            <div className={styles.gardenGrid}>
                {homepage.map((item, idx) => (
                    <Card key={idx} item={item} />
                ))}
            </div>

            <footer className={styles.gardenFooter}>
                <span className={styles.gardenCopy}>© 2026 John Dimm</span>
                <Link href="/about" className={styles.gardenAbout}>about me</Link>
            </footer>
        </div>
    );
};

export default Index;
