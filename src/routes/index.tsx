import { createFileRoute, redirect } from "@tanstack/react-router";

// The site currently consists of the Sulthan Bathery landing page; send / there.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raindrops Resorts – Resorts in Sulthan Bathery, Wayanad" },
      { name: "description", content: "Boutique plantation resort near Sulthan Bathery, Wayanad." },
      { property: "og:title", content: "Raindrops Resorts – Resorts in Sulthan Bathery, Wayanad" },
      { property: "og:description", content: "Boutique plantation resort near Sulthan Bathery, Wayanad." },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/resorts-in-sulthan-bathery", statusCode: 301 });
  },
});
