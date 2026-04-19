import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const FreeCounselling = lazy(() => import("./pages/FreeCounselling"));
const CountryPage = lazy(() => import("./pages/CountryPage"));
const UniversityLeadPage = lazy(() => import("./pages/UniversityLeadPage"));
const UniversityDetailsPage = lazy(() => import("./pages/UniversityDetailsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      gcTime: 5 * 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

function RouteFallback() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 px-4">
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-primary border-t-transparent"
        aria-hidden
      />
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/free-counselling" element={<FreeCounselling />} />
              <Route path="/university/:slug/apply" element={<UniversityLeadPage />} />
              <Route path="/university/:slug" element={<UniversityDetailsPage />} />
              <Route path="/:country" element={<CountryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
