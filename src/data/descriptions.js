import styles from "@/styles/Index.module.css";

const descriptions = {
    "resumes": (
        <div className={styles.resume_format}>

            <div>
                <h4>brief -- two pages</h4>
                <ul>
                    <li><a target="_resume" href="https://docs.google.com/document/d/1dpOanW2cpdMlXF5F9rvRoEDUu9NpREsortnW9cjdwEs/edit?usp=sharing">Google doc</a></li>
                </ul>
            </div>

            <div>
                <h4>small -- bullet points</h4>
                <ul>
                    <li><a target="_resume" href="cv/2025/johndimm_bullets.pdf">pdf</a></li>
                    <li><a target="_resume" href="cv/2025/johndimm_bullets.docx">word</a></li>
                </ul>
            </div>

            <div>
                <h4>medium -- classic</h4>
                <ul>
                    <li><a target="_resume" href="cv/2025/johndimm_classic.pdf">pdf</a></li>
                    <li><a target="_resume" href="cv/2025/johndimm_classic.doc">word</a></li>
                </ul>
            </div>

            <div>
                <h4>large -- details</h4>
                <ul>
                    <li><a target="_resume" href="cv/2025/johndimm_details.pdf">pdf</a></li>
                    <li><a target="_resume" href="cv/2025/johndimm_details.doc">word</a></li>
                </ul>
            </div>
        </div>
    ),
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
    "filterpanel": <div>
        <p>This is an npm package that exports a react component that generates a filter panel from a table of data. Filter panels are used by Amazon, Walmart, and many other e-commerce sites.  The filterpanel package is made to update immediately without a page load.</p>
    </div>,
    "soundings": <div>
        <p>
            Soundings picks a song, plays it for you, and watches your reaction to learn the boundary between your likes and dislikes.  Instead of asking you to rate a long list up front, it feels its way toward your taste one track at a time, taking soundings the way a ship measures the depth of unfamiliar water.
        </p>
        <p>
            It plays through Spotify for signed-in Spotify users and falls back to YouTube for everyone else, so you can start listening without an account.  A language model proposes the next song based on what you have kept and skipped, gradually mapping the coastline between the music you want and the music you don't.
        </p>
    </div>,
    "trailer-vision": <div>
        <p>
            Trailer Vision is TikTok-style, trailer-first discovery for movies and TV.  Trailers autoplay one after another; you rate titles with a tap (red stars for things you have seen, blue for unseen interest) and a language model learns your taste by content similarity rather than collaborative filtering, serving the next batch from a per-channel queue.  An Auto toggle plus Fullscreen lets you watch hands-free.
        </p>
        <p>
            Channels act as independent "taste islands", each with its own filters for genre, era, language, format, and streaming service (Netflix, Prime, Apple TV+, Disney+, HBO Max, Hulu, Paramount+, Peacock).  A search box drops results straight into the queue, a Coming Soon channel pulls upcoming titles from TMDB, and an embedded Constellations graph maps the cast, directors, and related films.  Everything lives in your browser -- no accounts, no server database, no ads.
        </p>
    </div>,
    "speak-memory": <div>
        <p>
            Speak, Memory turns talk into a life story.  You just talk -- dictate a journal entry, or add a past memory like a place you lived, a job, or a relationship -- and it writes compact summaries that zoom from a single day out to your whole life.
        </p>
        <p>
            Raw stream-of-consciousness entries flow in from a Google Doc (a new doc each week), get split into dated segments, and are summarized by a language model that caches its work and only re-summarizes the days that changed.  The result is a zoomable calendar and a summarization graph that roll a lifetime of scattered notes up into decades, years, months, and weeks.
        </p>
        <p>
            Completely free -- no account, no login, no ads, no tracking.  Everything stays in your browser, private to your device.
        </p>
    </div>,
    "orbit": <div>
        <p>
            Orbit explores the connections between people and companies.  Search for a person and it maps the organizations in their professional orbit; search for a company and it surfaces the people around it.  Each result becomes a node in a graph you can wander through, following careers from one company to the next.
        </p>
        <p>
            Like Constellations, the graph is built on the fly from live language-model queries rather than a fixed database, with web results from DuckDuckGo filling in the details and company logos.  It grew out of a set of experiments in mapping professional networks.
        </p>
    </div>,
    "romeo-and-juliet": <div>
        <p>
            Romeo and Juliet Explained is an interactive digital tool designed to make Shakespeare's timeless tragedy more accessible to modern readers. By combining the original text with on-demand explanations, this project bridges the gap between Elizabethan English and contemporary understanding.
        </p>
    </div>,
    "constellations": <div>

        I started this project two weeks ago on Wed Dec 10 using Google API Studio with this initial prompt:
        <blockquote>
            I want to generate collaboration graphs of world history. The edges are people who have wikipedia pages. The nodes are things that bring people together: one-on-one meetings, projects, movies, battles, schools, and so on. I want to start with some node, like the movie Godfather, and follow the careers of the people who collaborated on it to other nodes. I want to see it as a graph and be able to wander around in the space.
        </blockquote>

<p>
The core features were working that afternoon.
</p><p>

The idea was to be lazy and create collaboration graphs on the fly.  No database, just live LLM queries.  The whole graph exists nowhere.  Construct a local neighborhood around a given node and expand out from there.  Slower but now it works on anything.  One constraint -- the people have to have wikipedia pages.  
</p><p>

Would the model be able to find the people involved in an event and the events for a person?  I'm defining an "event" as anything that involves at least 2 people at a given time or time range.  Results are not bad and should get better.
</p><p>

Soon I realized that people are nodes not edges.  A person is a hub of events, an event is a hub of persons.  The edges connect people with the events they participated in. There should be no people-to-people or event-to-event connections.  No dups.
</p><p>

Google AI Studio had a great start but I pushed it too far and it took a wrong turn.  I wanted to undo the day's work. The agent was handling github checkins for me, but it was unable to revert to main.
</p><p>

So I liberated the project from AI Studio and switched to Antigravity, which was fine until I used up my quota.  Turned to Cursor where I have a paid account.  Cursor is the weakest link.  Lots of errors.  It sometimes finds the best solution but only after it has exhausted all the alternatives.
</p><p>

Five days later, I thought it was done and posted it for some friends.  
</p><p>

But save/restore and export/import were needed for sharing graphs. That took one evening.  Cursor ended up doom looping so it was off to Codex, a step up from Cursor but not cheap.  Fortunately there was not much left to do, about 3 bucks.

</p><p>
I spent the rest of the week looking for good examples, tweaking the image queries, updating help, and just playing with it.
</p><p>

It currently gets images by querying Wikipedia Commons rather than requesting images from the LLM, which Cursor claimed would be too error-prone.  I'm not sure.  Lots of errors this way.
</p><p>

Stylewise, I try to present the agent with problems and keep whatever changes I have in mind to myself, at least until I see what it comes up with.  Next time I will save all non-trivial prompts, something the tools do not do well.

</p><p>
D3 is the graph engine. The code builds a force-directed layout with D3 forces (forceSimulation, forceLink, forceManyBody, forceCenter, collisions, zoom/drag).

            </p>

        <ul style={{"marginTop":"10px", "marginLeft":"20px"}}>
            <li><a href="https://constellations-delta.vercel.app/?graph=andrew_ng_to_sebastian_thrun">Andrew Ng to Sebastian Thrun</a></li>
            <li><a href="https://constellations-delta.vercel.app/?graph=geoffrey_hinton_to_yoshua_bengio">Geoffrey Hinton to Yoshua Bengio</a></li>
              <li><a href="https://constellations-delta.vercel.app/?graph=coursera_to_udacity">Coursera to Udacity</a></li>
              <li><a href="https://constellations-delta.vercel.app/?graph=ccrma_to_ircam">CCRMA to IRCAM</a></li>
            <li><a href="https://constellations-delta.vercel.app/?graph=ircam">IRCAM</a></li>
 
        </ul>

    </div>,
    "connections-scratchpad": <div>
        <p>
            The NYT Connections game is addictive and oddly stressful.  It often leads you down the garden path with a red herring that you only realize you have fallen for after you start racking up errors.  Would it be cheating to print the puzzle, cut out the tiles, and rearrange them on the floor to try out different groupings?  I think not.  This app does that on your screen.

        </p>
    </div>
}

export default descriptions