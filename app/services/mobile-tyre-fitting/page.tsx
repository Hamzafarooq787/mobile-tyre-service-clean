import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <>
    <Header/>
    <ServiceDetailPage
      eyebrow="Mobile Tyre Near Me"
      title="Mobile Tyre Fitting in London"
      subtitle="On-site fitting at your home, workplace, or roadside location. We arrive with the right tools, fit safely, and confirm everything is ready before you set off."
      heroImage="/services/mobile-tyre-fitting.jpg"
      highlights={[
        "Fitting at your location across London",
        "Proper torque and safety checks",
        "Suitable for cars, vans & light commercial",
        "Convenient booking and quick turnaround",
      ]}
      bullets={[
        {
          title: "Arrival & Assessment",
          text: "We confirm your location, tyre size, and vehicle details, then inspect the tyre condition to avoid any surprises during fitting.",
        },
        {
          title: "Professional Fitment",
          text: "Tyres are installed using specialist equipment with correct seating, inflation, and secure fitting methods.",
        },
        {
          title: "Balancing & Final Checks",
          text: "We complete balancing where required and run final checks so your drive feels stable and safe.",
        },
      ]}
      ctaTitle="Need tyres fitted today?"
      ctaText="Call or WhatsApp with your tyre size and location. We’ll confirm availability and get you booked in quickly."
      brandColor={siteConfig.brandColor}
      phoneHref="tel:+447412840023"
      whatsappHref="https://wa.me/447412840023"
    />
    <Footer/>
    </>
  );
}
