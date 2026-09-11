import { createFileRoute } from "@tanstack/react-router";
import { AutoScout24Listings } from "@/components/AutoScout24Listings";

// Internal-only utility page, not linked from anywhere in the site's nav.
// Renders AS24's own HCI widget (their officially sanctioned embed mechanism)
// so the current live listing data can be read off it directly — this reads
// what our own site is legitimately showing, rather than fetching
// autoscout24.ch itself, which is behind bot protection. Not a public page:
// data/vehicles.ts and data/campers.ts are updated from what's read here,
// /occasionen keeps its own custom-styled cards for actual visitors.
export const Route = createFileRoute("/as24")({
  component: AS24DataPage,
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
});

function AS24DataPage() {
  return (
    <div style={{ background: "#fff", padding: "1rem" }}>
      <AutoScout24Listings configId="2428" />
    </div>
  );
}
