import homepage from '@/data/homepage'
import descriptions from '@/data/descriptions'
import About from '@/data/about'
import styles from "@/styles/Index.module.css";
import { useState } from 'react'

const Header = ({ setName, showCloseButton }) => {
    const close = (e) => {
        e.preventDefault()
        setName('')
    }

    const closeButton = showCloseButton ?
        <div className={styles.close_button} onClick={close} >X</div>
        : null
    return (
        <div className={styles.header}>
            <div className={styles.leftside}>
                <a href="/">
                    <div className={styles.logo}>
                        <img src="image/logo.png" alt="John Dimm" />
                    </div>
                    <div className={styles.whoami}>
                        <div className={styles.homepage_name}>John Dimm</div>
                        <div className={styles.homepage_title}>Full Stack Lead &amp; Data Engineer</div>
                    </div>
                </a>

            </div>
            <div className={styles.rightside}>
                {closeButton}
            </div>
        </div>
    )
}

const Footer = ({ setName }) => {
    return (
        <section className={styles.footer}>
            <hr />
            <span className={styles.footer_name}>
                © 2025 John Dimm
            </span>
            <span className={styles.cursorpointer} onClick={() => setName('about')}>about me</span>
        </section>
    )
}

const Card = ({ item, setName }) => {
    console.log(`Card:${item.name}`)

    return <div className={styles.card} >
        <div className={styles.card_content} onClick={() => setName(item.name)}>
            <br /><br />
            <img src={item.thumbnail} />
            <div className={styles.title}>{item.title}</div>
            <div className={styles.subtitle}>{item.subtitle}</div>
        </div>
    </div>
}

const showField = (item, field) => {
    if (item[field]) {
        const f = item[field]
        return <div>{field}:&nbsp;
            <a href={f}>{f}</a>
        </div>
    } else {
        return null
    }
}

const Detail = ({ item, setName }) => {
    const urlHtml = showField(item, "url")
    const githubHtml = showField(item, 'github')
    const videoHtml = showField(item, "video")
    const platformHtml = showField(item, 'platform')
    const aboutHtml = showField(item, 'about')
    const yearHtml = showField(item, 'year')

    return <div className={styles.detail} >
        <div className={styles.card_content}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.subtitle}>{item.subtitle}</div>
            <div><a href={item.url}>
                <img src={item.poster} />
            </a>
            </div>
            <div className={styles.description}>
                {descriptions[item.name]}
            </div>

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

const Index = () => {
    const [name, setName] = useState('')

    console.log(`Index: ${name}`)

    let homepageHtml
    let showCloseButton = false
    if (name != '') {
        let selectedItem
        homepage.forEach((item, idx) => {
            if (item.name == name) {
                selectedItem = item
            }
        })
        if (selectedItem) {
            homepageHtml = <Detail item={selectedItem} setName={setName} />
            showCloseButton = true
        }
    }

    if (!homepageHtml) {
        if (name == 'about') {
            showCloseButton = true
            homepageHtml = <About />
        }
        else
            homepageHtml = homepage.map((item, idx) => {
                return <Card key={idx} item={item} setName={setName} />
            })
    }


    return <>
        <div className={styles.homepage}>
            <Header setName={setName} showCloseButton={showCloseButton} />
            {homepageHtml}
            <Footer setName={setName} />
        </div>
    </>
}

export default Index
