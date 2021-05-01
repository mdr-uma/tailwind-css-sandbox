import React from 'react'

const Animations = () => {
    return(
        <div className="container mx-auto py-20 px-20 lg:px-0 flex justify-evenly flex-col lg:flex-row">
            <h1 className="mb-10 text-4xl font-extrabold lg:self-center">Tailwind CSS Animations</h1>
            
            <div>
                <h1 className="mb-10 text-2xl font-extrabold">Bounce</h1>
                <div className="w-20 h-20 bg-black rounded-full animate-bounce"></div>
            </div>
        </div>
    )
}

export default Animations