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
      title="Tyre Replacement in London"
      subtitle="Worn, damaged, or unsafe tyres replaced at your location. We focus on correct fitment, smooth driving, and dependable safety checks."
      heroImage="/services/tyre-replacement.jpg"
      highlights={[
        "Replace worn or damaged tyres",
        "Correct fitment with safety-first approach",
        "Convenient on-site service",
        "Clear guidance on the next steps",
      ]}
      bullets={[
        {
          title: "Tyre Condition Check",
          text: "We verify the tyre condition and confirm the correct replacement specification for your vehicle.",
        },
        {
          title: "Removal & Installation",
          text: "Old tyres are removed carefully and new tyres are installed with correct seating and inflation.",
        },
        {
          title: "Stability & Safety Verification",
          text: "We check for secure fitment, correct pressure, and a clean finish so you can drive with confidence.",
        },
      ]}
      ctaTitle="Need a replacement tyre?"
      ctaText="Share your tyre size and location. We’ll confirm options and arrange a time that works for you."
      brandColor={siteConfig.brandColor}
      phoneHref="tel:+447412840023"
      whatsappHref="https://wa.me/447412840023"
    />
    <Footer/>
    </>
  );
}
