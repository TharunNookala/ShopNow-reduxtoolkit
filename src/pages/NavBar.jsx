import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const cartProducts = useSelector(state => state.cart);
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='w-screen flex justify-between items-center h-20 max-w-[1240px] mx-auto p-2'>
            <h1 className='text-4xl font-bold italic'>
                <Link to='/'>
                    ShopNow
                </Link>
            </h1>
            <ul className='hidden md:flex gap-3 md:justify-evenly md:w-full'>
                <li className='p-4 cursor-pointer bg-gray-300 rounded-lg'><Link to='/home'>Home</Link></li>
                <li className='p-4 cursor-pointer bg-gray-300 rounded-lg'><Link to='/products'>Products</Link></li>
                <li className='relative p-4 cursor-pointer bg-gray-300 rounded-lg'>
                    <Link to='/cart'>
                        Cart
                        <sup className='absolute -right-2.5 text-2xl font-semibold bg-yellow-400 p-1 rounded-md'>{cartProducts.length}</sup>
                    </Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={23} /> : <AiOutlineClose size={23} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-white' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-500 cursor-pointer'><Link to='/home'>Home</Link></li>
                    <li className='p-4 border-b border-gray-500 cursor-pointer'><Link to='/products'>Products</Link></li>
                    <li className='p-4'><Link to='/cart'>Cart <sup className='text-xl font-semibold bg-yellow-400 p-1 rounded-md text-green-700'>{cartProducts.length}</sup></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar