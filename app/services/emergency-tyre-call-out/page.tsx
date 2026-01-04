import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <>
    <Header/>
    <ServiceDetailPage
      eyebrow="24/7 Support"
      title="Emergency Tyre Call-Out in London"
      subtitle="If it’s not safe to continue driving, we come to you. Quick coordination, professional service, and a focus on getting you mobile again."
      heroImage="/services/emergency-tyre.jpg"
      highlights={[
        "Fast response for urgent tyre issues",
        "Support across London postcodes",
        "Roadside-friendly process",
        "Clear ETA and next steps",
      ]}
      bullets={[
        {
          title: "Rapid Call Handling",
          text: "We take the essentials quickly: location, tyre size, and the situation—then confirm the plan.",
        },
        {
          title: "On-Site Resolution",
          text: "Whether it’s a replacement or immediate support, we arrive equipped to handle common emergency scenarios.",
        },
        {
          title: "Safe Finish",
          text: "We complete checks before you drive off and advise on anything you should monitor afterwards.",
        },
      ]}
      ctaTitle="Stuck right now?"
      ctaText="Call or WhatsApp your location. We’ll confirm the quickest option and support you immediately."
      brandColor={siteConfig.brandColor}
      phoneHref="tel:+447412840023"
      whatsappHref="https://wa.me/447412840023"
    />
    <Footer/>
    </>
  );
}
