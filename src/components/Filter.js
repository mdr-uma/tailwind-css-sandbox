import React from 'react'
import Image from '../images/yomari.jpeg'

const Filter = () => {
    return(
        <div>
            <h1 className="text-center mt-14 pb-8 font-bold text-2xl">
                Newari Popular Dish Yomari Set
            </h1>
            <div className="flex justify-center items-center">
                <img src={Image} alt='food-pic'/>
            </div>
        </div>
    )
}

export default Filter 