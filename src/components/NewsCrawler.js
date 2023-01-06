import React, {useEffect, useState} from 'react'
import { GuardianNews } from './GuardianNews'




const NewsCrawler = () => {

    const [guardianVisible, setGuardianVisible] = useState(false)
    const handleGuardian = () => {
        return setGuardianVisible(!guardianVisible)
    }



   
    

    return (
        <div>
            <button onClick={handleGuardian}><h2>The Guardian</h2></button>
            
            {guardianVisible && <GuardianNews />}
        
        
        
        
            
            
        </div>
    )
}

export default NewsCrawler