import homepage from '@/data/homepage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Detail from '@/components/Detail';
import styles from "@/styles/Index.module.css";

export async function getStaticPaths() {
    const paths = homepage.map((item) => ({
        params: { name: item.name },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const item = homepage.find((item) => item.name === params.name);
    return { props: { item } };
}

const Item = ({ item }) => {
    return (
        <div className={styles.homepage}>
            <Header showCloseButton={true} />
            <Detail item={item} />
            <Footer />
        </div>
    );
};

export default Item;
