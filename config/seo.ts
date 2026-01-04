// src/config/seo.ts

import { siteConfig } from "./site";

export const seoConfig = {
  title: `${siteConfig.name} | 24/7 Mobile Tyre Fitting`,
  description:
    "Fast, reliable mobile tyre fitting at your location. Same-day availability, honest pricing, and quick turnaround.",
} as const;
