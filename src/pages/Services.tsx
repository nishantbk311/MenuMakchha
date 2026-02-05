import { CTASection } from "../components/ui/CTASection"
import { ServicesGrid } from "../components/Services/ServicesGrid"
import { ServicesHero } from "../components/Services/ServicesHero"

function Services() {
  return (
      <div className="animate-in fade-in duration-700">
      <ServicesHero />
      <ServicesGrid />
      <CTASection 
        title={<>Empower Your Brand with <br /><span className="text-mint-400">Digital Innovation</span></>}
        description="Join the new era of dining where technology meets authentic hospitality."
        buttonText="Contact Support"
        path="/contact"
      />
    </div>
  )
}

export default Services