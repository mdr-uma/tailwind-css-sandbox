import React from 'react'
import Image from '../images/wyoming-scenery.jpeg'

const BackDropFilter = () => {
    return(
        <div className="mx-16 relative">
            <div className="absolute w-full">
                <img src={Image} alt='' className="w-full"/>
            </div>
            <div className="relative h-screen flex flex-col overflow-y-auto space-y-80">
                <div className="flex-shrink-0 h-full"></div>
                <div className="flex-shrink-0 h-1/3 border-2 border-gray-200 backdrop-filter backdrop-saturate-150"></div>
                <div className="flex-shrink-0 h-1/3 border-2 border-gray-200 backdrop-filter backdrop-grayscale"></div>
                <div className="flex-shrink-0 h-1/3 border-2 border-gray-200 backdrop-filter backdrop-invert"></div>
                <div className="flex-shrink-0 h-1/3 border-2 border-gray-200 backdrop-filter backdrop-blur-md"></div>
                <div className="flex-shrink-0 h-1/3 border-2 border-gray-200 backdrop-filter backdrop-contrast-150"></div>
                <div className="flex-shrink-0 h-full"></div>
            </div>
        </div>
    )
}

export default BackDropFilter