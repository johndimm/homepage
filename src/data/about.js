import styles from "@/styles/Index.module.css";

const About = () => {
    return <div className={styles.about}>
        <div className={styles.picture}>
            <img src="/image/headshot1.jpg" alt="John Dimm profile photo" />
            <div>Pacific Beach 2025</div>
        </div>

        <div className={styles.narration}>
            <div className={styles.title} >John Dimm&mdash;Full Stack Developer & Data Engineer in San Diego</div>
            <div>
                <a href="https://www.linkedin.com/in/johndimm/">https://www.linkedin.com/in/johndimm/</a>
            </div>
            <br />
            <div className={styles.text}>

                <p>
                    I studied logic, algebra, geometry, linguistics, and philosophy in college and then worked as a computer programmer, first at Boeing and later in a series of more or less successful start-ups.
                </p>

                <p>
                    I like interfaces that give the impression you are effortlessly navigating through layers of data.  It can be done with movies, tv shows, audio recordings, financial records, internet activity, and comic books.
                </p>

                <p>
                    On the back-end, I actually enjoy processing large quantities of data to extract useful information and make it available.  The goal is to find or create structure in the data that can be used by the UI to enable exploration.  The back-end is responsible for carving out the small chunk of data needed for the current page.
                </p>
                <p>

                    In the ideal project, the back-end and front end are developed in parallel.  I work with Object Relational Models but prefer to avoid SQL in client code by encapsulating SQL statements in stored procedures.
                </p>

                <p>
                    On the front-end, I'm a specialist in feel, not look.  I find interesting ways of navigating through data, and worry about creating consistent, logical, and fast connections, but I let a professional designer make the interface pretty.
                </p>

                <p>
                    I value simplicity over brevity, but strive for code that has both.  I avoid early optimization, boilerplate, big functions, big source files, and monolithic applications.
                </p>
                <p>
                    After many years of working in C++, i switched to interpreted languages in the early days of the Web.  The work of generating a web page is small compared to substantial back-end processes like search and database access, where all the heavy lifting goes on.  I’m glad to see Javascript getting widely used for serious applications.
                </p>
                <p>
                    I always start a project by developing a “thin line” through the system, one that exercises each of the major components, cutting corners at every opportunity.  The goal is to enable one essential path from the user's first contact to a useful result.  In the end, much of the code from this first system may be thrown away, but it's worth it.
                </p>
                <p>
                    I always liked Dr. Mark Anderson's motto, which he repeated whenever you interrupted him with an annoying question:
                    <div className={styles.blockquote}>"Delete it and start over"</div>
                </p>
            </div>
        </div>
    </div>
}

export default About