import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesSection />
      <HowItWorks/>
      <WhyChooseUs/>
      <ReviewsSection/>
      <CtaSection/>
      <Footer/>
    </>
  );
}
