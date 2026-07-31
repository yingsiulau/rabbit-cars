import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Only set for the GitHub Pages build (see vite.config.ts) — undefined
    // elsewhere, which keeps the router's normal root basepath.
    basepath: import.meta.env.VITE_BASE_PATH || undefined,
  });

  return router;
};
