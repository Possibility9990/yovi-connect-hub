import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YOVI Marketplace — Buy, Sell & Find Trusted Services Near You" },
      { name: "description", content: "YOVI connects you with verified sellers and service providers in your community. Shop products and book trusted local services with escrow protection." },
      { property: "og:title", content: "YOVI Marketplace" },
      { property: "og:description", content: "Buy, sell, and find trusted services near you on YOVI." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Home />;
}
