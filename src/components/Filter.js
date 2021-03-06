import React from 'react'
import Image from '../images/yomari.jpeg'

const Filter = () => {
    return(
        <div>
            <h1 className="text-center mt-14 pb-8 font-bold text-2xl">
                Newari Popular Dish Yomari Set
            </h1>
            <div className="flex justify-center items-center">
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter blur-sm"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter blur-lg"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter blur-none"/>
            </div>          
            <div className="flex justify-center items-center">
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter grayscale"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter invert"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter sepia"/>
            </div>          
            <div className="flex justify-center items-center">
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter brightness-50"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter brightness-150"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter brightness-200"/>
            </div>          
            <div className="flex justify-center items-center">
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter contrast-50"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter contrast-150"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter contrast-200"/>
            </div>          
            <div className="flex justify-center items-center">
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter hue-rotate-90"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter hue-rotate-180"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter -hue-rotate-180"/>
            </div>          
            <div className="flex justify-center items-center">
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter drop-shadow"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter drop-shadow-sm"/>
                <img src={Image} alt='food-pic' className="h-40 w-50 pr-4 filter drop-shadow-2xl"/>
            </div>          
        </div>
    )
}

export default Filter 