import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <>
    <Header/>
    <ServiceDetailPage
      eyebrow="Always Available"
      title="24/7 Mobile Tyre Assistance in London"
      subtitle="Day or night, when tyre problems can’t wait. We keep the process straightforward, confirm details quickly, and aim for a smooth resolution."
      heroImage="/services/service-3.jpg"
      highlights={[
        "Support available day and night",
        "Simple contact and quick coordination",
        "Coverage across London areas",
        "Safety-first approach",
      ]}
      bullets={[
        {
          title: "Immediate Response",
          text: "We gather the key details and confirm the best route forward without dragging the process.",
        },
        {
          title: "Prepared Arrival",
          text: "We arrive with equipment and the right approach to handle urgent tyre situations efficiently.",
        },
        {
          title: "Confidence to Continue",
          text: "Before you move, we do the checks that matter so you can drive away safely.",
        },
      ]}
      ctaTitle="Need help right now?"
      ctaText="Call or WhatsApp your location and tyre size. We’ll guide you and arrange support quickly."
      brandColor={siteConfig.brandColor}
      phoneHref="tel:+447412840023"
      whatsappHref="https://wa.me/447412840023"
    />
    <Footer/>
    </>
  );
}
