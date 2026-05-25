import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Trees } from "lucide-react";
import { SiInstagram, SiYoutube, SiTiktok, SiX, SiThreads } from "react-icons/si";

const navLinks = [
  { label: "How It Works", href: "https://sites.google.com/view/prova-island-how-it-works/how-prova-works" },
  { label: "Patreon", href: "https://www.patreon.com/cw/ProvaIsland" },
  { label: "Microblog", href: "https://oneminuteteaching.blogspot.com/" },
  { label: "Support", href: "mailto:info@provaisland.com", self: true },
  { label: "Log In", href: "https://www.provaisland.tv/" },
];

const socialLinks = [
  { icon: SiInstagram, label: "Instagram", href: "https://www.instagram.com/provaisland", color: "hover:text-[#E1306C]" },
  { icon: SiYoutube, label: "YouTube", href: "https://www.youtube.com/channel/UCx12TZRiD7vVcFARwVuM6cA", color: "hover:text-[#FF0000]" },
  { icon: SiTiktok, label: "TikTok", href: "https://www.tiktok.com/@provaisland", color: "hover:text-black dark:hover:text-white" },
  { icon: SiX, label: "X (Twitter)", href: "https://x.com/provaisland", color: "hover:text-black dark:hover:text-white" },
  { icon: SiThreads, label: "Threads", href: "https://www.threads.com/@provaisland", color: "hover:text-black dark:hover:text-white" },
];

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col bg-background font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-b-primary/10 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Trees className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-2xl md:text-3xl font-black tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Prova Island
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.self ? "_self" : "_blank"}
                rel={link.self ? undefined : "noopener noreferrer"}
                className="text-base font-bold text-muted-foreground hover:text-primary transition-colors hover:-translate-y-0.5 transform duration-200"
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-2 border-l-2 border-primary/10 pl-6">
              <a href="https://www.provaisland.tv/" target="_blank" rel="noopener noreferrer" data-testid="button-signup">
                <Button variant="secondary" className="font-bold text-base px-6 h-12 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 rounded-2xl border-b-4 active:border-b-0 active:translate-y-1">
                  Sign Up
                </Button>
              </a>
              <a href="https://www.provaisland.tv/" target="_blank" rel="noopener noreferrer" data-testid="button-play-now">
                <Button className="font-bold text-base px-8 h-12 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 rounded-2xl border-b-4 active:border-b-0 active:translate-y-1">
                  Play Now
                </Button>
              </a>
            </div>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl" data-testid="button-menu">
                  <Menu className="w-8 h-8 text-primary" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background border-l-4 border-l-primary/10 flex flex-col gap-6 pt-16">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.self ? "_self" : "_blank"}
                      rel={link.self ? undefined : "noopener noreferrer"}
                      className="text-xl font-bold text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                      data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="h-0.5 w-full bg-primary/10 my-2" />
                  <a href="https://www.provaisland.tv/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="secondary" className="w-full font-bold text-lg h-14 rounded-2xl border-b-4 active:border-b-0 active:translate-y-1 shadow-md">
                      Sign Up
                    </Button>
                  </a>
                  <a href="https://www.provaisland.tv/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full font-bold text-lg h-14 rounded-2xl border-b-4 active:border-b-0 active:translate-y-1 shadow-md">
                      Play Now
                    </Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-white border-t-4 border-t-primary/10 mt-auto relative z-20 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 flex flex-col items-center">

          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/10 p-3 rounded-2xl">
              <Trees className="w-8 h-8 text-primary" />
            </div>
            <span className="text-3xl font-black tracking-tight text-foreground">
              Prova Island
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-background rounded-2xl shadow-sm border-2 border-transparent hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 text-muted-foreground ${social.color}`}
                aria-label={social.label}
                data-testid={`link-social-${social.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <social.icon className="w-7 h-7" />
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl border-t-2 border-primary/10 pt-8 gap-4 text-center md:text-left">
            <p className="text-muted-foreground font-semibold" data-testid="text-copyright">
              2026 Prova Island, All Rights Reserved.
            </p>
            <a
              href="/privacypolicy.html"
              className="text-muted-foreground font-bold hover:text-primary transition-colors"
              data-testid="link-privacy-policy"
            >
              Privacy Policy
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}
