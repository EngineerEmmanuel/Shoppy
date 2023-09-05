"use client"

import {  useDispatch } from 'react-redux';
import { addToCart } from '../Features/cartSlice';
import products from "../Components/ProductData";
import store from "../app/store"

const Products = () => {
    // const dispatch = useDispatch();

    // const handleAddToCart= (product)=>{
    //    dispatch(addToCart(product))
    // }
    return ( 
        <section>
            {/* product grid container */}
            <div className=" grid grid-cols-2 p-3 gap-4 md:grid md:grid-cols-3 md:items-center lg:grid-cols-4">
                {products.map((product)=>{
                    return(
                        // product container
                        <div className="w-full border-solid border-2 border-indigo-600 rounded-md">
                            <img src={product.productImg} alt="" className="w-4/6  align-center mx-auto aspect-3/3 lg:w-4/6 " />
                            {/* product details */}
                            <div className='p-2'>
                            <p>{product.productName}</p>

                            </div>
                            {/* card footer */}
                            <footer className="flex justify-center mt-2 mb-1">
                            <button onClick={()=>handleAddToCart(product)} className="bg-red-500 w-24 pt-1 pb-1 rounded-md text-white">Add to cart</button>

                            </footer>
                        </div>
                    )
                })}
            </div>
        </section>
     );
}
 
export default Products;