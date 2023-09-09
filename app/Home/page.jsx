"use client"

import Email from '@/Components/Emails'
import HeroSection from '@/Components/HeroSection'
import Products from '@/Components/Products'
import PromotionSection from '@/Components/PromotionSection'
const HomePage = () => {
    return ( 
        <section>
      <HeroSection/>
      <Products/>
      <PromotionSection/>
      <Email/>
        </section>
     );
}
 
export default HomePage;