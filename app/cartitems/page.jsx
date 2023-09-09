"use client"
import { useSelector, useDispatch } from 'react-redux';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import {remove} from "../Features/cartSlice";
const CartSection = () => {
    const carts = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const removeFromCart=(item)=>{
        dispatch(remove(item))
    }

    const totalAmount = carts.reduce((total, item) => total + item.price, 0);
    return ( 
        <section>
            {carts.length>0?<h1 className='p-2'>You have {carts.length} item(s) in cart</h1>:<h1 className='p-2'>Your cart is empty</h1>}
            <div className=" flex flex-col gap-3 mr-2 ml-2 md:grid grid-cols-2   lg:grid grid-cols-2 ">
                {/* cartitems grid container */}
                <div className="">
                {carts.map((item)=>{
                    return(
                        <div className='flex items-center justify-between'>
                        <div className='w-20 mb-3 md:w-40 lg:w-45'>
                            <img src={item.productImg} alt="" className="image w-full"/>
                        </div>
                            {/* price container */}
                            <div>
                                <h3 className="mb-2">Price</h3>
                                <p>💲{item.price}</p>
                            </div>
                            {/* remove button container */}
                            <div>
                                <button className="bg-red-500 p-1 rounded-md text-white" onClick={()=>removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                    )
                })}
               
                
                </div>
                 {/* Payment section */}
                <div className='w-full p-2 h-auto bg-checkout rounded-md md:h-auto lg:h-auto'>
                    {/* payment details */}
                    <div>
                        <form action="" className="flex flex-col gap-10">
                        {/* first input field */}
                        <div className="flex gap-2">
                        <input type="radio" name="" id=""  />
                        {/* card image container */}
                        <div>
                            <p><CreditCardIcon/> Credit card</p>
                        </div>
                        </div>
                        <input type="text" placeholder="Name on card" name="" id="" className="p-2 bg-transparent rounded-md border-solid border border-gray-300 focus:outline-none" />
                         <input type="number" placeholder="Card number" className="p-2 bg-transparent rounded-md border-solid border border-gray-300 focus:outline-none" />
                        </form>
                    </div>
                    {/* select container */}
                    <div className="mt-4 flex gap-2 ">
                        <select name="Month"  id="" className="border-solid border border-gray-300 p-2 focus:outline-none">
                            <option value="Month" disabled>Month</option>
                            <option value="September" >September</option>
                        </select>
                        <select name="Year"  id="" className="border-solid border border-gray-300 p-2 focus:outline-none">
                            <option value="Year" disabled>Year</option>
                            <option value="2023" >2023</option>
                        </select>
                    </div>
                    <p className="mt-4">You will pay 💲{totalAmount}</p>
                    {/* Button container */}
                    <div className="w-full mt-8">
                        <button className="w-full  p-2 text-white rounded-md bg-red-500 ">Checkout</button>
                    </div>
                </div>

               
            </div>
            
        </section>
     );
}
 
export default CartSection;