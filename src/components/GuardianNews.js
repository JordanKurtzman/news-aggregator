import React, {useState, useEffect} from 'react'


export const GuardianNews = () => {

    const [ headlines, setHeadlines ] = useState([])
    const [ pageNumber, setPageNumber ] = useState(1)
    const apiKey = process.env.REACT_APP_GUARDIAN_NEWS_API_KEY
    
    
    const handleShowMore = () => {
        setPageNumber(pageNumber + 1)
        console.log(pageNumber)
    }
        

    useEffect(() => {
        fetch(`https://content.guardianapis.com/search?page=${pageNumber}&api-key=${apiKey}`).then((response) => {
        return response.json()
        }).then((data) => {

            if(pageNumber ===1 ){
                setHeadlines(data.response.results)
            }
            else {
                let newHeadlines = data.response.results
                let newArray = headlines.concat(newHeadlines)
                setHeadlines(newArray)
            }
            
        })
    }, [apiKey, pageNumber])
    return (
        <div>
            {headlines.map((item) => 
            <div>
                <p>{item.webTitle}</p>
                    <p><a href={item.webUrl}>{item.webUrl}</a></p>
            </div>
                )}
            <button onClick={handleShowMore}>Show more</button>    
        </div>
    )
}

