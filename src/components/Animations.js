import React from 'react'

const Animations = () => {
    return(
        <div className="container mx-auto py-20 px-20 lg:px-0 flex justify-evenly flex-col lg:flex-row">
            <h1 className="mb-10 text-4xl font-extrabold lg:self-center">Tailwind CSS Animations</h1>
            
            <div>
                <h1 className="mb-10 text-2xl font-extrabold">Bounce</h1>
                <div className="w-20 h-20 bg-black rounded-full animate-bounce"></div>
            </div>
            
            <div>
                <h1 className="mb-10 text-2xl font-extrabold">Ping</h1>
                <div>
                    <span className="flex h-6 w-6">
                        <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-purple-500"></span>
                    </span>
                    Location
                </div>
            </div>
        </div>
    )
}

export default Animations