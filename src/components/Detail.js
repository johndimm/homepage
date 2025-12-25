import Link from 'next/link';
import styles from '@/styles/Index.module.css';
import descriptions from '@/data/descriptions';

const showField = (item, field) => {
    if (item[field]) {
        const f = item[field]
        return <div style={{ marginBottom: '10px' }}><b>{field}:</b>&nbsp;
            <a href={f}>{f}</a>
        </div>
    } else {
        return null
    }
}

const Detail = ({ item }) => {
    const urlHtml = showField(item, "url")
    const githubHtml = showField(item, 'github')
    const videoHtml = showField(item, "video")
    const platformHtml = showField(item, 'platform')
    const aboutHtml = showField(item, 'about')
    const yearHtml = showField(item, 'year')

    return <div className={styles.detail} >
        <div className={styles.card_content}>
            <div className={styles.title}><a href={item.url}>{item.title}</a></div>
            <div className={styles.subtitle}>{item.subtitle}</div>
            <div><a href={item.url}>
                <img src={item.poster} alt={item.title} />
            </a>
            </div>
            <div className={styles.description}>
                {descriptions[item.name]}
            </div>
            <br />

            <div className={styles.fields}>
                {urlHtml}
                {githubHtml}
                {videoHtml}
                {platformHtml}
                {aboutHtml}
                {yearHtml}
            </div>
        </div>
    </div>
}

export default Detail;
