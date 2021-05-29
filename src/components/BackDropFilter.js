import React from 'react'
import Image from '../images/wyoming-scenery.jpeg'

const BackDropFilter = () => {
    return(
        <div className="mx-16 relative">
            <div className="absolute w-full">
                <img src={Image} alt='' className="w-full"/>
            </div>
        </div>
    )
}

export default BackDropFilter