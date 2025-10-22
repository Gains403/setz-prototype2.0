import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturesCarousel from "@/components/features";
import HowItWorks from "@/components/HowItWorks";
import PricingCTA from "@/components/pricing";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/footer";
import EmailSignup from "@/components/emailsignup";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <FeaturesCarousel />
      <HowItWorks />
      <PricingCTA />
      <FAQSection />
      <EmailSignup  />
      <Footer/>
    </>
  );
}