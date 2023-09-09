"use client"

import {  useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../app/Features/cartSlice';
import products from "../Components/ProductData";
import SliderProducts from './SliderProducts';

import GradeIcon from '@mui/icons-material/Grade';

const Products = () => {
    const carts = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart= (product)=>{
       dispatch(addToCart(product))
    }
    return ( 
        <section className="mt-14">
            <SliderProducts/>
            {/* product grid container */}
            <div className=" grid grid-cols-2  gap-4 mt-5 ml-2 mr-2 md:grid md:grid-cols-3 md:items-center lg:grid-cols-4">
                {products.map((product)=>{
                    return(
                        // product container
                        <div className="w-full border-solid border border-gray-300 rounded-md">
                            <img src={product.productImg} alt="" className="w-4/6  align-center mx-auto aspect-3/3 image lg:w-4/6 " />
                            {/* product details */}
                            <div className='p-2'>
                            <p>{product.productName}</p>
                            <p className="pb-2 pt-2">💲{product.price}</p>
                            <p><GradeIcon className="text-green-500"/> <GradeIcon className="text-green-500"/> <GradeIcon className="text-green-500"/></p>
                            </div>
                            {/* card footer */}
                            <footer className="flex justify-center mt-2 mb-1">
                            <button onClick={()=>handleAddToCart(product)} className="bg-red-500 w-24 pt-1 pb-1 rounded-md text-white"> {carts.find((pro)=>pro.id===product.id)?"In cart":"Add to cart"}</button>

                            </footer>
                        </div>
                    )
                })}
            </div>
        </section>
     );
}
 
export default Products;