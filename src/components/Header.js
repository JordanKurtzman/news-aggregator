import React from 'react'

const Header = () => {
    const date = new Date()
    const todaysDate = date.toLocaleDateString()
    return (
        <div>
            The news for {todaysDate}:
        </div>

    )
}

export default Header