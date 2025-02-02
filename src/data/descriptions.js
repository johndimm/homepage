import styles from "@/styles/Index.module.css";

const descriptions = {
    "resumes": (
        <div className={styles.resumes}>
            <div className={styles.resume_format}>
                <p>
                </p><h3>PDF format</h3>
                <ul>
                    <li><a href="cv/2025/johndimm_bullets.pdf">Small: just bullet points</a></li>
                    <li><a href="cv/2025/johndimm_classic.pdf">Medium: paragraphs</a></li>
                    <li><a href="cv/2025/johndimm_details.pdf">Large: longer paragraphs</a></li>
                </ul>
            </div>
            <div className={styles.resume_format}>
                <h3>Word format</h3>
                <ul>
                    <li><a href="cv/2025/johndimm_bullets.docx">Small: just bullet points</a></li>
                    <li><a href="cv/2025/johndimm_classic.doc">Medium: paragraphs</a></li>
                    <li><a href="cv/2025/johndimm_details.doc">Large: longer paragraphs</a></li>
                </ul>
                <p></p>
            </div>
        </div>

    ),
    "longtail": <div>
        <p>
            Imagine a streaming service that offers every movie ever made, the way Spotify has every audio recording.  How would you pick from so many options?
        </p>

        <p>
            This site is built with the non-commercial data dump from IMDB (Internet Movie Database), along with additional data from TMDB (The Movie Database) and OMDB (Open Movie Database). Including movies and tv series, there are over 1,100,000 titles.
        </p>
        <p> Long Tail brings structure by exposing the collaboration graph around a given movie, showing the last project and next project of each member of the cast and crew.  This collaboration graph neighborhood is arguably the <i>immediate creative context</i> of the given movie.  Click through the collaboration graph to follow the intersecting career paths of actors, directors, and producers.
        </p>

    </div>,
    "ebaycomicssold": <div>
        <p>Companies that calculate the fair market value of a comic book have a tough job.  This tool shows the most valuable raw data for valuation:  the last 3 months of sales on ebay.  It does a live query to ebay and screen-scrapes the response, extracting sold prices, sell date, grades, and whether the comic is "slabbed" or in its "raw" state.  The graph shows all relevant data that determine a value, but does not attempt to interpolate a value for a given grade.  It leaves that up to you.</p>
    </div>,
    "silverage": <div>
        <p>
            I found out about Marvel one summer day at a Rexall Drugstore sitting on the floor reading Spider-Man 17 and everything else Marvel on the newsstand that month.  I became a kid collector before there were comic book shops, hitting all the used bookstores in Pasadena.  Many survived and they are going on sale slowly, a few at a time.
        </p>

        <p>
            This app uses the feature filter React module to manage the left panel dedicated to field selection.  Updates te page without a reload, which makes it easy to carve out a set of comics based on combinations of field values.
        </p>

        <p>
            The stock cover photos and plot summaries are from the Marvel API.
        </p>

        <p>
            The detail pages show the stock cover photo from Marvel, and in a growing number of cases, photographs of the actual comics from several angles.  They were submitted to the CGC Forum "Hey buddy, can you spare a grade?" and the grade shown here is the averge of the low and high estimates.
        </p>
    </div>,
    "collaboration": <div>
        <p>I stumbled on an early 60's jazz record with piano, base, and latin percussion.   No horn player and no drummer but congas and timbales instead.Herbie Hancock at the time was playing complex improvisations often with a classical feel.  How did this happen?  What was the creative environment that made it possible? What else were these people doing around that time?  Spotify seems to have the information but it's hard to find.</p>
        <p>So I wrote this app to explore the collaboration graph for a recording, like Long Tail but for music.  When you find an interesting album, you can find other good stuff by looking at what the players were recording before and after.</p>
        <p>The data is extracted from the open source project musicbrainz which comes in the form of a large postgres database.  </p>
    </div>,
    "filterpanel": <div>
        <p>This is an npm package that exports a react component that generates a filter panel from a table of data. Filter panels are used by Amazon, Walmart, and many other e-commerce sites.  The filterpanel package is made to update immediately without a page load.</p>
    </div>,
    "breakdown": <div>
        <p>Use the GROUP BY statement in SQL to slice and dice any data by any number of independent dimensions.  Originally written for Mint, but Mint is no more.  Also for Personal Capital, which is now Empower.  I still use this to make sense of my financial data.  Break down the results of a selection by showing the distribution of the selected data over a dimension.</p>
    </div>,
    "whatlooksgood": <div>
        <p>The model was created by analyzing a single source of found data: user photo caption text. It identifies "dishes" from the co-occurrence of phrases in caption text, and searches in all caption text for them, creating a graph of the relation between restaurants and their dishes. The UI relies on two recommender systems built on that relation.</p>
    </div>,
    "talkshow": <div>
        <p>
            In the future, computers and AI will be everywhere, doing whatever they can to get our attention.
        </p>
        <p>
            This app is hands-free and you don't really "use" it.  Once it gets going, you just have your conversation as usual and let it listen.  Rather than you driving the app, the app is monitoring your activity looking for an opportunity to help.  It listens while you talk and uses the things you mention to query for images on the internet, eagerly showing you things that might be interesting, given that you seem to be talking about them.
        </p>

        <p>
            It uses the Web Speech API that has been available in Google Chrome for over 10 years.
        </p>
    </div>
}

export default descriptions