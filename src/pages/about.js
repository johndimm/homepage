import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/data/about';
import styles from "@/styles/Index.module.css";

const AboutPage = () => {
    return (
        <div className={styles.homepage}>
            <Header showCloseButton={true} />
            <About />
            <Footer />
        </div>
    );
};

export default AboutPage;
