"use client"
import {  useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../app/Features/cartSlice';
const SliderProducts = () => {
    const carts = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart= (product)=>{
       dispatch(addToCart(product))
    }
    const sliderProductsData = [
        {
            id:14,
            productImg:"https://m.media-amazon.com/images/I/71bOidhBWzL._AC_UL400_.jpg",
            price:20
        },
        {
            id:15,
            productImg:"https://m.media-amazon.com/images/I/61cFLnNOfCL._AC_UL400_.jpg",
            price:70
        },
        {
            id:16,
            productImg:"https://m.media-amazon.com/images/I/41mvV5aOjNL._AC_UL400_.jpg",
            price:60
        },
        {
            id:17,
            productImg:"https://m.media-amazon.com/images/I/61O0HEV48IL._AC_UL400_.jpg",
            price:40
        },
        {
            id:18,
            productImg:"https://m.media-amazon.com/images/I/61NFegulp9L._AC_UL400_.jpg",
            price:20
        },
        {
            id:19,
            productImg:"https://m.media-amazon.com/images/I/616RbJz3xgL._AC_UL400_.jpg",
            price:10
        },
        {
            id:20,
            productImg:"https://m.media-amazon.com/images/I/71vFXxdxWPL._AC_UL400_.jpg",
            price:100
        },
        {
            id:21,
            productImg:"https://m.media-amazon.com/images/I/61mnkbVswQL._AC_UL400_.jpg",
            price:20
        },
        {
            id:22,
            productImg:"https://m.media-amazon.com/images/I/61TdmNJVsCL._AC_UL400_.jpg",
            price:30
        },



        {
            id:23,
            productImg:"https://m.media-amazon.com/images/I/612+DN0HYTL._AC_UL400_.jpg",
            price:20
        },
        {
            id:24,
            productImg:"https://m.media-amazon.com/images/I/51KczCDZd7L._AC_UL400_.jpg",
            price:10
        },
        {
            id:25,
            productImg:"https://m.media-amazon.com/images/I/51yUjkleq1L._AC_UL400_.jpg",
            price:80
        },
        {
            id:26,
            productImg:"https://m.media-amazon.com/images/I/61mwfi6d1UL._AC_UL400_.jpg",
            price:50
        },
        {
            id:27,
            productImg:"https://m.media-amazon.com/images/I/81aoW2FMz2L._AC_UL400_.jpg",
            price:40
        }
            
        

    ]
    return ( 
        <section>
            {/* product slider product container */}
            <div className="flex whitespace-nowrap overflow-x-scroll gap-2 sliding-con lg:mx-auto lg:w-2/3 ">
            {sliderProductsData.map((product)=>{
                    return(
                        // product container
                        <div className="w-60 h-full border-solid border border-gray-300 rounded-md">
                            <img src={product.productImg} alt="" className="w-4/6  align-center mx-auto image lg:w-4/6 " />
                            {/* product details */}
                            <div className='p-2'>
                            <p>{product.productName}</p>

                            </div>
                            {/* card footer */}
                            <footer className="flex justify-center mt-2  p-2">
                            <button onClick={()=>handleAddToCart(product)} className="bg-red-500 w-20 pt-1 pb-1 rounded-md text-white"> {carts.find((pro)=>pro.id===product.id)?"In cart":"Buy"}</button>

                            </footer>
                        </div>
                    )
                })}
            </div>
        </section>
     );
}
 
export default SliderProducts;