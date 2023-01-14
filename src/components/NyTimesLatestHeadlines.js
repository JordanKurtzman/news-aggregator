import React, { useEffect, useState } from 'react'


export const NyTimesLatestHeadlines = () => {
    const [headlines, setHeadlines] = useState([])
    const apiKey = process.env.REACT_APP_NYTIMES_API_KEY

    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${apiKey}`
        ).
        then((res) =>
        res.json()
        ).then((data) => {
            setHeadlines(data.results)
            console.log(data.results)
        })
    }, [apiKey])

    return (
        <div>
            {headlines.map((article) => 
                <div>
                <p>{article.title}</p>
                <p>{article.section}</p>
                <p><a href={article.url}>{article.url}</a></p>
                </div>)}
        </div>
    )
}