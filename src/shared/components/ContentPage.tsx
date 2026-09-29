import type { ReactNode } from "react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";

type ContentPageProps = {
  children: ReactNode;
  wide?: boolean;
};

export const ContentPage = ({ children, wide = false }: ContentPageProps) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="relative pt-32 pb-20 px-6">
        <div className={`container mx-auto relative z-10 ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
