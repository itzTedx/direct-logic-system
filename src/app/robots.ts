import { MetadataRoute } from "next";

import { BASE_URL } from "@/data/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
