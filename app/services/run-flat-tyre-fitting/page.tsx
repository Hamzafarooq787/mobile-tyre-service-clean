import Footer from "@/components/Footer";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <>
    <Header/>
    <ServiceDetailPage
      eyebrow="Specialist Fitment"
      title="Run-Flat Tyre Fitting in London"
      subtitle="Run-flat tyres need correct handling. We follow a careful process to ensure proper installation, safe pressures, and a dependable finish."
      heroImage="/services/service-5.jpg"
      highlights={[
        "Careful run-flat handling",
        "Correct fitment process",
        "Safety checks included",
        "Ideal for modern vehicles",
      ]}
      bullets={[
        {
          title: "Correct Tyre Specification",
          text: "We confirm the exact run-flat requirement and ensure the installation matches your vehicle needs.",
        },
        {
          title: "Controlled Installation",
          text: "Run-flats are fitted with the right approach to avoid unnecessary stress on the tyre during mounting.",
        },
        {
          title: "Post-Fit Verification",
          text: "We confirm pressures and overall fitment so you leave with stability and peace of mind.",
        },
      ]}
      ctaTitle="Need run-flat tyres fitted?"
      ctaText="Share your tyre size and location. We’ll confirm the setup and get you booked in."
      brandColor={siteConfig.brandColor}
      phoneHref="tel:+447412840023"
      whatsappHref="https://wa.me/447412840023"
    />
    <Footer/>
    </>
  );
}
