import React from 'react'
import { useSelector } from 'react-redux'
import { addItem, deleteItem } from '../store/cartSlice'
import { useDispatch } from 'react-redux'

const Cart = () => {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart);
    const addToCart = (product) => {
        dispatch(addItem(product))
    }
    const removeFromCart = (product) => {
        dispatch(deleteItem(product.id))
    }
    return (
        <>
            <div className='h-14 bg-green-300 p-2 text-center'><p className='text-2xl font-bold '>{cartProducts.length} products are currently in cart</p></div>
            <div className='grid md:grid-cols-4 p-2'>
                {cartProducts.map(product =>
                (
                    <div className='border-2 p-1 m-2 text-center flex flex-col items-center justify-center rounded-md' key={product.id}>
                        <div className='flex p-2 justify-center w-[100px] h-[130px]'>
                            <img src={product.image} alt='/' width={100} height={50} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-xl font-bold'>{product.title}</h1>
                            <h2 className='text-lg font-semibold'>₹ {product.price}</h2>
                            <div className='flex p-2 mt-2 border-t-2 items-center justify-evenly'>
                                <button
                                    className='bg-blue-700 text-white text-base p-2 rounded-md'
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                                <button className='bg-red-600 text-white rounded-md p-1'
                                    onClick={() => removeFromCart(product)}
                                >
                                    delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart