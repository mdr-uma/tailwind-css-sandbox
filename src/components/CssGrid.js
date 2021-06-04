import React from 'react'

const CssGrid = () => {
    return(
        <div className='grid grid-cols-4 gap-1'>
            <div className='bg-blue-500 text-center text-white py-6 col-span-3'>1</div>
            <div className='bg-blue-500  text-center text-white py-2 row-span-6'>2</div>
            <div className='bg-blue-500 rounded text-center text-white py-6 row-span-2'>11</div>
            <div className='bg-blue-500 rounded text-center text-white py-16'>12</div>
            <div className='bg-blue-500 rounded text-center text-white py-6 row-span-2'>14</div>
            <div className='bg-blue-500 rounded text-center text-white py-6'>15</div>
            <div className='bg-blue-500 rounded text-center text-white py-6'>16</div>
            <div className='bg-blue-500 rounded text-center text-white py-6 row-span-2'>17</div>
            <div className='bg-blue-500 rounded text-center text-white py-6 row-span-2'>19</div>
            <div className='bg-blue-500 rounded text-center text-white py-6'>20</div>
            <div className='bg-blue-500 text-center text-white py-16 col-span-3'>24</div>
        </div>

    )
}

export default CssGrid