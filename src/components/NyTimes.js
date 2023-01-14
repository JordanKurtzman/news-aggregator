import React, {useState} from 'react'
import { NyTimesLatestHeadlines } from './NyTimesLatestHeadlines'

export const NyTimes = () => {
    const [topHeadlinesVis, showTopHeadlines] = useState(false)
    const [latestHeadlinesVis, showLatestHeadlines] = useState(false)

    const handleTopHeadlineViz = () => {
        return showTopHeadlines(!topHeadlinesVis)
    }

    const handleLatestHeadlineViz = () => {
        return showLatestHeadlines(!latestHeadlinesVis)
    }
    
    return (
        <div>
            <button onClick={handleTopHeadlineViz}>Top Headlines</button>
            <button onClick={handleLatestHeadlineViz}>Latest Headlines</button>
            {latestHeadlinesVis && <NyTimesLatestHeadlines/>}
        </div>
    )
}

