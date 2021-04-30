import React from 'react'

const Animations = () => {
    return(
        <div className="container mx-auto py-20">
            <div className="w-20 h-20 bg-black rounded-full animate-bounce"></div>

            <div>
                <i className="fas fa-spinner text-blue-900 text-2xl animate-spin px-3 py-3"></i>
                Loading
            </div>
        </div>
    )
}

export default Animations