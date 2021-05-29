import React from 'react'
import Image from '../images/wyoming-scenery.jpeg'

const BackDropFilter = () => {
    return(
        <div className="mx-16 relative">
            <div className="absolute w-full">
                <img src={Image} alt='' className="w-full"/>
            </div>
            <div className="relative h-screen flex flex-col space-y-80">
                <div className="flex-shrink-0 h-1/3"></div>
                <div className="flex-shrink-0 h-1/3"></div>
                <div className="flex-shrink-0 h-1/3"></div>
            </div>
        </div>
    )
}

export default BackDropFilter