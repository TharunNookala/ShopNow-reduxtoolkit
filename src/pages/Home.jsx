import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex items-center justify-center'>
            <h2 className='text-xl font-bold italic px-2 py-4'>Go to Products and add some items to the cart!!</h2>
            <Outlet />
        </div>
    )
}

export default Home