"use client"
const Email = () => {
    return ( 
        <section className="bg-BgImage bg-cover bg-no-repeat bg-center text-white h-80 rounded-md  backdrop-brightness-50 mt-20 ml-2 mr-2">
            <div className=" backdrop-brightness-50 h-full w-full">

            
            <h2 className="text-center text-white text-2xl pt-10">Newsletter</h2>
            <p className="text-center">Subscribe to our newsletter to get fashion updates and clothing tips that can help you. </p>
            {/* Email subscription con */}
            <div className="flex justify-center pt-20 z-2 ">
                <form action="" className="flex items-center">
                    <input type="email" placeholder="Email" required className="bg-transparent border border-gray-500 w-64 p-2 rounded-md" />
                    <button type="submit" className="bg-red-500 w- p-2 ">Send</button>
                </form>
            </div>
            </div>
        </section>
     );
}
 
export default Email;