import type { MetadataRoute } from "next";

const BASE_URL = "https://internal.caumosjapan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/van-hoa`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/danh-gia-nang-luc`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
