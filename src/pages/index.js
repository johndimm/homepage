import homepage from '@/data/homepage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import styles from "@/styles/Index.module.css";

const Index = () => {
    const homepageHtml = homepage.map((item, idx) => {
        return <Card key={idx} item={item} />
    })

    return (
        <div className={styles.homepage}>
            <Header showCloseButton={false} />
            {homepageHtml}
            <Footer />
        </div>
    )
}

export default Index
