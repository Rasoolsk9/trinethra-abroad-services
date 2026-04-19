import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";
import { ScrollToHash } from "./ScrollToHash";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToHash />
      <Navbar />
      <main className="flex-1 pb-20 pt-[calc(env(safe-area-inset-top,0px)+4.25rem)] md:pt-[calc(env(safe-area-inset-top,0px)+5rem)]">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};
