import React from 'react'

const Animations = () => {
    return(
        <div className="container mx-auto py-20 px-20 lg:px-0 flex justify-evenly flex-col lg:flex-row">
            <h1 className="mb-10 text-4xl font-extrabold lg:self-center">
                Tailwind CSS Animations
            </h1>

            <div>
                <h1 className="mb-10 text-2xl font-bold">Bounce</h1>
                <div className="w-20 h-20 bg-black rounded-full animate-bounce"></div>
            </div>

            <div>
                <h1 className="mb-10 text-2xl font-bold">Ping</h1>
                <div>
                    <span>
                        <span className="bg-purple-400 h-6 w-6 rounded-full absolute inline-flex opacity-75 animate-ping"></span>
                        <span className="bg-purple-500 h-6 w-6 rounded-full relative inline-flex"></span>
                        Active
                    </span>
                </div>
            </div>

            <div>
                <h1 className="mb-10 text-2xl font-bold">Spinner</h1>
                <div>
                    <i className="fas fa-spinner text-blue-900 text-2xl mr-2 animate-spin"></i>
                    Loading
                </div>
            </div>

            <div>
                <h1 className="mb-10 text-2xl font-bold">Pulse</h1>
                <div>
                    <i className="fas fa-heartbeat text-red-700 text-6xl animate-pulse"></i>
                </div>
            </div>
        </div>
    )
}

export default Animations