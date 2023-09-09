"use client"
const PromotionSection = () => {
    return ( 
        <section className="mt-20 ml-2 mr-2">
            {/* promotion container */}
            <div className="flex flex-col gap-y-7 md:grid grid-cols-2   lg:grid grid-cols-2 ">
                {/* promotion text */}
                <div>
                    <h2 className="mb-6 font-black text-2xl">Remember, You Are  a High Value Man, Always Deliver Value!</h2>
                    <p>Step into the world of Entize, where we specialize in offering discerning gentlemen the epitome of style, quality, and confidence in every piece of men's clothing we curate, so that you can look valuable and also deliver values.</p>
                    {/* promotion btn con */}
                    <div className="mt-3 md:mt-6 lg:mt-6">
                        <button className="bg-red-500 w-32 text-white p-2">Buy Now</button>
                    </div>
                </div>
                {/* promotion image con */}
                <div>
                    <img src="https://media.istockphoto.com/id/1371920690/photo/smiling-businessman-with-smart-phone-and-cup.jpg?s=612x612&w=0&k=20&c=4JsZ_vm6-3_a3h-jcOYni0L9vilJXADUDFNHKEH_ntQ=" alt="" className="w-full h-full rounded-md" />
                </div>
            </div>
        </section>
     );
}
 
export default PromotionSection;