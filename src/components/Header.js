import Link from 'next/link';
import styles from '@/styles/Index.module.css';

const Header = ({ showCloseButton }) => {
    const closeButton = showCloseButton ? (
        <Link href="/">
            <div className={styles.close_button}>X</div>
        </Link>
    ) : null;

    return (
        <div className={styles.header}>
            <div className={styles.leftside}>
                <Link href="/" >
                    <div className={styles.logo}>
                        <img src="/image/logo.png" alt="John Dimm" />
                    </div>
                </Link>
                <Link href="/" >
                    <div className={styles.whoami}>
                        <div className={styles.homepage_name}>John Dimm</div>
                        <div className={styles.homepage_title}>Full Stack Lead &amp; Data Engineer</div>
                    </div>
                </Link>
            </div>
            <div className={styles.rightside}>
                {closeButton}
            </div>
        </div>
    );
};

export default Header;
