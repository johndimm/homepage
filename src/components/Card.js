import Link from 'next/link';
import styles from '@/styles/Index.module.css';

const Card = ({ item }) => {
    const accent = item.accent || '#6366f1';
    const isExternal = !!item.url;
    const href = item.url || `/${item.name}`;

    const inner = (
        <>
            <div
                className={styles.appCardImageWrap}
                style={item.imageBg ? { background: item.imageBg } : undefined}
            >
                <img
                    className={`${styles.appCardImage} ${item.imageBg ? styles.appCardImageContain : ''}`}
                    src={item.thumbnail}
                    alt={item.title}
                />
            </div>
            <div className={styles.appCardBody}>
                <div className={styles.appCardTitleRow}>
                    <h2 className={styles.appCardTitle}>{item.title}</h2>
                    <span className={styles.appCardArrow} aria-hidden>↗</span>
                </div>
                <p className={styles.appCardBlurb}>{item.blurb || item.subtitle}</p>
            </div>
        </>
    );

    return (
        <div className={styles.appCard} style={{ '--accent': accent }}>
            {isExternal ? (
                <a className={styles.appCardMain} href={href} target="_blank" rel="noopener noreferrer">
                    {inner}
                </a>
            ) : (
                <Link className={styles.appCardMain} href={href}>
                    {inner}
                </Link>
            )}
            <div className={styles.appCardFooter}>
                <span className={styles.appCardMeta}>
                    {[item.year, item.platform].filter(Boolean).join(' · ')}
                </span>
                {item.github && (
                    <a className={styles.appCardGithub} href={item.github} target="_blank" rel="noopener noreferrer">
                        GitHub&nbsp;↗
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
