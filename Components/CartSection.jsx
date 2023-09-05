"use client"
import { useSelector } from 'react-redux';
import cartSlice from '@/Features/cartSlice';
const CartSection = () => {
    // const carts = useSelector(state => state.cartItems);
    return ( 
        <section>
            <h1>Your cart items</h1>
            {/* <p>{productName}</p> */}
            <div>
                {/* {carts?.map((item)=>{
                    return(
                        // cart item container
                        <div>
                            <img src={item.productImg} alt="" />
                            <p>{item.productName}</p>
                        </div>
                    )
                })} */}
            </div>
            <h4>e choke</h4>
        </section>
     );
}
 
export default CartSection;