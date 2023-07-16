import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import { Provider } from 'react-redux';
import store from '../store/store';

const AppLayout = () => {
    return (
        <Provider store={store}>
            <NavBar />
            <main>
                <div className='w-full bg-slate-100 text-3xl font-bold flex flex-col items-center justify-center gap-4 p-2'>
                    {/* <h1> Welcome to Redux toolkit....Great Learning..!</h1> */}
                    <h1> Welcome....Happy Shopping..!</h1>
                    <button className='bg-gray-400 p-4 rounded-md'><Link to='/home'>Get Started &rarr;</Link></button>
                </div>

                <Outlet />
            </main>
        </Provider>
    )
}

export default AppLayout