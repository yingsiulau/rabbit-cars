import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rabbit-Cars – Ihr Occasionsspezialist in Gümligen seit über 40 Jahren" },
      { name: "description", content: "Rabbit-Cars in Gümligen bei Bern: Familienbetrieb mit über 40 Jahren Tradition. Autos, Camper & Vans, Motorräder – geprüfte Occasionen und persönliche Beratung." },
      { name: "author", content: "Rabbit-Cars" },
      { property: "og:title", content: "Rabbit-Cars – Ihr Occasionsspezialist in Gümligen seit über 40 Jahren" },
      { property: "og:description", content: "Rabbit-Cars in Gümligen bei Bern: Familienbetrieb mit über 40 Jahren Tradition. Autos, Camper & Vans, Motorräder – geprüfte Occasionen und persönliche Beratung." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rabbit-Cars – Ihr Occasionsspezialist in Gümligen seit über 40 Jahren" },
      { name: "twitter:description", content: "Rabbit-Cars in Gümligen bei Bern: Familienbetrieb mit über 40 Jahren Tradition. Autos, Camper & Vans, Motorräder – geprüfte Occasionen und persönliche Beratung." },
      { property: "og:image", content: "https://rabbit-cars.ch/og-image.jpg" },
      { name: "twitter:image", content: "https://rabbit-cars.ch/og-image.jpg" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          name: "Rabbit-Cars",
          image: "https://rabbit-cars.ch/og-image.jpg",
          url: "https://rabbit-cars.ch/",
          telephone: "+41793006060",
          email: "info@rabbit-cars.ch",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Worbstrasse 158",
            postalCode: "3073",
            addressLocality: "Gümligen",
            addressCountry: "CH",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "12:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "13:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "12:30" },
          ],
        },
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        // White circle badge behind the rabbit mark, so the icon has its
        // own contrast and reads the same in light and dark browser chrome
        // — no more need to swap between separate light/dark SVGs.
        rel: "icon",
        href: "/favicon.svg",
        type: "image/svg+xml",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de-CH">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const hash = useRouterState({ select: (s) => s.location.hash });

  // scrollRestoration: true (router.tsx) restores the previous scroll
  // position after mount, racing with — and winning over — the browser's
  // native scroll-to-hash-on-load. Re-run it a tick later so #anchor links
  // (e.g. the homepage's "Autos"/"Motorräder" sections) still land correctly.
  useEffect(() => {
    if (!hash) return;
    const id = requestAnimationFrame(() => {
      document.getElementById(hash.replace(/^#/, ""))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(id);
  }, [hash]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
