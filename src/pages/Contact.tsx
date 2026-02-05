import { ContactForm } from "../components/Contact/ContactForm"
import { ContactHero } from "../components/Contact/ContactHero"
import { ContactInfo } from "../components/Contact/ContactInfo"

function Contact() {
  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      <ContactHero />
      <section className="pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Contact