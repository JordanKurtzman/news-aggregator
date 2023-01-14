import React, {useState} from 'react'
import { GuardianNews } from './GuardianNews'
import {NyTimes} from './NyTimes'




const NewsCrawler = () => {

    const [guardianVisible, setGuardianVisible] = useState(false)
    const [nyTimesVisible, setNyTimesVisible] = useState(false)



    const handleGuardianVis = () => {
        return setGuardianVisible(!guardianVisible)
    }
    const handleNyTimesVis = () => {
        return setNyTimesVisible(!nyTimesVisible)
    }



    return (
        <div>
        <div>
            <button onClick={handleGuardianVis}><h2>The Guardian</h2></button>
            {guardianVisible && <GuardianNews />}
            {guardianVisible && <button onClick={handleGuardianVis}>Close</button>}
        </div>
        <div>
            <button onClick={handleNyTimesVis}><h2>The NyTimes</h2></button>
            {nyTimesVisible && <NyTimes />}
                {nyTimesVisible && <button onClick={handleNyTimesVis}>Close</button>}
        </div>
            
        
        
        
        
            
            
        </div>
    )
}

export default NewsCrawler