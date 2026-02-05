import AppFeaturesSection from "../components/Home/AppFeaturesSection"
import { BusinessTypesSection } from "../components/Home/BusinessTypesSection"
import ElevateSection from "../components/Home/ElevateSection"
import { FAQSection } from "../components/Home/FAQSection"
import Features from "../components/Home/Features"
import Hero from "../components/Home/Hero"
import { PricingSection } from "../components/Home/PricingSection"
import WhyChooseUs from "../components/Home/WhyChooseUs"

function Home() {
  return (
    <div>
       <Hero />
        
        <div className="relative -mt-20 md:-mt-28 z-20 px-4 container mx-auto mb-20">
          <Features />
        </div>
        <WhyChooseUs />
        <ElevateSection />
        <AppFeaturesSection />
        <PricingSection />
        <BusinessTypesSection/>
        <FAQSection />
        
    </div>
  )
}

export default Home