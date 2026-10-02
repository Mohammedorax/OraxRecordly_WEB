import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/asset";

/** `output: "export"` requires every metadata route to be explicitly static. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
