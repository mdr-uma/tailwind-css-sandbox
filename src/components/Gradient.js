import React from 'react'

const Gradient = () => {
    return(
        <div>
            <div className="bg-gradient-to-br from-blue-500 via-blue-100 to-indigo-300 py-12">
                <h1 className="text-blue-900 text-4xl font-extrabold text-center">
                Gradient Color Stops
                </h1>
            </div>
            <p className="text-transparent bg-clip-text bg-gradient-to-tr from-green-900 to-red-300 text-3xl font-bold text-center">
                Gradient Text
            </p>
            <button type="button" className="bg-gradient-to-br from-purple-400 to-blue-500 hover:from-yellow-500 hover:to-green-500 p-3 mx-2 rounded text-white">
                Hover
            </button>
            <button type="button" className="bg-gradient-to-tr from-purple-400 to-blue-500 focus:from-yellow-500 focus:to-green-500 p-3 mx-2 rounded text-white">
                Focus
            </button>
        </div>
    )
}

export default Gradient