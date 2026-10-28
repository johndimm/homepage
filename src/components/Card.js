import Link from 'next/link';
import styles from '@/styles/Index.module.css';

const Card = ({ item }) => {
    const accent = item.accent || '#6366f1';
    const isExternal = !!item.url;
    const href = item.url || `/${item.name}`;

    const Wrapper = isExternal ? 'a' : Link;
    const wrapperProps = isExternal
        ? { href, target: '_blank', rel: 'noopener noreferrer' }
        : { href };

    return (
        <div className={styles.appCard} style={{ '--accent': accent }}>
            <Wrapper className={styles.appCardMain} {...wrapperProps}>
                <h2 className={styles.appCardTitle}>{item.title}</h2>
                <p className={styles.appCardBlurb}>{item.blurb || item.subtitle}</p>

                <div
                    className={styles.appCardImageWrap}
                    style={item.imageBg ? { background: item.imageBg } : undefined}
                >
                    <img
                        className={`${styles.appCardImage} ${item.imageBg ? styles.appCardImageContain : ''}`}
                        src={item.poster || item.thumbnail}
                        alt={item.title}
                    />
                </div>

                <span className={styles.appCardButton}>
                    Open {item.title}
                </span>
            </Wrapper>

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
