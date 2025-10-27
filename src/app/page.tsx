import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturesCarousel from "@/components/features";

import PricingCTA from "@/components/pricing";
import FAQSection from "@/components/FAQ";

import EmailSignup from "@/components/emailsignup";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <FeaturesCarousel />
      
      <PricingCTA />
      <FAQSection />
      <EmailSignup  />
      
    </>
  );
}