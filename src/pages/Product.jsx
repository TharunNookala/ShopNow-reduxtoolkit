import React, { useEffect } from 'react'
import { addItem } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/productSlice'

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    // console.log("products", products)
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    if (products.status === 'loading') {
        return <div className='w-screen text-center'><p className='text-3xl font-bold italic'>Loading...</p></div>
    }

    if (products.status === 'error') {
        return <p>Something Went Wrong! Try again later.</p>
    }

    const addToCart = (product) => {
        dispatch(addItem(product))
    }

    return (
        <div className='grid md:grid-cols-4 p-2'>
            {
                products.data.map(product =>
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
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Product