const mobileNumber = "7341251404";
const internationalNumber = `44${mobileNumber}`;

export const siteConfig = {
  name: "Mobile Tyre Service",
  brandColor: "#7CFC00",
  phone: `0${mobileNumber.slice(0, 4)} ${mobileNumber.slice(4)}`,
  address: "Mobile service covering Birmingham and surrounding areas",
  links: {
    telLink: `tel:+${internationalNumber}`,
    whatsappLink: `https://wa.me/${internationalNumber}`,
    email: "info@mobiletyreservice.co.uk",
  },
};
