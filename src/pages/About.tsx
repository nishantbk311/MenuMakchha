import { AboutEssence } from "../components/About/AboutEssence"
import { AboutHero } from "../components/About/AboutHero"
import { AboutValues } from "../components/About/AboutValues"
import { CTASection } from "../components/ui/CTASection"

function About() {
  return (
     <div className="animate-in fade-in duration-700">
      <AboutHero />
      <AboutEssence />
      <AboutValues />
      <CTASection 
        title={<>Ready to <span className="text-mint-400">modernize</span> <br /> your menu?</>}
        description="Join hundreds of businesses already using Menumakchha to redefine their dining experience."
        buttonText="Start Your Journey"
        path="/register"
      />
    </div>
  )
}

export default About