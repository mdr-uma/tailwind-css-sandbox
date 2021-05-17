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
        </div>
    )
}

export default Filter 