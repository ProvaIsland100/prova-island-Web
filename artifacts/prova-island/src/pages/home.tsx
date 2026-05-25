import { Waves } from "lucide-react";
import SiteLayout from "@/components/site-layout";

export default function Home() {
  return (
    <SiteLayout>
      <div className="flex flex-col items-center justify-center w-full relative">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="w-full max-w-[1400px] mx-auto p-4 md:p-8 lg:p-12 relative z-10 flex flex-col items-center">
          <div className="relative group w-full animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Playful decorative glow behind the image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-primary/10 to-accent/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-70" />

            <img
              src="/prova-island-hero.png"
              alt="Prova Island gamified learning homepage artwork"
              className="relative w-full h-auto object-contain rounded-[2rem] shadow-2xl shadow-primary/20 border-8 border-white group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              data-testid="img-hero-artwork"
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="bg-white/90 backdrop-blur text-primary px-6 py-3 rounded-full font-bold text-lg shadow-xl shadow-primary/20 border-2 border-primary/20 flex items-center gap-2">
                <Waves className="w-5 h-5" /> Start Your Adventure!
              </span>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
