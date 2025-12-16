import Link from 'next/link';
import styles from '@/styles/Index.module.css';

const Card = ({ item }) => {
    return (
        <div className={styles.card}>
            <Link href={`/${item.name}`}>
                <div className={styles.card_content} style={{ cursor: 'pointer' }}>
                    <br /><br />
                    <img src={item.thumbnail} alt={item.title} />
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.subtitle}>{item.subtitle}</div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
