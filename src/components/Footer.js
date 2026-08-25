import Link from 'next/link';
import styles from '@/styles/Index.module.css';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <hr />
            <span className={styles.footer_name}>
                © 2026 John Dimm
            </span>
            <Link href="/about">
                <span className={styles.cursorpointer}>about me</span>
            </Link>
        </section>
    );
};

export default Footer;
