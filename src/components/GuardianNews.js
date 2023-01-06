import React, {useState, useEffect} from 'react'


export const GuardianNews = () => {

    const [ headlines, setHeadlines ] = useState([])
    const [ pageNumber, setPageNumber ] = useState(2)
    const apiKey = process.env.REACT_APP_GUARDIAN_NEWS_API_KEY
    
    
    const handleShowMore = () => {
        setPageNumber(pageNumber + 1)
        fetch(`https://content.guardianapis.com/search?page=${pageNumber}&api-key=${apiKey}`).then((response) => {
            return response.json()
        }).then((data) => {
            const newHeadlines = data.response.results
            setHeadlines((currentHeadlines) => ([...currentHeadlines, newHeadlines]))
        })
    }
        
       
        
    
    // useEffect(() => {
    //     axios.get(`https://content.guardianapis.com/search?&api-key=${apiKey}`)
    //         .then((res) => {
    //             setData(res.data.response.results)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
            
    // }, [data])

    useEffect(() => {
        fetch(`https://content.guardianapis.com/search?&api-key=${apiKey}`).then((response) => {
        return response.json()
        }).then((data) => {
            setHeadlines(data.response.results)
        })
    }, [apiKey])
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

